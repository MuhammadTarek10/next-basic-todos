import db from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const todos = await db.todo.findMany();
  return NextResponse.json({ data: todos });
};
