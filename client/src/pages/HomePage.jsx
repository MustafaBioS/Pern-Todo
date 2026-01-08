import "./HomePage.css";
import InputTodo from "../components/InputTodo";
import ListTodo from "../components/ListTodo";
import { useState, useEffect } from "react";

function HomePage() {

  const [todos, setTodos] = useState([]);

  useEffect(()=> {
    document.title = "To Do List - Home"
  }, []);

  return (
    <div>
      <h1 className="title">To Do List</h1>
      <InputTodo setTodos={setTodos} />
      <ListTodo todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default HomePage
