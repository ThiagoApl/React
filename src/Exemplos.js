//1.1.1 Componentes: blocos de construção da interface do usuário
<article>
    <h1>My First Component</h1>
    <ol>
        <li>Components: UI Building Blocks</li>
        <li>Defining a Component</li>
        <li>Using a Component</li>
    </ol>
</article>
//1.1.2 Definindo um componente

export default function profile() {
    return (
        <img
            src="https://i.imgur.com/MK3eWAm.jpg"
            alt="Katherine Johnson"
        />
    )
}
return <img src="https://i.imgur.com/MK3eWAm.jpg" alt="Katherine Johnson" />;

//Mas se sua marcação não estiver toda na mesma linha que a palavra-chave return, 
//você deve colocá-la entre parênteses:
return (
    <div>
        <img src="https://i.imgur.com/MK3eWAm.jpg" alt="Katherine Johnson" />;
    </div>
);

//1.1.3 Usando um componente
function profile() {
    return (
        <img
            src="https://i.imgur.com/MK3eWAm.jpg"
            alt="Katherine Johnson"
        />
    );
}
export default function Gallery() {
    return (
        <section>
            <h1>Amazing scientistis</h1>
            <profile/>
            <profile/>
            <profile/>
        </section>
    );
}
//1.1.4 O que o navegador vê

<section>
    <h1>Amazing scientistis</h1>
    <img src="https://i.imgur.com/MK3eWAm.jpg" alt="Katherine Johnson" />"
    <img src="https://i.imgur.com/MK3eWAm.jpg" alt="Katherine Johnson" />"
    <img src="https://i.imgur.com/MK3eWAm.jpg" alt="Katherine Johnson" />"
</section>

//1.1.5 Aninhamento e organização de componentes
//Os componentes podem renderizar outros componentes, mas você nunca deve aninhar suas definições:

export default function Gallery() {
    //Nunca Defina um componente dentro de outra
    function profile(){
        //...
    }
    //...
}

//O trecho acima é muito lento e causa bugs. Em vez disso, defina todos os componentes no nível superior:

export default function Gallery(){
    //...
}
// Declare components no nivel  superfior 
function profile(){
    //...
}

//1.2.1 O arquivo do componente raiz

function profile() {
    return (
        <img
            src="https://i.imgur.com/MK3eWAm.jpg"
            alt="Katherine Johnson"
        />
    );
}

export default function Gallery() {
    return (
        <section>
            <h1>Amazing scientistis</h1>
            <profile />
            <profile />
            <profile />
        </section>
    );
}

