import { getByPlaceholderText } from "@testing-library/react";
import styled from "styled-components";

const SDiv = styled.div`
    height: 260px;
    padding: 10px;
    border-radius: 10px;
    background: #f2f2f2;
    cursor: pointer;

    img{
        width: 100%;
        height: 140px;
        border-radius: 5px;
    }
`;

const SDivInfo = styled.div`
    padding: 15px;

p{
    font-size: 15px;
}

span {
    font-size: 20px;
    font-weight:  bold;
}
`;

/**
 * @param {Object} product Produto para listagem
 * @param {Function} onClick Função de seleção
 */
function Product ({ product, onClick }) {
    return (
        <SDiv onClick={() => onClick(product)}>
            <img src={product.image} alt={product.name} />
        <SDivInfo>
            <p>{product.name}</p>
            <span>R${product.price}</span>
        </SDivInfo>
        </SDiv>
    );
}
const SSection = styled.section`
    overflow: auto;
    padding: 20px;
    display:  grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-auto-rows: 230px;
    gap: 20px;
`;

/**
 * @param {Object[]} product produtos para listagem
 * @param {Function} onClick Função Seleção
 */

function Product({ product, onClick, IsLoading = false }) {
    return (
        <SSection>
            {IsLoading // Verifica se esta Loading
            ? "Carregando...."
            : product.length > 0 // Verifica se existe o produtos
            ? product.map ((product) => 
                <Product key={product.id} product={product} onClick={onClick} />
            )
            : "Nenhum Produto encontrado"}
        </SSection>
    );
}
export default Product;

