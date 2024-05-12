"use client";

import type { Todo } from "@prisma/client";
import { useTransition } from "react";
import { completeTodo } from "../utils/actions";

const Todo = ({ todo }: { todo: Todo }) => {
  const [isPending, startTransition] = useTransition();

  const handleComplete = () => {
    startTransition(() => completeTodo(todo.id, !todo.isCompleted));
  };

  return (
    <a
      onClick={handleComplete}
      className={`cursor-pointer shadow-md bg-gray-100 my-2 rounded-lg flex p-4 items-center justify-between ${
        todo.isCompleted ? "line-through text-gray-500" : ""
      }`}>
      <h1 className="uppercase italic text-lg">{todo.content}</h1>
      <input
        type="checkbox"
        className="m-2 cursor-pointer"
        checked={todo.isCompleted}
        readOnly
      />
    </a>
  );
};
export default Todo;
