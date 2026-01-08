import React, { useEffect, useState } from "react";
import "./TaskPage.css";
import { useParams } from "react-router-dom";

function TaskPage({ todos, setTodos }) {
  const { id } = useParams();
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    document.title = "To Do List - Edit Task";
  }, []);

  useEffect(() => {
    if (todos && todos.length > 0) {
      const found = todos.find(t => t.todo_id.toString() === id);
      if (found) setTodo(found);
    }
  }, [todos, id]);

  useEffect(() => {
    const fetchTodo = async () => {
      try {
        const res = await fetch(`http://localhost:5000/todos/${id}`);

        let data = null;
        if (res.status !== 204) {
          data = await res.json();
        }

        if (data) setTodo(data);
      } catch (err) {
        console.error(err.message);
      }
    };

    if (!todo) fetchTodo();
  }, [id, todo]);

  return (
    <div className="editTodoDiv">
      <EditTodo todo={todo} setTodos={setTodos} />
    </div>
  );
}

export default TaskPage;
