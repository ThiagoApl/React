// src/components/DateTime.js

import React from 'react';

const DateTime = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString();

  return (
    <div>
      <p>Meu Relogio</p>
      <p>Data e Hora Atuais:</p>
      <p>{formattedDate}</p>
    </div>
  );
};

export default DateTime;

