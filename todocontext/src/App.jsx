import { useState, useEffect } from "react";
import { Todoprovider } from "./context/todocontext";
import { TodoForm } from "./components";
import { TodoItem } from "./components";
function App() {
  const [todos, settodos] = useState([]);
  // now starts defining the functionality
  // here prev is the list of (todo)objects
  // prevtodo is each single object
  const addtodo = (todo) => {
    settodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);
  };
  const deletetodo = (id) => {
    settodos((prev) => prev.filter((prevtodo) => prevtodo.id != id));
  };
  const updatetodo = (id, todo) => {
    settodos((prev) =>
      prev.map((prevtodo) => (prevtodo.id === id ? todo : prevtodo))
    );
  };
  const toggletodo = (id) => {
    settodos((prev) =>
      prev.map((prevtodo) =>
        prevtodo.id === id ? (prevtodo.completed = !prevtodo.completed) : prevtodo
      )
    );
  };
  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    if (todos && todos.length > 0) {
      settodos(todos);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  console.log(todos);
  return (
    <>
      <Todoprovider
        value={{ todos, addtodo, deletetodo, updatetodo, toggletodo }}
      >
        <div className="bg-[#172842] min-h-screen py-8">
          <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
            <h1 className="text-2xl font-bold text-center mb-8 mt-2">
              Manage Your Todos
            </h1>
            <div className="mb-4">
              <TodoForm />
            </div>
            <div className="flex flex-wrap gap-y-3">
              {todos.map((onetodo) => (
                <div key={onetodo.id} className="w-full">
                  <TodoItem todo={onetodo} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </Todoprovider>
    </>
  );
}

export default App;
