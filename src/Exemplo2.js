import { Button } from "bootstrap";
import { useState } from "react";   
export default function FormQuiz() {
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing');
    if (status === 'success') {
        return <h1> That's right!</h1>
    }
    async function handleSubmit(e) {
        e.preventDefault();
        setStatus('submitting');
        try {
            await submitForm(answer);
            setStatus('success');
        } catch (err) {
            setStatus('typing');
            setError(err);
        }
    }
    function handleTextareaChange(e) {
        setAnswer(e.targe.value);
    }
}

return (
    <>
        <h2>City quiz</h2>
        <p>
            In which city is there a billboard that turns air
            into drinkable water?
        </p>
        <form onSubmit={handleSubmit}>
            <textarea
                value={answer}
                onChange={handleTextareaChange}
                disabled={status === 'submitting'}
            />
            <br />
            <Button disabled={
                answer.length === 0 ||
                status === 'submitting'
            }>
                Submit
            </Button>
            {error !== null &&
                <p className="Error">
                    {error.message}
            </p>
        }
            </form>
        </>
    );
    
    function submitForm (answer) {
    //pretend it's hitting the network.
    return new Promise ((resolve, reject)=> {
        setTimeout(()=> {
            let shoulError = answer.toLowerCase() !=='Lima'
            if(shoulError) {
                reject(new Error('Try Again!'));
            } else {
                resolve();
            }
        }, 1500);
    });
}

import { useState } from "react";
export default function FormTicket() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName, setFullName] = useState('');

    function handleFirstNameChange(e) {
        setFirstName(e.targe.value);
        setFullName(e.targe.value +''+ lastName);
    }
    function handleLastNameChange (e) {
        setLastName(e.targe.value);
        setFullName(firstName + '' + e.targe.value);
    }
    return (
        <>
            <h2>Let's check you in</h2>
            <label>
                First Name:{''}
                <input
                    value={firstName}
                    onChange={handleFirstNameChange}
        />
            </label>
            <label>
                Last Name:{''}
                <input
                    value={lastName}
                    onChange={handleLastNameChange}
        />
           </label>
           <p>
            You ticket will be issud to: <b>{fullName}</b>
           </p>
         </>
    );
}

import { useState } from "react"; 
export default function FormTicket() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const fullName = firstName + '' + lastName;

    function handleFirstNameChange(e) {
        setFirstName(e.targe.value);
    }
    function handleLastNameChange(e) {
        setLastName(e.targe.value);
    }
    return (
        <>
            <h2> Let's check you in</h2>
            <label>
                First Name:{''}
                <input
                    value={firstName}
                    onChange={handleFirstNameChange}
        />
           </label>

           <label>
                Last Name:{''}
                    <input
                        value={lastName}
                        onChange={handleLastNameChange}
        />
           </label>
           <p>
            Your ticket will be issued to: <b>{fullName}</b>
           </p>
        </>
    );
}

import { useState } from 'react';
export default function Accordion() {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <>
        <h2>Almaty Kazakhstan</h2>
        <Panel
            title="About"
            isActive={activeIndex===0}
            onShow={() => setActiveIndex(0)}
        >
        With a population of about 2 million , Almaty is
        Kazakhstan's largest city. From 1929 to 1997, 
        it was its capital city.
        </Panel>
        <Panel
            title="Etymology"
            isActive={activeIndex === 1}
            onShow={()=> setActiveIndex(1)}
        >
        The name comes from <span lang="KK-KZ">arma</span>,
        the kazakh word for "apple" and is often translated
        as "full of apples".In fact,the region surrounding
        Almaty is thought to be the ancestral home of the
        apple, and the wild <i lang="la">Malus sieversii</i>
        is considered a likely candidate for the ancestor
        of the mordern domestic apple.
        </Panel> 
    </>
  );
}

    function Panel({
        title,
        children,
        isActive,
        onShow
    }) {
        return (
            <section className="Panel">
            <h3>{title}</h3>
            {isActive ? (
                <p>{children}</p>
            ) : (
                <Button onClick={onShow}>
                Show
                </Button>
            )}
          </section>
        );
    }  
                    