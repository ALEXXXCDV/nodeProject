import express from "express";

const app = express();
const port = 3000;

app.get('/', (req, res) =>{
    res.send('Hola mundo, el servidor está en el puerto 3000.');
});

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
});