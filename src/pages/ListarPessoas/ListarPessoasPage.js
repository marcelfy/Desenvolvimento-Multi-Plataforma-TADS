import Styles from './ListarPessoasPage.module.css'
import { useState } from 'react'
import axios from 'axios'

const ListarPessoasPage = () => {

  const [usuarios, setUsuarios] = useState()

  function sortear(min, max) {

    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min) + min)

  }

  async function listar() {
    await axios.get('https://jsonplaceholder.typicode.com/users').then((resp) => {
      setInterval(() => {           
        setUsuarios(resp.data[sortear(0, resp.data.length)])
      }, 3000);

    })
  }

  return (
    <div className={Styles.container}>
      <h3>Lista de Pessoas</h3>
      <br />
      <div>
        <table border={2}>
          <tr>
            <th>Nome</th>
            <th>Usuário</th>
            <th>E-mail</th>
            <th>Cidade</th>
            <th>Site</th>
          </tr>
          <tr>
            <th>{usuarios?.name}</th>
            <th>{usuarios?.username}</th>
            <th>{usuarios?.email}</th>
            <th>{usuarios?.address?.street}</th>
            <th>{usuarios?.website}</th>
          </tr>
        </table>
        <div className={Styles.btnArea}>
          <button onClick={listar} className={Styles.btn}>Clique para listar</button></div>
      </div>
    </div>
  )
}

export default ListarPessoasPage