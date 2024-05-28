import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [operation, setOperation] = useState('+');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const number1 = parseFloat(num1);
    const number2 = parseFloat(num2);
    let res = null;
    if (operation === '+') res = number1 + number2;
    if (operation === '-') res = number1 - number2;
    if (operation === '*') res = number1 * number2;
    if (operation === '/') res = number1 / number2;
    setResult(res);
  };

  return (
    <div>
      <input type="number" value={num1} onChange={(e) => setNum1(e.target.value)} />
      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="number" value={num2} onChange={(e) => setNum2(e.target.value)} />
      <button onClick={handleCalculate}>Посчитать</button>
      {result !== null && <p>{num1} {operation} {num2} = {result}</p>}
    </div>
  );
};

export default Calculator;
