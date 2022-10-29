import React, { useState } from "react";
import NumeroSorteado from "../NumeroSorteado/NumeroSorteado";

const Sorteador = () => {

    const [numerosSorteados, setNumerosSorteados] = useState([]);
    var array = [];

    function sortear() {

        if (array.length > 0) {
            array = [];
        }

        let min = document.getElementById("min").value;
        let max = document.getElementById("max").value;
        let qntd = document.getElementById("qntdNumeros").value;

        min = Math.ceil(min);
        max = Math.floor(max);

        for (let index = 0; index < qntd; index++) {

            // setNumerosSorteados([index])
            array.push(Math.floor(Math.random() * (max - min) + min))
        }

        setNumerosSorteados(array)
    }




    return (
        <div className="container">
            <div style={{ marginBottom: '5px' }}>Sortear <input type="number" id="qntdNumeros" style={{ padding: '18px', width: '100px', color: 'orange', fontSize: '20px' }} /> números</div>
            <div>entre <input type="number" id="min" style={{ padding: '18px', width: '100px', color: 'orange', fontSize: '20px' }} /> a <input type="number" id="max" style={{ padding: '18px', width: '100px', color: 'orange', fontSize: '20px' }} /></div>
            <div style={{display:'flex', justifyContent:'center'}}>
                <button onClick={sortear} style={{ width: '150px', height: '50px', padding: '5px', marginTop: '10px', cursor: 'pointer', border: '1px solid white' }}>SORTEAR</button>
            </div>

            {numerosSorteados.length > 0 ?
                <div style={{ margin: '20px 0', fontWeight: '500', textAlign: 'center' }}>Numeros Sorteados</div>
                : null}
            <div style={{ display: 'flex' }}>
                {numerosSorteados.map((key, index) => {
                    return <NumeroSorteado numero={key} />
                })}
            </div>
        </div>
    );
}

export default Sorteador