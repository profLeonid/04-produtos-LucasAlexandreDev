function erros(tipoErro){
    const mensagens = {

        camposObrigatorios: 'Preencha todos os campos obrigatórios.',
        codigoInvalido: 'O código do produto deve conter apenas números e letras.',
        produtoInvalido: 'O nome do produto não pode ser numérico.',
        quantidadeDecimal: 'A quantidade deve ser um número inteiro.',
        quantidadeMenorOuIgualZero: 'A quantidade deve ser maior que zero.',
        quantidadeExcedida: 'A quantidade máxima permitida é 1000 unidades.'
    }

    return mensagens[tipoErro]
}

export{
    erros
}