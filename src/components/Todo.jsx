import { useState } from "react";
import { GrAddCircle } from "react-icons/gr";
import { MdDelete } from "react-icons/md";

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  const handleNewTodoAdd = (event) => {
    event.preventDefault();
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo.trim(), completed: false }]);
      setNewTodo("");
    }
  };

  const handleTodoComplete = (index) => {
    const newTodos = [...todos];
    newTodos[index].completed = !newTodos[index].completed;
    setTodos(newTodos);
  };

  const handleTodoDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="max-w-3xl mx-auto py-11 px-4">
      <form
        className="flex rounded-full justify-between shadow-lg  "
        onSubmit={handleNewTodoAdd}
      >
        <input
          className="bg-white w-full px-4 py-5 rounded-full outline-none placeholder:text-base placeholder:text-black "
          type="text"
          value={newTodo}
          onChange={handleNewTodoChange}
          placeholder="Add todo..."
        />
        <button className="pr-5" type="submit">
          <GrAddCircle className="" />
        </button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="pt-8 border-b-2">
            <input
              className="mr-2"
              type="checkbox"
              checked={todo.completed}
              onChange={() => handleTodoComplete(index)}
            />
            <span
              style={{ textDecoration: todo.completed ? "line-through" : "" }}
            >
              {todo.text}
            </span>
            <button
              className=" float-right"
              onClick={() => handleTodoDelete(index)}
            >
              <MdDelete className="text-red-500 bg-[#f2f3f5]  rounded-full p-[2px] h-6 w-6" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todo;
