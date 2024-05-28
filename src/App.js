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
    