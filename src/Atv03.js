
import { Link } from 'react-router-dom';
import GaLLery from './GaLLery';

export default function Atv03() {
    return (
        <>
        <h1>Atividade 03</h1>
        <article>
            <h1>My First Component</h1>
            <ol>
                <li>Components: UI Building Blocks</li>
                <li>Defining a Component</li>
                <li>Using a Component</li>
            </ol>
        </article>
        <GaLLery />
        


        <br />
        <Link to="/">Retornar a Pagina Inicial</Link>
        </>
    );
}