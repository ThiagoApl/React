import { useState } from "react";
import Button from "./Exemplo1";

export default function Chat({contact}) {
    const [text, setText] = useState('');
    return (
        <section className="chat">
            <textarea
                value={text}
                placeholder={'Chat to' + contact.name}
                onChange={e => setText(e.target.value)}
            />
        <br />
        <Button> Send to {contact.email}</Button>
        </section>
    );
}