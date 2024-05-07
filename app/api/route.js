import { NextResponse } from "next/server";
import { connectDB } from "../lib/config/db";

const LoadDB = async () => {
  await connectDB();
};

LoadDB();

export async function GET(request) {
  return NextResponse.json({ msg: "get method hit" });
}
