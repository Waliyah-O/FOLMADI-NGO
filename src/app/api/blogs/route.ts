import { NextResponse } from "next/server";
import { db } from "@/db";
import { blogs } from "@/db/schema";
import { getAuthUser } from "@/lib/auth";
import { slugify } from "@/lib/utils";
import { eq } from "drizzle-orm";

export async function GET() {
  try {
    const items = await db.select().from(blogs).orderBy(blogs.createdAt);
    return NextResponse.json(items);
  } catch (error) {
    console.error("Blogs GET error:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
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
      .from(blogs)
      .where(eq(blogs.slug, slug))
      .limit(1);

    if (existing.length > 0) {
      return NextResponse.json(
        { error: "A blog with this title already exists" },
        { status: 400 }
      );
    }

    const result = await db
      .insert(blogs)
      .values({
        title: body.title,
        slug,
        excerpt: body.excerpt || "",
        content: body.content || "",
        authorName: body.authorName || "",
        authorRole: body.authorRole || "",
        imageUrl: body.imageUrl || null,
        tags: body.tags || "[]",
        readTime: body.readTime || "5 min read",
        published: body.published ? 1 : 0,
      })
      .returning();

    return NextResponse.json(result[0], { status: 201 });
  } catch (error) {
    console.error("Blogs POST error:", error);
    return NextResponse.json(
      { error: "Failed to create blog" },
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
      return NextResponse.json({ error: "Blog ID is required" }, { status: 400 });
    }

    if (updates.title) {
      updates.slug = slugify(updates.title);
    }
    updates.updatedAt = new Date();

    const result = await db
      .update(blogs)
      .set(updates)
      .where(eq(blogs.id, id))
      .returning();

    if (!result.length) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(result[0]);
  } catch (error) {
    console.error("Blogs PUT error:", error);
    return NextResponse.json(
      { error: "Failed to update blog" },
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
      return NextResponse.json({ error: "Blog ID is required" }, { status: 400 });
    }

    await db.delete(blogs).where(eq(blogs.id, id));
    return NextResponse.json({ message: "Blog deleted" });
  } catch (error) {
    console.error("Blogs DELETE error:", error);
    return NextResponse.json(
      { error: "Failed to delete blog" },
      { status: 500 }
    );
  }
}
