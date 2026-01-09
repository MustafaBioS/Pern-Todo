const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const pool = require('./db');

// MiddleWare

app.use(cors());
app.use(express.json());

// Routes

app.post("/todos", async(req, res) => {
    try {
        const { description } =  req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", 
            [description]);
            res.json(newTodo.rows[0]);
    } catch (err) {
        console.log(err.message);
        res.status(500).json({ error: err.message });
    }
})

app.get("/todos", async(req, res) => {
    try {
        const allTodos = await pool.query("SELECT * FROM todo")
        res.json(allTodos.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

app.get("/todos/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
        res.json(todo.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

app.put("/todos/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const todoPut = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id])
        res.json("Updated Successfully!");
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})

app.delete("/todos/:id", async(req, res) => {
    try {
        const { id } = req.params;
        const todoDel = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id])
        res.json("Deleted Successfully");
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
})


// Run

app.listen(PORT)
    console.log(`App Started On Port ${PORT}`)