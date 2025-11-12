import {React, useEffect, useState} from 'react'
import axios from 'axios'

const DpoLgpd = () => {
  const [mensagem, setMensagem] = useState([]);

  useEffect(()=> {

    axios.get('http://localhost:3000/dpo')
    .then(r => setMensagem(r.data))
    .catch(e => console.error("Não conseguiu carregara por algum motivo", e))

  },[])

  return (
    <div>
      <h1>DPO - LGPD</h1>
        {
          mensagem.map(i => (
            <div key={i.id}>
              <h2>{i.titulo}</h2><br></br>
              <p>{i.mensagem} </p>
            </div>  
          ))
        }
    </div>
  )
}

export default DpoLgpd