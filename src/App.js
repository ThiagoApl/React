import { useState } from 'react';
import { SculptureList } from './Data.js';
import Button from './Exemplo1.js';
export default function Gallery() {
    const [index, setIndex]= useState(0);
    function handleClick() {
        setIndex(index + 1);
    }
    let sculpture = SculptureList[index];
    return (
        <>
        <Button onClick={handleClick}>
            Next
        </Button>
        <h2>
            <i>
                {sculpture.name}</i>
            by  {sculpture.artist}
        </h2>
        ({index + 1}of {SculptureList.length})
        <h3>
            <img
            src={sculpture.url}
            alt={sculpture.alt}
        />
        </h3>
        <p>
            {sculpture.description}
        </p>
    </>
  );
}
import { useState } from 'react';
import {SculptureList} from './Data.js';

export default function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    function handlePlayClick() {
        setIndex(index + 1);
    }
    function handleMoreClick() {
        setShowMore(!showMore);
    }
    let sculpture = SculptureList[index];
    return (
        <>
        <Button onClick={handleNextClick}>
            Next
        </Button>
    <h2>
        <i>{sculpture.name}</i>
        by {sculpture.artist}
    </h2>
    <h3>
        ({index + 1} of {SculptureList.length})
    </h3>
    <Button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
    </Button>
    showMore && <p>{sculpture.description}</p>
    <img
        src={sculpture.url}
        alt={sculpture.alt}
    />
    </>
  );
}

import  Image  from './Image.js';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'))
root.render(<Image />);

import { useState } from 'react';
import Chat from './Chat.js';
import ContactList from './ContactList.js';

export default function messager() {
    const [to, setTo] = useState(contacts[0]);
    return (
        <div>
            <ContactList
                contacts={contacts}
                selectedContact={to}
                onSelect={contact => setTo(contact)}
            />
        <Chat contact={to} />
        </div>
    )
}

    const contacts = [
        {name: 'Taylor', email: 'taulor@mail.com'},
        {name: 'Alice', email: 'alice@mail.com'},
        {name: 'Bob', email: 'bob@mail.com'}
    ];

import { useEffect, useState } from 'react';
import Product from './Componentes/Products.js';

/**
 * @param {string} url caminho da função
 * @param {string} method métod da função
 * @returns objetos de resposta
 */
async function api(url, method, body = undefined) {
    return await fetch(`http://localhost4000${url}`,{
        body: body !== undefined ? JSON.stringify(body) : body,
        method: method,
        headers: {
            Accept: "aplication/json",
            "Content-Type": "application/json",
        },
    }).then((res) => res.json());
}

/**
 * @returns lista dos produtos
 */
async function apiGetProduct() {
    const data = await api("/products", "GET");
    return data.products;
}
/**
 * Salva o carrinho de compra no API
 * @param {Object[]} Products Lista os produtos
 */
async function apiSubmitCart(Products) {
    await api("/purchases", "POST", {Products});
}

function App() {
    const [productsLoading, setProductsLoading] = useState(false); //Status do Loading do Produtos
    const [products, setProducts] = useState([]); //Lista de Produtos
    const [cart, setCar] = useState([]); // lista dse produtos no carrinho
    const [cartLoading, setCartLoading] = useState(false); //Status do Loading do carrinho
}

/**
 * Busca dos Produtos
 */
async function getProducts() {
    setProductsLoading(true); // Ativa loading dos produtos
    setProducts(await apiGetProduct()); //Salva a lista de produtos na variavel global
    setProductsLoading(false); // Desativa loading dos produtos
}

/**
 * Salva os Produtos
 */

async function SubmitCart() {
    setCartLoading(true); // Ativa loading do carrinho
    await apiSubmitCart(cart); //Salva o carrinho
    setCar([]); //Limpa o carrinho
    setCartLoading(false); //Desaiva loadingo do carrinho

    getProducts(); // busca os produtos novamente
}

/**
 * Altera as Unidades do Carrinho
 */

function setProducts(product, Change) {
    const products = cart.filter(({id}) => {
        return id !== product.id;
    });

    product.units += Change;
    if (product.units > 0) {
        setCar(() => [... products, product]);
    }else {
        setCar(() => [...products]);
        setProducts((Lastproducts) => [...Lastproducts, Product]);
    }
}

/**
 * Adicona Prodtos no carrinho
 */

function AddProduct (product) {
    product.units = 1;
    setCar(() => [...cart, product]);

    setProducts(() =>
        product.filter(({id}) => {
            return id !== product.id;
        })
    );
 } 

 useEffect(() => {
    getProducts(); // Busca os produtos ao carregar a pagina
 },[]);

 return;

 import { useEffect, useState } from 'react';
 import styled from "styled-components";
 import Cart from './Componentes/Cart.js';
 import Products from './Componentes/Products.js';

 const Smain = styled.main`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns; 300px 1fr;
    grid-template-rows: 1fr;
 `;

 return (
    <Smain>
        <Cart
            products={cart}
            onChange={setProduct}
            onClick={SubmitCart}
            IsLoading={cartLoading}
        />
        <products
            products={products}
            onClick={AddProduct}
            IsLoading={productsLoading}
        />
    </Smain>
 );

 
 


