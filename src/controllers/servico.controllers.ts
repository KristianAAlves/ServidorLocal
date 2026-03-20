import type { ServicoDBType } from "../utils/types.js";
import type { Request, Response } from "express";
import { ServicoModel } from "../models/servico.models.js";

export const ServicoController = {

    async create(req: Request, res: Response){
        const newService: ServicoDBType = req.body;

    if(!newService){
        return res.status(400).json({
            status:            "error",
            message:           "Dados de serviço inválidos.",
            data:              null
        })
    }

    const createServicoResponse = await ServicoModel.create(newService);

    if (createServicoResponse === null) {
        return res.status(400).json({
            status:            "error",
            message:           "Erro ao criar serviço.",
            data:              null
        })
    }
    },




    async getAll(req: Request, res: Response){
        const getAllServicesResponse = await ServicoModel.getAll()
        
        if (!getAllServicesResponse) {
            return res.status(500).json({
                status:         "error",
                message:        "Erro ao selecionar servicos",
                data:           null
            })
        }
        
        res.status(200).json({
                status:         "success",
                message:        "Servicos encontrados",
                data:           getAllServicesResponse
            })         
    },




    async get(req: Request, res: Response){
        const id = req.params.id

        if (!id) {
            return res.status(400).json({
                status:         "error",
                message:        "ID obrigatorio",
                data:           null
            })
        }

        const getServiceByIdResponse = await ServicoModel.get(id as string)

        if (!getServiceByIdResponse) {
            return res.status(400).json ({
                status:         "Error",
                message:        "Servico nao encontrado",
                data:           null
        })
    }
        res.status(200).json({
            status:             "success",
            message:            "Servico encontrado",
            data:               getServiceByIdResponse
        })
    },




    async update(req: Request, res: Response){
        const id = req.params.id

        const updatedService: ServicoDBType = req.body

        if (!id) {
            return res.status(400).json({
                status:         "error",
                message:        "ID obrigatorio",
                data:           null
        })
    }

        if (!updatedService) {
            return res.status(400).json({
                status:         "error",
                message:        "Dados de servicos invalidos",
                data:           null
        })
    }

    const updateServiceResponse = await ServicoModel.update(id as string, updatedService)
    
        if (!updateServiceResponse) {
            return res.status(400).json({
                status:         "error",
                message:        "Erro ao atualizar servico",
                data:           null
            })
        }
    
        return res.status(200).json({
            status:             "success",
            message:            "servico atualizado com sucesso",
            data:               updateServiceResponse
        })
    },




    async delete(req: Request, res: Response){
        const id = req.params.id
        if (!id){
            return res.status(400).json({
                status:         "error",
                message:        "ID obrigatorio",
                data:           null
            })
        }
        
        const deleteServiceResponse = await ServicoModel.delete(id as string)
        
        if (!deleteServiceResponse) {
            return res.status(400).json({
                status:         "error",
                message:        "Erro ao atualizar servico",
                data:           null
            })
        }
            return res.status(200).json({
                status:         "success",
                message:        "servico atualizado com sucesso",
                data:           deleteServiceResponse
            })
    }

}