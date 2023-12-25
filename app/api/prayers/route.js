import connectMongoDB from "../../../lib/mongodb";
import Prayers from "../../../models/Prayers";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { text, date, userId } = await request.json();
    await connectMongoDB();
    await Prayers.create({ text, date, userId });
    return NextResponse.json({ message: "Prayers Created" }, { status: 201 });
  } catch (error) {
    // Log the error for debugging
    console.error(error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}
export async function GET(request) {
  try {
    await connectMongoDB();
    const userId = request.nextUrl.searchParams.get("userId"); 
    const Prayer = await Prayers.find();
    return NextResponse.json({ Prayer });
  } catch (error) {
    console.error("Failed to get prayers:", error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}


export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Prayers.findByIdAndDelete(id);
  return NextResponse.json({ message: "Prayers deleted" }, { status: 200 });
}

export async function PUT(request) {
  const id = request.nextUrl.searchParams.get("id");
  const { text, date, userId } =
    await request.json();
  await connectMongoDB();
  await Prayers.findByIdAndUpdate(id, {
    text,
    date,
    userId,
  });
  return NextResponse.json({ message: "Prayers updated" }, { status: 200 });
}
