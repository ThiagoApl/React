import React from "react";
import { Link } from "react-router-dom";

const home = () =>{
    return (
        <div>
            <h1>Pagina Inicial</h1>
            <nav>
                <ul>
                    <li>
                        <link to="/Atv01">Atividade 1</link>
                    </li>
                    <li>
                        <Link to="/Atv02">Atividade 2</Link> 
                    </li>
                </ul>
            </nav>
        </div>
    )
}