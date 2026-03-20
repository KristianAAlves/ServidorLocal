import { Router } from "express";
import { ServicoController } from "../controllers/servico.controllers.js";

const ServicoRoutes = {
    create:             "/create",
    getAll:             "/",
    get:                "/get-service-by-id",
    update:             "/update/:id",
    delete:             "/delete/:id"
}

const router = Router();


router.post(ServicoRoutes.create, ServicoController.create);
router.get(ServicoRoutes.getAll, ServicoController.getAll);
router.get(ServicoRoutes.get, ServicoController.get);
router.put(ServicoRoutes.update, ServicoController.update);
router.delete(ServicoRoutes.delete, ServicoController.delete);

export  { router }