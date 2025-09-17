import React from 'react'
import Aluno from './components/Aluno'
import Linguagens from './components/Linguagens'
import Produto from './components/Produto'

const App = (props) => {
  return (
    <div>
      {[
        {nome: "tenis", preco: 100, categoria: "roupas", quantidade: 10},
        {nome: "camiseta", preco: 10, categoria: "roupas", quantidade: 10},
        {nome: "pipa", preco: 3, categoria: "lazer", quantidade: 0}
      ].map((itens) => <Produto nome={itens.nome} preco={itens.preco} categoria={itens.categoria} quantidade={itens.quantidade}/>)
      }
      
      <p>---------------------------------------------</p>
     {
        [
          {nome: "iarlon", email: "iarlon@aula.com", curso: "math", media: "7"},
          {nome: "mailson", email: "mailson@aula.muito", curso: "english", media: "6"},
          {nome: "neto", email: "neto@aula.com", curso: "art", media: "7"},
          {nome: "samuel", email: "samuel@aula.demais", curso: "science", media: "7"}
        ].map((aluno) => <Aluno nome={aluno.nome} email={aluno.email} curso={aluno.curso} media={aluno.media}/>)
      }
      {
        [
          {nome: "java", dificuldade: "médio/difícil"},
          {nome: "Python", dificuldade: "fácil"},
          {nome: "Javascript", dificuldade: "fácil"},
          {nome: "PHP", dificuldade: "médio"},
          {nome: "Ruby", dificuldade: "difícil"},
        ].map((linguagens) => <Linguagens nome={linguagens.nome} dificuldade={linguagens.dificuldade}/>)
      }
    </div>
  )
}

export default App