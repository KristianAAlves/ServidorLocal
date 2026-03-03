import express, {type Request, type Response} from "express";
import { AdicionarServico, ApagarServico, ListarServico, obterServico } from "./servico.js";
import { CalcularOrcamento, criarPrestadorDeServico, SelecionarPrestador, SelecionarServicos } from "./orcamento.js";

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



app.listen(8080,() => {
    console.log("Servidor rodando");
});