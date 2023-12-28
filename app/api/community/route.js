import connectMongoDB from "../../../lib/mongodb";
import Community from "../../../models/Community";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { text, date, userId, profileImg,name } = await request.json();
    await connectMongoDB();
    await Community.create({ text, date, userId, profileImg,name });
    return NextResponse.json({ message: "Community Created" }, { status: 201 });
  } catch (error) {
    // Log the error for debugging
    console.error(error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}
export async function GET(request) {
  try {
    await connectMongoDB();
    const Comm = await Community.find();
    return NextResponse.json({ Comm });
  } catch (error) {
    console.error("Failed to get community:", error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}


export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Community.findByIdAndDelete(id);
  return NextResponse.json({ message: "Community deleted" }, { status: 200 });
}
