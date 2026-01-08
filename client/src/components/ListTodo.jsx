import React, { Fragment,  useEffect, useState } from 'react'
import { Trash } from "lucide-react";

function ListTodo({ todos, setTodos }) {

    const deleteTodo = async (id) => {
        try {
            const res = fetch(`http://localhost:5000/todos/${id}`, {
                method: "DELETE"
            });
            console.log(`Deleted Todo With ID ${id}`)
            setTodos(todos.filter(todo => todo.todo_id !== id));
        } catch (err) {
            console.error(error.message)
        }
    }
    const getTodos = async () => {
        try {
            const res = await fetch("http://localhost:5000/todos");
            const json = await res.json();
            setTodos(json);
        } catch (err) {
            console.error(err.message);
        }
    };

    useEffect(() => {
        getTodos();
    }, []);

    

  return (
    <Fragment>
        <div className="todoCon">
            <div className='todoBG'>
                {todos.map(todo => (
                    <div className="todoDiv" key={todo.todo_id} onClick={()=> {window.location.href = `/todos/${todo.todo_id}`}}>
                        <h1 className="item">{todo.description}</h1>
                        <Trash onClick={() => deleteTodo(todo.todo_id)} color='red' size={34} className='trash' />
                    </div>
                ))}
            </div>
        </div>
    </Fragment>
  )
}

export default ListTodo
