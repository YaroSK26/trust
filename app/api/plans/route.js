import connectMongoDB from "../../../lib/mongodb";
import Plan from "../../../models/Plans";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { planName, planDay, thoughtOrVerse, userId } = await request.json();
    await connectMongoDB();
    await Plan.create({ planName, planDay, thoughtOrVerse, userId });
    return NextResponse.json({ message: "Plan Created" }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}
export async function GET(request) {
  try {
    await connectMongoDB();
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
    const planName = searchParams.get("planName");

    let query = {};
    if (userId) query.userId = userId;
    if (planName) query.planName = planName;

    const Plans = await Plan.find(query);

    return NextResponse.json({ Plans });
  } catch (error) {
    console.error("Failed to get plans:", error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}


export async function DELETE(request) {
  try {
    await connectMongoDB();
    const { userId, planName, planDay, thoughtOrVerse } = await request.json();
    const result = await Plan.findOneAndDelete({
      userId,
      planName,
      planDay,
      thoughtOrVerse,
    });
    if (!result) {
      return NextResponse.json({ message: "Plan not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Plan deleted" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting plan:", error);
    return NextResponse.json({ message: "Server Error" }, { status: 500 });
  }
}