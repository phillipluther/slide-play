import { NextResponse } from "next/server";

export async function GET(request: Request) {
  return NextResponse.json({ message: "Fun with slides!" }, { status: 200 });
}
