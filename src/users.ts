import { error } from "node:console";
import db from "./lib/db.js";
import type { UserType } from "./utils/types.js"



export async function GetUsers(){

    const [rows] = await db.execute(
        "SELECT * FROM table_utilizadores");

    return rows;
}




export async function GetUserById(id: string){

    const [rows] = await db.execute(
        `SELECT * FROM table_utilizadores
        WHERE table_utilizadores,id = ?`,
    [id]);

    if(Array.isArray(rows) && rows.length === 0) return null;
    return Array.isArray(rows) ? rows[0] : null;
}




export async function InsertUser(user: UserType){

    let query = `INSERT INTO table_utilizadores VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;
    let values = [
                    user.id,
                    user.nome, 
                    user.data_nascimento, 
                    user.email, 
                    user.password, 
                    user.telefone, 
                    user.pais, 
                    user.localidade, 
                    user.enabled, 
                    new Date(), 
                    new Date()];


    try{
        const rows = await db.execute(query, values);
        return rows;
    }
    catch(err){
       console.log("dgh",err);
       return null;
    }
}
    