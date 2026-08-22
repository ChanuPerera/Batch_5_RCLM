import React, { useState, useEffect } from "react";

const ToDoList = () => {
  // const ToDos = [
  //     {
  //         id:0,
  //         text:"Im Running 0"
  //     },
  //     {
  //         id:1,
  //         text:"Im Running 1"
  //     },
  //     {
  //         id:2,
  //         text:"Im Running 2"
  //     },
  //     {
  //         id:3,
  //         text:"Im Running 3"
  //     },
  //     {
  //         id:4,
  //         text:"Im Running 4"
  //     },
  //     {
  //         id:5,
  //         text:"Im Running 5"
  //     },
  // ]

  // console.log("ToDo List", ToDos.length)
  // console.log("ToDo List", ToDos[3])

  const [todos, setTodos] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [editText, setEditText] = useState("");

  //////// Load todos from localstorage
  useEffect(() => {
    const savedTodos = JSON.parse(localStorage.getItem("todos"));
    if (savedTodos) {
      setTodos(savedTodos);
    }
  }, []);

  ///////// Add todos
  const addTodo = () => {
    if (!newTask.trim()) return;
    setTodos([...todos, { text: newTask, done: false }]);
    setNewTask("");
  };

  //////////// save todos to localstorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const toggleDone = (index) => {
    const updated = [...todos];
    updated[index].done = !updated[index].done;
    setTodos(updated);
  };

  //////////// delete todo
  const deleteTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const startEdit = (index) => {
    setEditIndex(index);
    setEditText(todos[index].text);
  };

  const saveEdit = () => {
    const updated = [...todos];
    updated[editIndex].text = editText;
    setTodos(updated);
    setEditIndex(null);
    setEditText("");
  };

  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-6">
      {/* Inner Card component */}
      <div className="bg-white p-6 w-full rounded-2xl max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">My ToDo List</h1>

        {/* Add new todos */}
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Add a new task..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="flex-1 border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
          />

          <button
            onClick={addTodo}
            className="bg-slate-600 text-white px-4 py-2 rounded-xl hover:bg-slate-700 "
          >
            Add
          </button>
        </div>

        {/* My Todo List */}

        <ul className="space-y-3">
          {todos.length === 0 && (
            <p className="text-center text-gray-500"> No tasks yet</p>
          )}

          {todos.map((todo, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-50 p-3 rounded-xl shadow-sm hover:shadow-md transition flex-col"
            >
              {editIndex === index ? (
                <div className="flex w-full gap-2">
                  <input
                    type="text"
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="flex-1 border rounded-xl px-3 py-2 focus:outline-none focus:ring-2 focus:ring-slate-400"
                  />
                  <button
                    onClick={saveEdit}
                    className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-700"
                  >
                    Save
                  </button>
                </div>
              ) : (
                <>
                  <span
                    onClick={() => toggleDone(index)}
                    className={`flex-1 cursor-pointer ${todo.done ? "text-gray-400 line-through" : ""}`}
                  >
                   {todo.text}
                  </span>

                  <div className="flex gap-2">
                    <button
                       onClick={() =>  startEdit(index)}
                      className="text-blue-500 hover:text-blue-800"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => deleteTodo(index)}
                      className="text-red-500 hover:text-red-800"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ToDoList;
