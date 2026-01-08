import "./TaskPage.css";
import "../components/EditTodo";
import { useEffect, useState } from 'react';
import EditTodo from "../components/EditTodo";

function TaskPage() {

  const [todo, setTodo] = useState(null);

  useEffect(()=> {
    document.title = "To Do List - Edit Task"
  }, []);

  return (
    <div>
      <EditTodo />
    </div>
  )
}

export default TaskPage
