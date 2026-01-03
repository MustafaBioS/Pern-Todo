const express = require("express");
const app = express();
const PORT = 5000;
const cors = require("cors");
const pool = require('./db');

// MiddleWare

app.use(cors());
app.use(express.json());

// Routes


// Run

app.listen(PORT)
    console.log(`App Started On Port ${PORT}`)