import { NextResponse } from "next/server";
import { connectDB } from "../lib/config/db";
import TodoModel from "../lib/models/TodoModel";

const LoadDB = async () => {
  await connectDB();
};

LoadDB();

export async function GET(request) {
  const todos = await TodoModel.find({});
  return NextResponse.json({ todos: todos });
}

export async function POST(request) {
  const { title, description } = await request.json();
  await TodoModel.create({
    title,
    description,
  });
  return NextResponse.json({ msg: "Todo Created" });
}
