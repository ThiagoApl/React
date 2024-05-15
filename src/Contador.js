import React, { useState } from 'react';

function App() {
  const [countHomens, setCountHomens] = useState(0);
  const [countMulheres, setCountMulheres] = useState(0);

  return (
    <div className="App">
      <div>
        <h2>Contador de Homens: {countHomens}</h2>
        <button onClick={() => setCountHomens(countHomens + 1)}>Incrementar Homens</button>
        <button onClick={() => setCountHomens(countHomens - 1)}>Decrementar Homens</button>
      </div>
      <div>
        <h2>Contador de Mulheres: {countMulheres}</h2>
        <button onClick={() => setCountMulheres(countMulheres + 1)}>Incrementar Mulheres</button>
        <button onClick={() => setCountMulheres(countMulheres - 1)}>Decrementar Mulheres</button>
      </div>
    </div>
  );
}

export default App;
