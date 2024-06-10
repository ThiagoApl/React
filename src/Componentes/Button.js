import styled from "styled-components";
import Button from "../Exemplo1";

const SButton = styled.button`
    cursor: Pointer;
    padding: 18px 8px;
    width: 100%;
    color: #ffffff;
    background-color: #000000;
    font-size: 18px;
    border: 0;
    border-radius: 8px;
`;

/**
 * componente de botao
 * @param {HTMLCollection} children elementos internos
 * @param {Function} onClick funcão clicar
 * @param {BooLean} isLoading Status de Loading
 */

function button({children, onClick, isLoading = false}){
    return(
        <SButton onClick={onclick} disabled={isLoading}>
            {isLoading ? "Carregando....": children}
        </SButton>
    );
}
export default Button;