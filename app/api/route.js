import { NextResponse } from "next/server";
import { connectDB } from "../lib/config/db";
import TodoModel from "../lib/models/Todo";

const LoadDB = async () => {
  await connectDB();
};

LoadDB();

export async function GET(request) {
  return NextResponse.json({ msg: "get method hit" });
}

export async function POST(request) {
  const { title, description } = await request.json();
  await TodoModel.create({
    title,
    description,
  });
  return NextResponse.json({ msg: "Todo Created" });
}
