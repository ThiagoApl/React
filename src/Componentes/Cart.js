import styled from "styled-components";
import Button from "./Button";
import { findByLabelText } from "@testing-library/react";
import { alignPropType } from "react-bootstrap/esm/types";
import { propTypes } from "react-bootstrap/esm/Image";

const SLi = styled.li`

margim-bottom: 10px;
padding: 16px;
border-radius: 8px;
background: #f2f2f2;
display: flex;
justify-content: space-between;
align-items: center;
`;

const SDivInfo = styled.div`
p {
    font-size: 16px;
    margim-bottom: 2px;
}
span {
    font-size: 16px;
    font-weight: bold;
}
`;
const SDivUnits = styled.div`
    width: 86px;
    display: flex;
    justify-content: space-between;
    align-items: center;
buttom{
    padding: 5px;
    border: 1px solid #ffffff;
    border-radius: 5px;
    cursor: pointer
}
`;

/**
 * Componentes para listagem de produtos no carrinho
 * @param{Object} Product - Produto na listagem
  */

function CartProduct ({Product, onChange, IsLoading}){
    return(
        <SLi>
            <SDivInfo>
                <p>{Product.name}</p>
                <span>R${Product.price}</span>
            </SDivInfo>
            <SDivUnits>
                <button disabled={IsLoading} onClick={() => onChange(Product, -1)}>
                    -
                </button>
                <p>{Product.units}</p>
                <button disabled={IsLoading} onClick={() => onChange(Product, +1)}>

                </button>
            </SDivUnits>
        </SLi>
    );
}


const SSection = styled.section`
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 50px;
    gap: 20px;
`;

/*Elemento de Lista personalizado com CSS */

const SUl = styled.ul`
    list-style-type: none;
`;
/**
 * Componentes para listagem de Produtos no carrinho
 * @param {Object[]} Products produto para listagem
 * @param {Function} onClick Função de Finalização
 * @param {BooLean} IsLoading Status de Loading
 */

    
function Cart({Product, onChange, onClick, IsLoading = false }) {
    return (
        <SSection>
            <SUl>
                {Product.map((product) => (
                    <CartProduct
                        key={product.id}
                        product={product}
                        onChange={onChange}
                        IsLoading={IsLoading}
                    />
                ))}
            </SUl>
                <Button onClick={onClick} IsLoading={IsLoading}>
                    Finalizar Compra
                </Button>
        </SSection>
    );
}

export default Cart;