import Relogio from './Relogio';
import Gallery from './GaLLery';
import { Link } from 'react-router-dom';

export default function Atv01() {
    return (
        <>
        <h1>Atividade 01</h1>
        <Relogio/>
        <Gallery/>
        <br />
        <Link to="/">Retornar a Pagina Inicial</Link>
        </>
    );
}