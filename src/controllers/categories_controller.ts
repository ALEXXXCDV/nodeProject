import { QueryResult } from "pg";
import pool from "../database/db_connect";
import { Request, Response } from "express";

/**
 * Get all data of categories table.
 * @param req 
 * @param res 
 * @returns Categories
 */
export const getCategories = async (req: Request, res: Response): Promise<Response> =>{
    try{
        const response: QueryResult = await  pool.query('SELECT * FROM categories;');
        return res.status(200).json(response.rows);
    }catch(error){
        console.error(console);
        return res.status(500).json('Internal Server Eror');
    }
};

/**
 * Get all data of categories table by id
 * @param req 
 * @param res 
 * @returns Categories by ID
 */
export const getCategoriesById = async (req:Request, res:Response): Promise<Response> => {
    const id = parseInt(req.params.id);
    try {
        const response: QueryResult = await pool.query('SELECT * FROM categories WHERE category_id = $1', [id]);
        return res.json(response.rows);
    } catch (error) {
        console.error(error);
        return res.status(500).json('Internal Server Eror');
    }
}