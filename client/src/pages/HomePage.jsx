import "./HomePage.css";
import InputTodo from "../components/InputTodo";
import ListTodo from "../components/ListTodo";
import { useState } from "react";

function HomePage() {

  const [todos, setTodos] = useState([]);

  return (
    <div>
      <h1 className="title">To Do List</h1>
      <InputTodo setTodos={setTodos} />
      <ListTodo todos={todos} setTodos={setTodos} />
    </div>
  )
}

export default HomePage
