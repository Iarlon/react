import React, { useState } from 'react'

const HookMegaSena = () => {
  const [numeroSorteado, setNumeroSorteado] = useState()
  const [numerosSorteados, setNumerosSorteados] = useState([])
    
  function sortearNumero() {
    if(numerosSorteados.length < 6) {
      const novoNumero = Math.floor(Math.random() * 60) + 1
      setNumeroSorteado(novoNumero)
      setNumerosSorteados([...numerosSorteados, novoNumero]);
    }
    }
  return (
    <div>
        <h1>sorteador de mega sena</h1>
        <p>Clique para sortear</p>
        <button onClick={() => sortearNumero()}>
            clique
        </button>
        <h2>Numero atual {numeroSorteado}</h2>

        <h2>Os numerosSorteados são: {numerosSorteados.join(' - ')}
        </h2>

        

    </div>
  )
}

export default HookMegaSena