import connectMongoDB from "../../../lib/mongodb";
import Contact from "../../../models/Contact";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const {userId } = await request.json();
    await connectMongoDB();
    await Contact.create({  userId });
    return NextResponse.json({ message: "Contact Created" }, { status: 201 });
  } catch (error) {
    // Log the error for debugging
    console.error(error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}
export async function GET(request) {
  try {
    await connectMongoDB();
    const Contacts = await Contact.find();
    return NextResponse.json({ Contacts });
  } catch (error) {
    console.error("Failed to get Contact:", error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}
