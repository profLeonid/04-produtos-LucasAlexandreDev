function validarDadosDeEntrada(codigo, produto, quantidade){
    let numeroCodigo     = String(codigo)
    let nomeProduto      = String(produto)
    let numeroQuantidade = Number(quantidade)
    
    const regexCodigo = /^[a-zA-Z0-9]+$/

    if (!isNaN(nomeProduto)){
        return 'produtoInvalido'

    }else if (!regexCodigo.test(numeroCodigo)){
        return 'codigoInvalido'

    }else if(isNaN(numeroQuantidade)){
        return 'quantidadeInvalida'

    }else{
        return true
    }    
}

function validarDadoQuantidade(quantidade){
    let numeroQuantidade = Number(quantidade)

    if(numeroQuantidade <= 0){
        return 'quantidadeMenorOuIgualZero'

    }else if (numeroQuantidade > 1000){
        return 'quantidadeExcedida'

    }else if(!Number.isInteger(numeroQuantidade)){
        return 'quantidadeDecimal'
    }else{
        return true
    }
}

function validarVazio(codigo, produto, quantidade){
    let nomeProduto      = produto
    let numeroCodigo     = codigo
    let numeroQuantidade = quantidade

    if(nomeProduto == '' || numeroCodigo == '' || numeroQuantidade == ''){
        return 'camposObrigatorios'
    }else{
        return true
    }
}

export{
    validarDadosDeEntrada,
    validarDadoQuantidade,
    validarVazio
}

