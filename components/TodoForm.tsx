"use client";

import { newTodo } from "@/utils/actions";

const TodoForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    newTodo(new FormData(event.currentTarget));
    event.currentTarget.reset();
  };

  return (
    <form className="justify-center align-middle" onSubmit={handleSubmit}>
      <input
        name="content"
        type="text"
        placeholder="Enter Todo"
        className="bg-gray-100 border-black mx-4 px-4 py-2 rounded-lg text-black"
      />
      <button
        type="submit"
        className="rounded bg-blue-400 text-white hover:bg-blue-600 p-2 transition-colors">
        Add Todo
      </button>
    </form>
  );
};
export default TodoForm;
