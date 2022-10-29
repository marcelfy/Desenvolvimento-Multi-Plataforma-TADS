import React from "react"
import Styles from './NumeroSorteado.module.css'

const NumeroSorteado = (props) => {
    return (

        <div className={Styles.circulo}><b style={{ background: 'white', color: 'black' }}>{props.numero}</b></div>

    )
}

export default NumeroSorteado;