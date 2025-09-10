import React from 'react'
import ImagemMacacoSorrindo from '../assets/macacoSorrindo.jpg'
import MacacoNoGalho from '../assets/macacoNoGalho.jpg'

const TrabalhandoComImagens = () => {
  return (
    <div>
        <img src={ImagemMacacoSorrindo} alt="imagem de macaco sorrindo"></img>
        <img src={MacacoNoGalho} alt="macaco no galho"></img>
    </div>
  )
}

export default TrabalhandoComImagens