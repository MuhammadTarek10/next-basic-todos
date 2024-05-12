const Todo = ({ todo }) => {
  return (
    <div className="shadow-md bg-gray-100 my-2 rounded-lg flex p-4 items-center justify-between">
      <h1 className="uppercase italic text-lg">{todo.content}</h1>
      <input type="checkbox" className="m-2" />
    </div>
  );
};
export default Todo;
