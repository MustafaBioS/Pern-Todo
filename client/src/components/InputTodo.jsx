import React, { Fragment, useState } from 'react'

function InputTodo({ setTodos }) {

    const [description, setDescription] = useState("");
    
    const submitForm = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch("http://localhost:5000/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json", },
                body: JSON.stringify({ description }),
            });
            
            const newTodo = await res.json();

            setTodos(prev => [...prev, newTodo]);

            setDescription("");

        } catch (err) {
            console.error(err.message);
        }
    }

  return (
    <Fragment>
        <div className='container'>
            <form onSubmit={submitForm}>
                <input type="text" className="taskinp" value={description} onChange={(e) => setDescription(e.target.value)} required />
                <input type="submit" className="submitbtn" />
            </form>
        </div>
    </Fragment>

  )
}

export default InputTodo
