interface ServicoType {
    nome:                   string;
    precoHora:              number;
    categoria:              string;
    minimoDescontos:        number;
    percentagemDesconto:    number;
}

interface ResponseType {
    status: boolean;
    nomeServico: string;
    data: ServicoType;
}

let servico: ServicoType = {
    nome:                   "gfg",
    precoHora:              0,
    categoria:              "defgdfg",
    minimoDescontos:        0,
    percentagemDesconto:    0,
}

let catalogoServicos: ServicoType[] = [
    {
    nome:                   " ",
    precoHora:              0,
    categoria:              "",
    minimoDescontos:        0,
    percentagemDesconto:    0,
    }
]

export function adicionarServico(servico: ServicoType): ResponseType | string {

    if(!servico.nome){
        return "Erro: insira um nome";
    };

    if(servico.precoHora < 0){
        return "Erro: Preco por Hora inválido";
    };

    for(let i = 0; i < catalogoServicos.length; i++){
        if(catalogoServicos[i]?.nome === servico.nome){
            return "Serviço já existente";
        }
    }

    catalogoServicos.push(servico);

    return(
        {
            status: true,
            nomeServico: servico.nome,
            data: servico
    }
    )
}

console.log(adicionarServico(servico))