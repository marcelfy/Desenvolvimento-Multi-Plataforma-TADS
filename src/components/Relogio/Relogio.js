import { useEffect, useState } from "react";
import Styles from './Relogio.module.css'

const Relogio =() =>{

    const [hora, setHora] = useState(new Date().toLocaleTimeString())

    useEffect(()=>{
        start()
    },[start])

    function start(){
        setTimeout(() => {
            var date = new Date();
            setHora(date.toLocaleTimeString())
        }, 1000);
    }

    return (
        <div className={Styles.container}>
            <h2>{hora}</h2>
        </div>
    );
}

export default Relogio