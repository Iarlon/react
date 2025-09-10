import React, { useState } from 'react'

const HookContador = () => {
    const [contador, setContador] = useState(1)
    function incrementar() {
        setContador(contador + 1)
    }

    function decrementar(){
        setContador(contador - 1)
    }
    
  return (
    <div>
        <h1>Contador com useState</h1>
        <p>Para aumentar</p>
        <button onClick={() => incrementar()}>
            clique
        </button>
        <p>Para diminuir</p>
        <button onClick={() => decrementar()}>
            clique
        </button>

        <h2>O contador está em: {contador}</h2>

        

    </div>
  )
}

export default HookContador