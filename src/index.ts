import express, {type Request, type Response} from "express";
import { AdicionarServico, ApagarServico, ListarServico, obterServico } from "./servico.js";
import { CalcularOrcamento, criarPrestadorDeServico, SelecionarPrestador, SelecionarServicos } from "./orcamento.js";
import {GetUsers, GetUserById, InsertUser} from "./users.js";
import { get } from "node:http";

const app = express();
app.use(express.json())



/*app.post('/',(req: Request, res: Response) => {
    console.log("Hello World");
    res.send("Hello World");
});*/

// rota para adicionar
app.post("/adicionar-servico", (req: Request, res: Response) =>{
    const servico = req.body;
    const addServicoResponse = AdicionarServico(servico);
    res.json(addServicoResponse)
})



app.get("/listAll", (req: Request, res: Response)=>{
    const listServicoResponse = ListarServico();
    res.json(listServicoResponse)
})




app.delete("/apagar-servico", (req: Request, res: Response) => {
    const { nome } = req.query;

    if(nome){
        const apagarServicoResponse = ApagarServico(nome as string);
        res.json(apagarServicoResponse);
    }
    else{
        res.json({
            message: "Nome do serviço em falta"
        }
    )}
})




app.get("/obter-servico", (req: Request, res: Response) => {
    const {nome} = req.query;

    if(nome){
        const obterServicoResponse = obterServico(nome as string);
        res.json(obterServicoResponse);
    }
    else{
        res.json({
            message: "Nome é necessário"
        });
    }
})




app.post("/selecionar-servico", (req: Request, res: Response) =>{
    const { nome } = req.body;
    
    const SelecionarServicoResponse = SelecionarServicos(nome);
    res.json(SelecionarServicoResponse);
})




app.post("/calcular-orcamento", (req: Request, res: Response) =>{
    const { pedido } = req.body;

    
    const CalcularOrcamentoResponse = CalcularOrcamento(pedido);
    res.json(CalcularOrcamentoResponse);
})




app.post("/criar-prestador", (req: Request, res: Response) =>{
    
    const prestador = req.body; 
    const selecionarPrestadorResponse = criarPrestadorDeServico(prestador);
    res.json(selecionarPrestadorResponse);
})




app.post("/selecionar-prestador", (req: Request, res: Response) =>{
    const { nome } = req.body;
    
    const selecionarPrestadorResponse = SelecionarPrestador(nome);
    res.json(selecionarPrestadorResponse);
})




app.get("/get-users", async (req:Request, res: Response) => {
    const getUsersResponse = await GetUsers();

    res.json(getUsersResponse);
})




app.get("/get-users-by-id", async (req:Request, res: Response) => {
    const {id} = req.query;

    if(!id){
        res.json({
            message:    "ID obrigatório"
        })}

    const getUserByIdResponse = await GetUserById(id as string);

    if(!getUserByIdResponse){
        res.status(404).json({
            status:     "Sucess",
            message:    "Usuário não encontrado",
            data:       null,
        })}

    res.status(200).json({
        status:         "sucess",
        message:        "Usuário encontrador",
        data:           getUserByIdResponse
    })
})

app.post("/insert-users", async (req:Request, res: Response) => {
    const user = req.body;

    if(!user){
        res.json({
            message:    "Dados obrigatório"

        })}

    const InsertUserResponse = await InsertUser(user!)

    if(!InsertUserResponse){
        return res.status(400).json({
            status:     "Success",
            message:    "Não foi possível inserir usuário",
            data:        null,
        })}

    res.status(200).json({
        status:         "success",
        message:        "Usuário Inserido",
        data:           InsertUserResponse
    })
})


app.listen(8080,() => {
    console.log("Servidor rodando");
});