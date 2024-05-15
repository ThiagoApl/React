import {Relogio} from './Components/Relogio';
import Gallery from './Components/Gallery';
import { Link } from 'react-router-dom';

export default function Atv01() {
    return (
        <>
        <h1>Atividade 01</h1>
        <Relogio/>
        <Gallery/>
        <br />
        <link to="/">Retornar a Pagina Inicial</link>
        </>
    );
}