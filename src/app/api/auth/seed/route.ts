import { NextResponse } from "next/server";
import { db } from "@/db";
import { users } from "@/db/schema";
import { hashPassword } from "@/lib/auth";

export async function POST() {
  try {
    const existing = await db.select().from(users).limit(1);
    if (existing.length > 0) {
      return NextResponse.json(
        { message: "Admin user already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await hashPassword("admin123");

    await db.insert(users).values({
      name: "Admin",
      email: "admin@folmadi.org",
      password: hashedPassword,
      role: "admin",
    });

    return NextResponse.json({
      message: "Admin user created successfully",
      credentials: { email: "admin@folmadi.org", password: "admin123" },
    });
  } catch (error) {
    console.error("Seed error:", error);
    return NextResponse.json(
      { error: "Failed to seed admin user" },
      { status: 500 }
    );
  }
}
