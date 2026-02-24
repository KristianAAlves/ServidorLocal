import express from "express";

const app = express();

interface Alunos{
    nome: string;
    id: string;
    contato?: string | null;
}

const alunos: Array<Alunos> = [
    {
        nome:       "manel",
        id:         "23",
        contato:    "243637"
    },
    {
        nome:       "sarg",
        id:         "2",
        contato:    null
    },
    {
        nome:       "arg",
        id:         "2354",
    },

]

app.get('/',(req, res) => {
    console.log("Hello World");
    res.send("Hello World");
});

app.listen(8080,() => {
    console.log("Servidor rodando");
});