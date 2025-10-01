import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ResgatandoDados from './components/ResgatandoDados'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <ResgatandoDados/>
    </div>
  )
}

export default App
