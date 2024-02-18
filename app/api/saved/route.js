import connectMongoDB from "../../../lib/mongodb";
import Saved from "../../../models/Saved";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { text, author, date, userId } = await request.json();
    await connectMongoDB();
    await Saved.create({ text, author, date, userId });
    return NextResponse.json({ message: "Saved Created" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}
export async function GET(request) {
  try {
    await connectMongoDB();
    const Saved2 = await Saved.find();
    return NextResponse.json({ Saved2 });
  } catch (error) {
    console.error("Failed to get Saved:", error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}


export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Saved.findByIdAndDelete(id);
  return NextResponse.json({ message: "Saved deleted" }, { status: 200 });
}

