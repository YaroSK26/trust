import connectMongoDB from "../../../lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectMongoDB();
    return NextResponse.json({ status: "ok", timestamp: new Date().toISOString() });
  } catch (error) {
    return NextResponse.json({ status: "error", message: error.message }, { status: 500 });
  }
}
