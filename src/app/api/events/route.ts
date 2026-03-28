import { NextResponse } from "next/server";
import { db } from "@/db";
import { events } from "@/db/schema";
import { getAuthUser } from "@/lib/auth";
import { slugify } from "@/lib/utils";
import { eq } from "drizzle-orm";

export async function GET() {
  try {
    const items = await db.select().from(events).orderBy(events.eventDate);
    return NextResponse.json(items);
  } catch (error) {
    console.error("Events GET error:", error);
    return NextResponse.json(
      { error: "Failed to fetch events" },
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
      .from(events)
      .where(eq(events.slug, slug))
      .limit(1);

    if (existing.length > 0) {
      return NextResponse.json(
        { error: "An event with this title already exists" },
        { status: 400 }
      );
    }

    const result = await db
      .insert(events)
      .values({
        title: body.title,
        slug,
        description: body.description || "",
        eventDate: body.eventDate || "",
        eventTime: body.eventTime || "",
        location: body.location || "",
        eventType: body.eventType || "General",
        imageUrl: body.imageUrl || null,
        ctaText: body.ctaText || "REGISTER",
        ctaColor: body.ctaColor || "#c0613a",
        featured: body.featured ? 1 : 0,
        published: body.published ? 1 : 0,
      })
      .returning();

    return NextResponse.json(result[0], { status: 201 });
  } catch (error) {
    console.error("Events POST error:", error);
    return NextResponse.json(
      { error: "Failed to create event" },
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
        { error: "Event ID is required" },
        { status: 400 }
      );
    }

    if (updates.title) {
      updates.slug = slugify(updates.title);
    }
    updates.updatedAt = new Date();

    const result = await db
      .update(events)
      .set(updates)
      .where(eq(events.id, id))
      .returning();

    if (!result.length) {
      return NextResponse.json({ error: "Event not found" }, { status: 404 });
    }

    return NextResponse.json(result[0]);
  } catch (error) {
    console.error("Events PUT error:", error);
    return NextResponse.json(
      { error: "Failed to update event" },
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
        { error: "Event ID is required" },
        { status: 400 }
      );
    }

    await db.delete(events).where(eq(events.id, id));
    return NextResponse.json({ message: "Event deleted" });
  } catch (error) {
    console.error("Events DELETE error:", error);
    return NextResponse.json(
      { error: "Failed to delete event" },
      { status: 500 }
    );
  }
}
