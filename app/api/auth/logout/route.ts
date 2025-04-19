import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function GET() {
  cookies().delete("token")

  return NextResponse.json({ success: true })
}
