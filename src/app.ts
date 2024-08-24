import express from "express";
import pool from "./database/db_connect";

require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.get('/', async (req, res) =>{
    const query = 'select * from employees;';
    const response = await pool.query(query);
    console.log(response);
    res.send('Hola mundo, soy ALEJANDRO C.');
});

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
});