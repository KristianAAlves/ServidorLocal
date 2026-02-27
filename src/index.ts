import express, {type Request, type Response} from "express";
import { AdicionarServico, ApagarServico, ListarServico, obterServico } from "./servico.js";
import { SelecionarServicos } from "./orcamento.js";

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


app.listen(8080,() => {
    console.log("Servidor rodando");
});