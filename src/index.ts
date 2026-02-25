import express from "express";
import { adicionarServico } from "./servico.js";

const app = express();



app.get('/',(req, res) => {
    console.log("Hello World");
    res.send("Hello World");
});


app.post("/adicionar_servico", (req, res) =>{
    const servico = req.body;
    adicionarServico(servico);
})


app.listen(8080,() => {
    console.log("Servidor rodando");
});