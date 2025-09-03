import React from 'react'
import Adicao from './components/Adicao'
import Divisao from './components/Divisao'
import Multiplicacao from './components/Multiplicacao'
import Subtracao from './components/Subtracao'

const App = () => {
  return (
    <div>
      <Adicao num1={2} num2={2}/>
      <Divisao num1={2} num2={2}/>
      <Multiplicacao num1={2} num2={3}/>
      <Subtracao num1={2} num2={2}/>

    </div>
  )
}

export default App
