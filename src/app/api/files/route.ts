import { NextResponse } from "next/server";
import { db } from "@/db";
import { files } from "@/db/schema";
import { getAuthUser } from "@/lib/auth";
import { generateUniqueFilename } from "@/lib/utils";
import { writeFile, mkdir, unlink } from "fs/promises";
import { join } from "path";
import { eq } from "drizzle-orm";

const UPLOAD_DIR = join(process.cwd(), "public", "uploads");

export async function GET() {
  const user = await getAuthUser();
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const allFiles = await db.select().from(files).orderBy(files.createdAt);
    return NextResponse.json(allFiles);
  } catch (error) {
    console.error("Files GET error:", error);
    return NextResponse.json(
      { error: "Failed to fetch files" },
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
    await mkdir(UPLOAD_DIR, { recursive: true });

    const formData = await request.formData();
    const file = formData.get("file") as File | null;

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const filename = generateUniqueFilename(file.name);
    const filepath = join(UPLOAD_DIR, filename);
    await writeFile(filepath, buffer);

    const result = await db
      .insert(files)
      .values({
        filename,
        originalName: file.name,
        mimeType: file.type,
        size: buffer.length,
        path: `/uploads/${filename}`,
        uploadedBy: user.userId,
      })
      .returning();

    return NextResponse.json(result[0], { status: 201 });
  } catch (error) {
    console.error("Upload error:", error);
    return NextResponse.json(
      { error: "Failed to upload file" },
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
        { error: "File ID is required" },
        { status: 400 }
      );
    }

    const file = await db
      .select()
      .from(files)
      .where(eq(files.id, id))
      .limit(1);

    if (file.length > 0) {
      const filepath = join(process.cwd(), "public", file[0].path);
      try {
        await unlink(filepath);
      } catch {
        // File may already be deleted from disk
      }
    }

    await db.delete(files).where(eq(files.id, id));
    return NextResponse.json({ message: "File deleted" });
  } catch (error) {
    console.error("Files DELETE error:", error);
    return NextResponse.json(
      { error: "Failed to delete file" },
      { status: 500 }
    );
  }
}
