export interface ServicoType {
    nome:                   string;
    precoHora:              number;
    categoria:              string;
    minimoDescontos:        number;
    percentagemDesconto:    number;
}

export interface ResponseType {
    status:                 boolean;
    nomeServico:            string;
    data:                   ServicoType;
}

export interface PedidoServico{
    cliente:                string;
    descricao:              string;
    horasEstimadas:         number;
    urgente:                boolean
}