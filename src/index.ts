import express, {type Request, type Response} from "express";
import { router as serviceRouter } from "./routes/servico.route.js";
import { router as userRouter } from "./routes/users.route.js";

const app = express();
app.use(express.json());

app.use('/servico', serviceRouter);

app.get('/', (req: Request, res: Response) => {
    res.send("Hello World");
});

app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080");
});