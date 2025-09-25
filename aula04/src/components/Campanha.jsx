import React from 'react'
import styles from './Campanha.module.css'

const Campanha = (props) => {

    function definirMensagem(mes){
        if(mes === "setembro"){
            return "Prevensão ao suicídio"
        }
        else if(mes === "outubro"){
            return "Conscientização sobre o câncer de mama"
        }
        else if(mes === "novembro"){
            return "Prevenção e combate ao câncer de próstata"
        }
    }
    function definirCor(mes){
        if(mes === "setembro"){
            return styles.setembro
        }
        else if(mes === "outubro"){
            return styles.outubro
        }
        else if(mes === "novembro"){
            return styles.novembro
        }
    }

  return (
    <div>
        <h1>Campanha</h1>
        <h2 className={definirCor(props.mes)}>{definirMensagem(props.mes)}</h2>
    </div>
  )
}

export default Campanha