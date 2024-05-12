"use server";
import db from "@/utils/db";
import { revalidatePath } from "next/cache";

export const completeTodo = async (id: string, complete: boolean) => {
  await db.todo.update({
    where: { id },
    data: {
      isCompleted: complete,
    },
  });

  revalidatePath("/todos");
};

export const newTodo = async (formData: FormData) => {
  await db.todo.create({
    data: {
      content: formData.get("content") as string,
    },
  });

  revalidatePath("/todos");
};
