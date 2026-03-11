import mysql from "mysql2/promise";
require('.env').config();

const db = mysql.createPool({
    host: "localhost",
    user: "admin",
    password: "",
    database: "servidor_local"
});

export default db;