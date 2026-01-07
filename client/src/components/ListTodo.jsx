import React, { Fragment,  useEffect, useState } from 'react'

function ListTodo({ todos, setTodos }) {

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
                    <div className="todoDiv" key={todo.todo_id}>
                        <h1 className="item">{todo.description}</h1>
                    </div>
                ))}
            </div>
        </div>
    </Fragment>
  )
}

export default ListTodo
