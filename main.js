'use strict'   

function adicionarProduto(){
    const produto = document.getElementById('produto')
    const lista = document.getElementById('lista')

    //lista.textContent = produto.value

    const span = document.createElement('span')
    span.textContent = produto.value
    span.className = 'bg-blue-400 px-8 py-2 rounded-[5px]'

    lista.appendChild(span)

}