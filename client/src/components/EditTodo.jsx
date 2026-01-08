import react, { Fragment, useState } from 'react';
import "../pages/TaskPage.css"

function EditTodo({ todo, setTodos }) {

    const {description, setDescription} = useState(todo?.description || "");

    const editForm = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(`http://localhost:5000/todos/${todo.todo_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json", },
                body: JSON.stringify({description})
            });

            const editTodo = await res.json();
 
            setTodo(prev => prev.map(t => t.todo_id === todo.todo_id ? editTodo : t));

            setDescription("");

        } catch (err) {
            console.error(err.message);
        }
    }
 
  return (
    <Fragment>
        <div className='editCon'>
            <div className='editBG'>
                <h1 className="title">{description}</h1>
                <form onSubmit={editForm}>
                    <input type="text" className="editinp" required value={description} onChange={(e) => setDescription(e.target.value)} />
                    <input type="submit" className="editsubmit" />
                </form>
            </div>
        </div>
    </Fragment>
  )
}

export default EditTodo
