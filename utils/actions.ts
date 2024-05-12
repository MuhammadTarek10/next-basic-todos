"use server";
import db from "@/utils/db";
import { revalidatePath } from "next/cache";

export const newTodo = async (formData: FormData) => {
  const todo = await db.todo.create({
    data: {
      content: formData.get("content") as string,
    },
  });

  revalidatePath("/todos");
};
