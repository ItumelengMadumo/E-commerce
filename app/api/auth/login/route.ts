export const runtime  = "nodejs"
import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { comparePasswords, createToken } from "@/lib/auth"
import { cookies } from "next/headers"
import bcrypt from "bcryptjs"
import { error } from "console"






export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json()
    console.log("📥 Incoming credentials:", email, password)

    if (!email || !password) {
      console.log("⛔ Missing email or password")
      return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
    }

    const admin = await prisma.admin.findUnique({
      where: { email },
    })
    console.log("🔍 Fetched admin from DB:", admin)

    if (!admin) {
      console.log("❌ Admin not found")
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    const passwordMatch = await comparePasswords(password, admin.password)
    console.log("🔐 Password match result:", passwordMatch)

    if (!passwordMatch) {
      console.log("❌ Passwords do not match")
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
    }

    // ✅ Should only reach here if everything is valid
    const token = await createToken({
      id: admin.id,
      email: admin.email,
      role: "admin",
    })
    console.log("🪙 Token created")

    cookies().set({
      name: "token",
      value: token,
      httpOnly: true,
      path: "/",
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24,
    })
    console.log("🍪 Cookie set")

    return NextResponse.json({
      success: true,
      admin: {
        id: admin.id,
        email: admin.email,
      },
    })
  } catch (error) {
    console.error("💥 Login error:", error)
    return NextResponse.json({ error: "Authentication failed" }, { status: 500 })
  }
}
