'use strict'

import { validarDadosDeEntrada, validarVazio, validarDadoQuantidade } from './modulo/validacaoDados.js'

import { erros } from './modulo/mensagemErro.js'

function validarCadastroProduto(codigo, produto, quantidade){
    const erroVazio = validarVazio(codigo, produto, quantidade)
   
    if(!erroVazio){
        alert(erros('camposObrigatorios'))
        
        return false
    }

    const erroEntrada = validarDadosDeEntrada(codigo, produto, quantidade)
    
    if(!erroEntrada){
        alert(erros(erroEntrada))
        
        return false
    }

    const erroQuantidade = validarDadoQuantidade(quantidade)
    if(!erroQuantidade){
        alert(erros(erroQuantidade))
        
        return false
    }

    return true
}

function adicionaCadastroProduto(){
    // Pego os elementos HTML através do id
    const codigo     = document.getElementById('codigo-produto')
    const produto    = document.getElementById('produto')
    const quantidade = document.getElementById('quantidade-produto')
    const lista      = document.getElementById('lista')

    const dadosCadastraisValidos = validarCadastroProduto(codigo.value, produto.value, quantidade.value)

    if(!dadosCadastraisValidos){
        return false
    }

    // Crio um container local contendo os valores dos elementos HTML do input
    const linhaContainer = document.createElement('div')
    const spanCodigo     = document.createElement('span')
    const spanProduto    = document.createElement('span')
    const spanQuantidade = document.createElement('span')

    spanCodigo.textContent     = codigo.value
    spanProduto.textContent    = produto.value
    spanQuantidade.textContent = quantidade.value

    // Estilização dos spans
    linhaContainer.className  = 'flex gap-2 w-full justify-between text-center'
    spanCodigo.className      = 'bg-blue-400 px-8 py-2 rounded-[5px] flex-1 text-center'
    spanProduto.className     = 'bg-blue-400 px-8 py-2 rounded-[5px] flex-1 text-center'
    spanQuantidade.className  = 'bg-blue-400 px-8 py-2 rounded-[5px] flex-1 text-center'

    // Adiciono os spans dentro do container
    linhaContainer.appendChild(spanCodigo)
    linhaContainer.appendChild(spanProduto)
    linhaContainer.appendChild(spanQuantidade)

    // Adiciono o container à lista
    lista.appendChild(linhaContainer)

    limparCampos()
}

function limparCampos(){
    document.getElementById('produto').value = ''
    document.getElementById('codigo-produto').value = ''
    document.getElementById('quantidade-produto').value = ''
}

function inicializarEventos(){
    const botaoAdicionar = document.getElementById('botao-adicionar')
    
    if (botaoAdicionar) {
        botaoAdicionar.addEventListener('click', adicionaCadastroProduto)
    }
}

inicializarEventos()