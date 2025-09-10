import React from 'react'
import EstouConseguindoAprender from './components/EstouConseguindoAprender'
import EstaComSono from './components/EstaComSono'

const App = (props) => {
  return (
    <div><EstouConseguindoAprender estouConseguindo={true}/>
    <EstaComSono sono={true}/></div>
  )
}

export default App