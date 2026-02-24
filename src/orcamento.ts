interface PedidoServico{
    cliente:        string;
    descricao:      string;
    horasEstimadas: number;
    urgente:        boolean
}

const pedido: PedidoServico = 
    {
    cliente:        "string",
    descricao:      "servi",
    horasEstimadas: 24,
    urgente:        true
    }


const precoHora: number = 10;

function ProcessarPedido(pedido: PedidoServico, precoHora: number): number{
    let urgencia =  0.3 * precoHora;
    let total = pedido.urgente === true ? (pedido.horasEstimadas *= precoHora) + urgencia : (pedido.horasEstimadas *= precoHora);
    return total;
}

console.log(ProcessarPedido(pedido, precoHora))

