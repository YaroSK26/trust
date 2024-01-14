// pages/api/randomVerse.js
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const response = await fetch("https://bible-api.com/?random=verse");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();

    const nextResponse = NextResponse.json(data);
    nextResponse.headers.set(
      "Cache-Control",
      "no-cache, no-store, must-revalidate"
    );
    return nextResponse;
  } catch (error) {
    console.error("Server Error fetching quote:", error);
  }
}
