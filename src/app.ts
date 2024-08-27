import express, { Router } from "express";
import bodyParser from "body-parser";
import pool from "./database/db_connect";
import { createCategories, getCategories, getCategoriesById } from "./controllers/categories_controller";

require('dotenv').config();

const app = express();
const port = process.env.PORT;

const categoriesRoutes = Router();

app.use(express.json());

categoriesRoutes.get('/categories', getCategories);
categoriesRoutes.get('/categories/:id', getCategoriesById);
categoriesRoutes.post('/createCategories', createCategories)

/* app.get('/', async (req, res) =>{
    /onst query = 'select * from employees;';
    const response = await pool.query(query);
    console.log(response);
    res.send('Hola mundo, soy ALEJANDRO C.');
}); */

app.use(categoriesRoutes);

app.listen(port, () =>{
    console.log(`Example app listening on port ${port}`)
});