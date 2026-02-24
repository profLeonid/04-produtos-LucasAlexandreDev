'use strict'   

function adicionaCodigo(){
    const codigo = document.getElementById('codigo-produto')
    const lista = document.getElementById('lista')

    const spanCodigo = document.createElement('span')
    spanCodigo.textContent = codigo.value

    let numeroCodigo = validarVazio(codigo.value)
    
    if(numeroCodigo){
        spanCodigo.className = 'bg-blue-400 px-8 py-2 rounded-[5px]'
        lista.appendChild(spanCodigo)
        limparCampo()
    }else{
        return false
    }
}

function adicionarProduto(){
    const produto = document.getElementById('produto')
    const lista = document.getElementById('lista')

    const spanProduto = document.createElement('span')
    spanProduto.textContent = produto.value

    let nomeProduto = validarVazio(produto.value)

    if(nomeProduto){
        spanProduto.className = 'bg-blue-400 px-8 py-2 rounded-[5px]'
        lista.appendChild(spanProduto)
        limparCampo()
    }else{
        return false
    }
}

function adicionarQuantidadeProduto(){
    const quantidade = document.getElementById('quantidade-produto')
    const lista = document.getElementById('lista')

    const spanQuantidade = document.getElementById('span')
    spanQuantidade.textContent = quantidade.value

    let numeroQuantidade = validarVazio(quantidade.value)

    if(numeroQuantidade){
        spanQuantidade.className = 'bg-blue-400 px-8 py-2 rounded-[5px]'
        lista.appendChild(spanQuantidade)
        limparCampo()
    }else{
        return false
    }
}

function validarVazio(codigo, produto, quantidade){
    let nomeProduto = String(produto)
    let numeroCodigo = String(codigo)
    let numeroQuantidade = Number(quantidade)

    if(nomeProduto == '' || numeroCodigo == '' || numeroQuantidade == ''){
        return false
    }else{
        return true
    }
}

function limparCampo(){
    document.getElementById('produto').value = ''
    document.getElementById('codigo-produto').value = ''
    document.getElementById('quantidade-produto').value = ''
}






