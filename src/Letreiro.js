import React, { useState, useEffect } from 'react';
const TypingText = () => {
  const text = ' Conheça a Fatec ';
  const [index, steIndex] = useState(0);

  useEffect(() => {
    const timeoutld = setTimeout(()=> {
      steIndex((prevIndex) =>(prevIndex + 1)% text.length);
    },400); //Ajuste a velocidade

    return ()=> clearTimeout(timeoutld);
  },[index]);

  return <h1>{text.slice(0, index)}</h1>;
}

export default TypingText;