import db from "../lib/db.js";
import type { ServicoDBType } from "../utils/types.js";

export const ServicoModel = {
    async create(newService: ServicoDBType){
         try {
            const query = `INSERT INTO table_servicos VALUES (?, ?, ?, ?, ?, ?, ?) `;
            const values = [
                null, 
                newService.nome, 
                newService.descricao, 
                newService.categoria, 
                newService.enabled, 
                new Date(), 
                new Date()];

                const rows = await db.execute(query, values);
                return rows;
    } catch (error) {
        console.log(error)
        return null;
        }
    },


    async  getAll(){
        try {
            const query = `SELECT * FROM table_servicos`;

            const rows = await db.execute(query);

            return Array.isArray(rows) && rows.length > 0 ? rows[0] : [];

        }catch(err) {
            console.log(err);
            return null;
        }
    },

    

    async get(id: string){
        try{
        const query = `SELECT * FROM table_servicos WHERE id = ?`;

        const value = [id];

        const rows = await db.execute(query, value);

        return Array.isArray(rows) && rows.length > 0 ? rows[0]: null;
    } catch (err) {
        console.log(err);
        return null;
        }
    },




    async update(id: string, updatedService: ServicoDBType){
        try {
        const query = `UPDATE table_servicos
                        SET
                        nome=?,
                        descricao=?,
                        categoria=?,
                        enabled=?,
                        updated_at=?
                        WHERE 
                        id=?`

        const values = [
            updatedService.nome,
            updatedService.descricao,
            updatedService.categoria,
            updatedService.enabled,
            new Date(),
            id];

        const rows = await db.execute(query, values);
        return rows;
    }catch (err) {
        console.log(err);
        return null;
    }
    },




    async delete(id: string){
        try {
        const query = `DELETE FROM table_servicos WHERE id= ?`

        const value = [id]

        const rows: any = await db.execute(query, value)

        return rows[0]?.affectedRows === 0 ? null : rows; 
    }catch (error) {
        console.log(error)
        return null
    }
    }

//end of function
}


