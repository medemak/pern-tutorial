const express = require('express');
const app = express();
const cors = require('cors');
const pool = require('./db')

// middleware
app.use(cors());
app.use(express.json());

// ROUTES 

// create a todo
app.post("/todos", async(req, res) => {
    try {
        const {description} = req.body;
        const newToDo = await pool.query(
            "INSERT INTO todo (description) VALUES($1) RETURNING *", 
            [description]
        )
        res.json(newToDo.rows[0]);
    } catch(error) {
        console.log(error.message)
    }
})

// get all todos
app.get('/todos'), async(req, res) => {
    try {
        const allToDos = await pool.query(
            "SELECT * FROM todo"
        )
        res.json(allToDos.rows)
    } catch(error) {
        console.log(error.message)
    }
}

// get a single todo
app.get('/todos/:id'), async(req, res) => {
    try {
        const {id} = req.params; 
        const toDo = await pool.query (
            "SELECT * FROM todo WHERE todo_id = $1",
            [id]
        )
        res.json(toDo.rows[0])
    } catch (error) {
        console.log(error.message)
    }
}

// update a todo
app.put('/todos/:id'), async(req,res) => {
    try {
        const {id} = req.params;
        const {description} = req.body;
        const updateToDo = await pool.query (
            "UPDATE todo SET description = $1 WHERE todo_id = $2",
            [description, id],
        )
        res.json("Todo was updated")
    } catch (error) {
        console.log(error.message)
    }
}

// delete a todo
app.delete('todos/:id'), async(req, res) => {
    try {
        const {id} = req.params;
        const deleteToDo = await pool.query (
            "DELETE FROM todo WHERE todo_id = $1",
            [id]
        )
        res.json("Todo was deleted")
    } catch (error) {
        console.log(error.message)
    }
}

app.listen(5000, () => {
    console.log("server has started on port 5000")
})