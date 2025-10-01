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
    })
  return (
    <div>{fetchData()}</div>
  )
}

export default ResgatandoDados