import { NextResponse } from "next/server";
import { db } from "@/db";
import { news } from "@/db/schema";
import { getAuthUser } from "@/lib/auth";
import { slugify } from "@/lib/utils";
import { eq } from "drizzle-orm";

export async function GET() {
  try {
    const items = await db.select().from(news).orderBy(news.createdAt);
    return NextResponse.json(items);
  } catch (error) {
    console.error("News GET error:", error);
    return NextResponse.json(
      { error: "Failed to fetch news" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  const user = await getAuthUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const slug = slugify(body.title);

    const existing = await db
      .select()
      .from(news)
      .where(eq(news.slug, slug))
      .limit(1);

    if (existing.length > 0) {
      return NextResponse.json(
        { error: "A news item with this title already exists" },
        { status: 400 }
      );
    }

    const result = await db
      .insert(news)
      .values({
        title: body.title,
        slug,
        excerpt: body.excerpt || "",
        content: body.content || "",
        category: body.category || "General",
        imageUrl: body.imageUrl || null,
        readTime: body.readTime || "3 min read",
        published: body.published ? 1 : 0,
      })
      .returning();

    return NextResponse.json(result[0], { status: 201 });
  } catch (error) {
    console.error("News POST error:", error);
    return NextResponse.json(
      { error: "Failed to create news item" },
      { status: 500 }
    );
  }
}

export async function PUT(request: Request) {
  const user = await getAuthUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const { id, ...updates } = body;

    if (!id) {
      return NextResponse.json(
        { error: "News ID is required" },
        { status: 400 }
      );
    }

    if (updates.title) {
      updates.slug = slugify(updates.title);
    }
    updates.updatedAt = new Date();

    const result = await db
      .update(news)
      .set(updates)
      .where(eq(news.id, id))
      .returning();

    if (!result.length) {
      return NextResponse.json(
        { error: "News item not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(result[0]);
  } catch (error) {
    console.error("News PUT error:", error);
    return NextResponse.json(
      { error: "Failed to update news item" },
      { status: 500 }
    );
  }
}

export async function DELETE(request: Request) {
  const user = await getAuthUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const { searchParams } = new URL(request.url);
    const id = parseInt(searchParams.get("id") || "0");

    if (!id) {
      return NextResponse.json(
        { error: "News ID is required" },
        { status: 400 }
      );
    }

    await db.delete(news).where(eq(news.id, id));
    return NextResponse.json({ message: "News item deleted" });
  } catch (error) {
    console.error("News DELETE error:", error);
    return NextResponse.json(
      { error: "Failed to delete news item" },
      { status: 500 }
    );
  }
}
