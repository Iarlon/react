import React, { useEffect, useState } from 'react'
const url = "http://localhost:3000/alunos"
const ResgatandoDados = () => {
    const [alunos, setAlunos] = useState([])
    
    useEffect(() => {
        async function fetchData() {
            const res = await fetch(url);

            const data = await res.json();
            setAlunos(data)
        }
        fetchData()
    }, [])
  return (
    <div>
      <h2>Lista de Alunos</h2>
      <ul>
          {alunos.map((aluno) =>(
            <li key={aluno.id}>{aluno.name}</li>
          ))}
      </ul>
    </div>
  )
}

export default ResgatandoDados