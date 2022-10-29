import Relogio from "../../components/Relogio/Relogio";
import Sorteador from "../../components/Sorteador/Sorteador";
import Styles from './SorteadorNumeroPage.module.css'

const SorteadorNumeroPage = () => {
    return (
        <div className={Styles.container}>

                <h2>Atividade aula 18/10</h2>
                <Relogio/>
            <div className={Styles.titulo}>
                <h3>Sorteador de números</h3>
            </div>
            <Sorteador/>
        </div>
    );
}

export default SorteadorNumeroPage;
