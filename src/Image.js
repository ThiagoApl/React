export default function Image() {
    return (
        <img
            src="https://i.imgur.com/ZF6s192.jpg"
            alt="'Floraris Genérica' by Eduardo Catalano"
        />
    );
}

import Gallery from "./GaLLery.js";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById('Root'))
root. render(<Gallery />);

export default function GaLLery() {
    return (
        <section>
            <h1>Inspiring  sculpture</h1>
            <image />
            <image />
            <image />
        </section>
    );
}
function Image() {
    return(
        <img
            src="https://i.i,gur.com/ZF6s192.jpg"
            alt="Floralis Genérica' by  Eduardo Catalano"
        />
    );
}