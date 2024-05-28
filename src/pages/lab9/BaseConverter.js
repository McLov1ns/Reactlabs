import React, { useState } from 'react';

const BaseConverter = () => {
  const [number, setNumber] = useState('');
  const [base, setBase] = useState('10');
  const [converted, setConverted] = useState('');

  const handleConvert = () => {
    const num = parseInt(number, parseInt(base));
    setConverted(num.toString(10));
  };

  return (
    <div>
      <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} />
      <select value={base} onChange={(e) => setBase(e.target.value)}>
        <option value="2">2</option>
        <option value="8">8</option>
        <option value="10">10</option>
        <option value="16">16</option>
      </select>
      <button onClick={handleConvert}>Перевести</button>
      {converted && <p>Десятичная: {converted}</p>}
    </div>
  );
};

export default BaseConverter;