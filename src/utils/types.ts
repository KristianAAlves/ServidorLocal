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
    data:                   ServicoType | string;
}

export interface PedidoServico{
    cliente:                string;
    descricao:              string;
    horasEstimadas:         number;
    urgente:                boolean
}



export interface PrestadorType {
    nome:                   string;
    precoHora:              number;
    profissao:              string;
    minimoParaDesconto:     number;
    percentagemDesconto:    number;
    taxaUrgencia:           number;
}


export interface UserType{
    id:                     string,
    nome:                   string,
    numero_identificacao:   string,
    data_nascimento:        string,
    email:                  string,
    password:               string,
    telefone:               string,
    pais:                   string,
    localidade:             string,
    enabled:                boolean,
    created_at:             string,
    updated_at:             string
}