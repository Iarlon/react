import React from 'react'

const Produto = ({nome, preco, categoria, quantidade}) => {
  return (
    <>
    <p>Produto: {nome}</p>
    <p>Preço: {preco}</p>
    <p>Categoria: {categoria}</p>
    <p>Quantidade: {quantidade}: {quantidade > 0 ? "disponível" : "esgotado"}</p>
    </>
  )
}

export default Produto