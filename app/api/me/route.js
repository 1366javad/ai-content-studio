import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    name: "javad janjani",
    email: "javad.janjani1366@gmail.com",
    role: "admin",
  });
}
