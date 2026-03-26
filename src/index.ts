import express, {type Request, type Response} from "express";
import { router as serviceRouter } from "./routes/servico.route.js";
import { router as orcamentoRouter } from "./routes/orcamento.route.js";
import { router as prestacaoRouter } from "./routes/prestacao_servico.route.js";
import { router as userRouter } from "./routes/users.route.js";
import { router as prestadorRouter } from "./routes/prestador.route.js";
import { swaggerSpec } from "./docs/swagger.js";
import swaggerUi, { serve } from "swagger-ui-express";


const app = express();
app.use(express.json());

app.use('/servico', serviceRouter);
app.use('/orcamento', orcamentoRouter);
app.use('/prestacao-servico', prestacaoRouter);
app.use('/users', userRouter);
app.use('/prestador', prestadorRouter);

app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get('/', (req: Request, res: Response) => {
    res.send("Hello World");
});

app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080");
});