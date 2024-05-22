import React, { useState } from 'react';


function Contador() {
  const [homens, setHomens] = useState(0);
  const [mulheres, setMulheres] = useState(0);

  const incrementarHomens = () => {
    setHomens(homens + 1);
  };

  const incrementarMulheres = () => {
    setMulheres(mulheres + 1);
  };

  return (
    <div className="container">
      <h1>Contador de Homens e Mulheres</h1>
      <div className="count">
        Homens: {homens} | Mulheres: {mulheres}
      </div>
      <div className="btn">
        <button className="btn1" onClick={incrementarHomens}>
          + Homem
        </button>
        <button className="btn2" onClick={incrementarMulheres}>
          + Mulher
        </button>
      </div>
    </div>
  );
}

export default Contador;
