import express from "express";

require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.get('/', (req, res) =>{
    res.send('Hola mundo, soy ALEJANDRO C.');
});

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
});