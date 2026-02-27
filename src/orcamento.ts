import { catalogoServicos } from "./servico.js"
import type { PedidoServico, ServicoType } from "./utils/types.js";


const pedido: PedidoServico = 
    {
    cliente:                "string",
    descricao:              "servi",
    horasEstimadas:         24,
    urgente:                true
    }

const precoHora: number = 10;

const servicoSelecionados: ServicoType[] = []

/*
#################################################
#################################################
#################################################
#################################################
#################################################
*/

export function SelecionarServicos(nome: string){
        for (let i = 0; i < catalogoServicos.length; i++){
            if (catalogoServicos[i]?.nome && catalogoServicos[i]?.nome === nome){
                servicoSelecionados.push(catalogoServicos[i]!)
                return true;
            }
        }
        return false;
}


/*
#################################################
#################################################
#################################################
#################################################
#################################################
*/



export function ProcessarPedido(pedido: PedidoServico, precoHora: number): number{
    let urgencia =  0.3 * precoHora;
    let total = pedido.urgente === true ? (pedido.horasEstimadas *= precoHora) + urgencia : (pedido.horasEstimadas *= precoHora);
    return total;
}


/*
#################################################
#################################################
#################################################
#################################################
#################################################
*/


let taxaDeUrgencia: number =    0.3;
let minimoDescontos: number =   150;
let desconto: number =         0.15
export function CalcularOrcamento(pedido: PedidoServico){
    let totalBruto: number = 0;
    let totalFinal: number = 0;

    servicoSelecionados.map((servico) => {
        let totalDoServico: number = servico.precoHora * pedido.horasEstimadas;
        totalBruto += totalDoServico;
    })

    totalFinal += totalBruto;

    if (pedido.urgente){
        totalFinal += (totalBruto * taxaDeUrgencia);
    }

    if(totalBruto >= minimoDescontos){
        totalFinal -= (totalBruto * desconto)
    }

    return totalFinal;
}



