import { Alert } from "bootstrap";
import { Children } from "react";

export default function Button() {
    return (
        <button>
            I don't do anythyng
        </button>
    );
}

export default function Button() {
    function handleClick() {
        alert ('You Clicked me!');
    }
    return (
        <button onClick={handleClick}>
        Click me
        </button>
    );
}

<button onClick={function handleClick() {
    alert('You click me!');
}}></button>

function AlertButton({message, Children}) {
    return (
        <button onClick={() => Alert(message)}>
            {Children}
        </button>
    );
}
export default function Toolbar() {
    return(
        <div>
            <AlertButton message="Playing!">
                Play Movie
            </AlertButton>
            <AlertButton message="Uploading">
                Upload image   
            </AlertButton>
        </div>
    );
}

function Button({onClick, Children}) {
    return (
        <button onClick={onClick}>
        {Children}
        </button>
    );
}

function PlayButton({movieName}) {
    function handlePlayClick() {
        alert('Playing ${movieName}!');
    }
return (
    <Button onClick={handlePlayClick}>
        Play "{movieName}"
    </Button>
);
}

function UploadButton() {
    return (
        <div>
            <PlayButton movieName="Kiki's Delivery Service" />
            <UploadButton />
        </div>
    );
}

function Button({onSmash, Children}) {
    return (
        <button onClick={onSmash}>
            {Children}
        </button>
    );
}
export default function App() {
    return(
        <div>
            <Button onSmash={()=> Alert('Playing')}>
                Play Movie
            </Button>
            <Button onUpLoadingImage={()=> Alert('Uploading')}>
                Upload image
            </Button>
        </div>
    );
}

export default function App() {
    return (
        <Toolbar
            onPlayMovie={()=> Alert('Playing')}
            onUpLoadingImage={()=> Alert('Uploading!')}
        />
    );
}
function Toolbar ({onPlayMovie, onUpLoadingImage}) {
    return (
        <div>
            <Button onClick={onPlayMovie}>
                Play Movie
            </Button>
            <Button onClick={onUpLoadingImage}>
                Upload image
            </Button>
        </div>
    );
}

function Button({onClick, Children}) {
    return(
        <Button onClick={onClick}>
            {Children}
        </Button>
    );
}

export default function Toolbar() {
    return(
        <div className="Toobar" onClick={()=>{
            Alert('You clickd on toobar!');
    }}>
        <Button onClick={()=> alert ('Playing!')}>
            Play Movie
        </Button>
        <Button onClick={()=> alert ('Uploading')}>
            Upload image
        </Button>
    </div>
    );
}

function Button({ onClick, Children}) {
    return(
        <Button onClick={e => {
            e.stopPropagation();
            onClick();
    }}>
        {Children}
        </Button>
    );
}

export default function Toobar() {
    return (
        <div className="Toobar" onClick={()=> {
            alert('You clicked on the toolbar!');
        }}>
        <Button onClick={() => Alert('Playing!')}>
            Play Movie
        </Button>
        <Button onClick={()=> Alert('Uploading!')}>
            Upload  image
        </Button>
        </div>
    );
}
function Button({ onClick, Children}) {
    return (
        <Button onClick={ e =>{
            e.stopPropagation();
            onClick();
         }}>
            {Children}
        </Button>
    );
}

export default function Signup() {
    return(
        <form onSubmit={() => alert('Submitting!')}>
            <imput />
            <Button>Send</Button>
        </form>
    );
}
//2.1.9 Os manipuladores de eventos podem ter efeitos colaterais - pg 12.

export default function Clock ({Time}) {
    return (
        <>
        <h1>{Time}</h1>
        <imput />
        </>
    );
}
function useTime() {
    const [time, setTime] = useState(() => new Date());
    useEffect(() => {
        const id = setInterval(() => {
            setTime(new Date());
        }, 1000);
        return () => clearInterval(id);
        }, []);
        return time;
    }

    import { useState } from "react";
import { Placeholder } from "react-bootstrap";

    export default function Form() {
        const[isSent, setIsSent] = useState(false);
        const[message, setMessage] = useState('Hi!');
        if (isSent) {
            return <h1>Your message is on its way!</h1>
        }
        return (
            <form onSubmit={(e) => {
                e.preventDefault();
                setIsSent(true);
                sendMessage(message);
          }}>
          <textarea
            Placeholder="Message"
            value={message}
            onChange={e =>setMessage(e.target.value)}
        />
        <Button type="Submit">Send</Button>
        </form>
     );
    }

    function sendMessage(message) {
        //.....
    }

    import { useState } from "react";
    export default function Counter() {
        const [number, setNumber] = useState(0);
        return (
            <>
            <h1>{Number}</h1>
            <Button onClick={() => {
                setNumber (number + 1);
                setNumber (number + 1);
                setNumber (number + 1);
                setNumber (number + 1);
            }}>+3</Button>
            </>
        )
    }

    import { useState } from "react";
    export default function Counter() {
        const[number, setNumber] = useState(0);
        return (
            <>
            <h1>{number}</h1>
            <Button onClick={() =>{
                setNumber(Number + 1);
                setNumber(Number + 1);
                setNumber(Number + 1);
                setNumber(Number + 1);
            }}>+3</Button>
            </>
        )
    }

    import { useState } from "react-router-dom";
    export default function Counter() {
        const [number, setNumber] = useState(0);
        return (
            <>
            <h1>{Number}</h1>
            <Button onClick={() => {
                setNumber(number + 5);
                alert(number);
            }}>+5</Button>
            </>
        )
    }

    import { useState } from "react";

    export default function Counter() {
        const[number, setNumber] = useState(0);
        return(
            <>
            <h1>{Number}</h1>
            <Button onClick={()=> {
                setNumber (number + 5);
                setTime(() => {
                    alert(number);
                }, 3000);
            }}>+5</Button>
        </>
     )
 }

 import { useState } from "react";

 export default function Form() {
    const [to, setTo] = useState('Alice');
    const[message, setMessage] = useState('Hello');

    function handleSubmit(e) {
        e.preventDefault();
        setTimeout(() =>{
            alert('You said ${Menssage} to ${to}');
        },5000);
    }
    return (
        <form onSubmit={handleSubmit}>
        <label>
            To:{''}
            <select
                value={to}
                onChange={e =>setTo(e.target.value)}>
                    <Option value="Alice">Alice</Option>
                    <Option value="Bob">Bob</Option>
            </select>
            </label>
            <textarea
                placeholder="Message"
                value={message}
                 onChange={e => setMessage(e.target.value)}
        />
        <Button type="Submit">Send</Button>
        </form>
    );
 }

 import { useState } from "react";

 export default function Counter() {
    const [number, setNumber] = useState(0);

    return (
        <>
        <h1>{number}</h1>
        <button onClick={() => {
            setNumber(Number + 1);
            setNumber(Number + 1);
            setNumber(Number + 1);
            setNumber(Number + 1);
        }}>+3</button>
    </>
  )
}


import { useState } from "react";

export default function Counter() {
    const[number, setNumber] = useState(0);
    return (
<>
        <h1>{number}</h1>
        <Button onClick={() => {
            setNumber(Number + 1);
            setNumber(Number + 1);
            setNumber(Number + 1);
            setNumber(Number + 1);
        }}>+3</Button>
    </>
  )
}

import { useState } from "react";
export default function Counter (){ 
    const[number, setNumber] = useState(0);
    return (
    <>
     <h1>{number}</h1>
     <Button onClick={() => {
         setNumber(Number + 5);
         setNumber(n => n + 1);
      }}>Increase The number</Button>
   </>
 )
}

import { useState } from "react";

export default function Counter (){
    const[number, setNumber] = useState(0);
    return (
<>
        <h1>{number}</h1>
        <Button onClick={() => {
            setNumber(Number + 5);
            setNumber(n => n + 1);
            setNumber(42);
        }}>Increase The number</Button>
    </>
  )
}

import { useState } from "react";

export default function MovingDot() {
    const[position, setPosition] = useState ({
        x: 0,
        y: 0
});
return (
    <div 
        onPointerMove={e =>{
            position.x = e.clientX;
            position.y = e.clientY;
        }}
    style={{
        position:'relative',
        width: '100vw',
        height: '100vh',
    }}>
        <div style={{   
            position: 'absolute',
            backgroundColor: 'red',
            borderRadius: '50%',
            transform:'translate(${position.x}px, ${position.y}px)',
            left: -10,
            top: -10,
            width: 20,
            height: 20,
    }} />
    </div>
);
}
import { useState } from "react-router-dom";
import { First, Last } from "react-bootstrap/esm/PageItem";

export default function Form2 () {
    const [person, stePerson] = useState({
        FirstName: 'Barbara',
        LastName: 'Hepworth',
        email: 'bhepworth@sculpture.com'
    });
    function handleFirstNameChange(e) {
        person.FirstName = e.target.value;
    }
    function handleLastNameChange(e) {
        person.LastName = e.target.value;
    }
    function handleEmailChange(e) {
        person.email = e.target.value;
    }
    return (
        <>
            <label>
                First Name:
                <input
                    value={person.FirstName}
                    onChange={handleFirstNameChange}
                />
            </label>
            <label>
                Last Name:
                <imput
                    value={person.LastName}
                    onChange={handleLastNameChange}
                />    
            </label>        
            <label>
                Email: 
                <input
                    value={person.email}
                    onChange={handleEmailChange}
                />
            </label>
            <p>
                {person.FirstName}
                {person.LastName}
                {person.email}
            </p>
        </>
    );
}

import { useState } from "react";

export default function Form3() {
    const[person, setPerson] = useState({
        name: 'Nikki de Saint Phalle',
        artwork: {
            title: 'Blue Nana',
            city: 'Hamburg',
            image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        }
    });
    function handleLeNameChange(e) {
        setPerson({
            ...person,
            name:e.target.value
        });
    }

    function handleTitleChange(e) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                title: e.target.value
            }
        });
    }
    function handleCityChange(e) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                title: e.target.value
            }
        });
    }
    function handleImageChange(e) {
        setPerson({
            ...person,
            artwork: {
                ...person.artwork,
                image: e.target.value
            }
        });
    }
}   

        return (
        <>
        <label>
            Name: 
            <input
                value={person.name}
                onChange={handleLeNameChange}
        />
        </label>

        <label>
            title:
            <input 
                value={person.artwork.title}
                onChange={handleTitleChange}
            />
        </label>

        <label>
            City:
                <input 
                    value={person.artwork.city}
                    onChange={handleCityChange}
                />
        </label>  

        <label>
            image:
                <input
                    value={person.artwork.image}
                    onChange={handleImageChange}
                />
        </label>
        <p>
                <i>{person.artwork.title}</i>
                {'by'}
                {person.name}
                <br />
                (located in {person.artwork.city})
            </p>
            <img
                src={person.artwork.image}
                alt={person.artwork.title}
            />
        </>  
    );
import { useState } from "react";

//let nextId = 0;

export default function List() {
    const[name, setName] = useState('');
    const[artists, steArtists] = useState([]);

    return (
        <>
        <h1>Inspiring sculpture:</h1>
        <input
            value={name}
            onChange={e => setName(e.target.value)}
        />
        <Button onClick= {() => {
            artists.push({
                id: nextId++,
                name:name,
            });
        }}>Add</Button>
        <ul>
            {artists.map(artists => (
                <li key={artists.id}>{artists.name}</li>
            ))}
        </ul>
    </>
  );
}

import { useState } from "react";

let initialArtists = [
    { id: 0, name: 'Marta Colvin Andrade'},
    { id: 1, name: 'Lamidi Olonade Fakeye'},
    { id: 2, name: 'louise Nevelson'},
];
export default function List2() {
    const[artists, steArtists] = useState (
        initialArtists
    );

    return (
        <>
        <h1>Inspiring sculpture:</h1>
        <ul>
            {artists.map(artists => (
                <li key={artists.id}>
                    {artists.name} {''}
            <Button onClick={()=>{
                setArtists(
                    artists.filter(a =>
                        a.id !== artists.id
                    )
                );  
            }}>
                Delete
            </Button>
            </li>
        ))}    
        </ul>
        </>
    );
}

import { useState } from "react";
import { type } from "@testing-library/user-event/dist/type";

let initialShapes = [
    {id: 0, type: 'circle', x: 50, y: 100},
    {id: 1, type: 'square', x: 150,y: 100},
    {id: 2, type: 'circle', x: 250,y: 100},
];
export default function ShapeEditor () {
    const [shapes, setShapes] = useState(
        initialShapes
    );
    function handleClick() {
        const nextShapes = shapes.map(shape => {
            if (shape.type ==='square') {
                //change
                return shape;
            } else {
                // return a new circle 50px below
                return {
                    ...shape,
                    y: shape.y + 50,
                };
            }
        });
        //Re-render with the new array
        setShapes(nextShapes);
    }
}

return (

    <>
        <Button onClick={handleClick}>
            movie circle down!
        </Button>
        {shapes.map(shape => (
            <div
                key={shape.id}
                style={{
                background:'purple',
                position:'absolute',
                left: shape.x,
                top: shape.y,
                borderRadius:
                    shape.type ==='circle'
                        ? '50%':'',
                width: 20,
                height: 20,
                }} />
        ))}
    </>
);
 
import { useState } from "react";

let initialCounters = [
    0,0,0,
];

export default function CounterList() {
    const[counters, setCounters] = useState (
        initialCounters
    );


function handleIncrementClick(index) {
    const nexCounters = counters.map((c,i)=> {
        if (i === index) {
            return c + 1;
        } else {
            return c;
        }
    });
    setCounters(nexCounters);
}    
return (
    <ul>
        {counters.map((Counter, i)=> (
            <li key={i}>
                {Counter}
            <Button onClick={()=> {
                handleIncrementClick(i);
            }}>+1</Button>
        </li>
        ))}
    </ul>
);
}
import { useState } from "react";
let nextId = 3;
const initialList = [
    {id: 0, title: 'Big Bellies', seen: false},
    {id: 1, title: 'Lunar Landscape', seen: false},
    {id: 2, title: 'Terracotta Army', seen: true},
];
export default function BucketList() {
    const [myList, setMyList] = useState(initialList);
    const[yourList, setYourList] =useState (
        initialList
    );
    function handleToggleMyList(artworkId, nextSeen) {
        const myNextList = [...myList];
        const artwork = myNextList.find(
            a=> a.id ===artworkId
        );
    artwork.seen = nextSeen
    setMyList(myNextList);
    }
    function handleToYourList(artworkId, nextSeen) {
        const yourNextList = [...yourList];
        const artwork = yourNextList.find(
            a => a.id === artworkId
        );
    artwork.seen = nextSeen;
    setYourList(yourNextList);
    }

    return (
        <>
            <h1>Art Bucket List</h1>
            <h2>My list of art to see:</h2>
            <ItemList
                artworks={myList}
                onToggle={handleToggleMyList} />
            <h2>Your list of art to see:</h2>
            <ItemList
                artworks={yourList}
                onToggle={handleToggleMyList} />
        </>
      );
}

function ItemList({artworks, onToggle}) {
    return (
        <ul>
            {artworks.map (artwork =>(
                <li key={artwork.id}>
                    <label>
                        <input
                            type="checkbox"
                            checked={artwork.seen}
                            onChange={e => {
                                onToggle(
                                    artwork.id,
                                    e.target.checked
                                );
                            }}
                        />
                        {artwork.title}
                    </label>
                  </li>
            ))}
                </ul>
              );
}

function handleToggleMyList(artworkId, nextSeen) {
    setMyList(myList.map(artwork => {
        if(artwork.id === artworkId) {
            return {...artwork, seen: nextSeen};
        }else {
            return artworks;
     }
    }));
}

function handleToggleYourList(artworkId, nextSeen) {
    setYourList(yourList.map(artwork => {
        if (artwork.id === artworkId) {
            return {...artwork, seen, nextSeen};
        } else {
            return artwork;
        }
    }));
}