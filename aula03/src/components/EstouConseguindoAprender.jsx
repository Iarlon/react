import React from 'react'

const EstouConseguindoAprender = (props) => {
    const estouConseguindo = props.estouConseguindo

  return (
    <div>{estouConseguindo ? <h1>Estou conseguindo</h1> : <h1>Preciso estudar mais</h1>}</div>
  )
}

export default EstouConseguindoAprender