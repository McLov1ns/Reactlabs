import React, { useState } from 'react';

const NumberList = () => {
  const [numbers, setNumbers] = useState([1, 13, 6, 52, 4, 14]);
  const [input, setInput] = useState('');
  const [filter, setFilter] = useState('All');

  const handleAddNumber = () => {
    const num = parseInt(input);
    if (!isNaN(num)) {
      setNumbers([...numbers, num]);
    }
    setInput('');
  };

  const getFilteredNumbers = () => {
    if (filter === 'All') return numbers;
    if (filter === 'Even') return numbers.filter(n => n % 2 === 0);
    if (filter === 'Odd') return numbers.filter(n => n % 2 !== 0);
  };

  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={handleAddNumber}>+</button>
      <div>
        <button onClick={() => setFilter('All')}>Все</button>
        <button onClick={() => setFilter('Even')}>Четные</button>
        <button onClick={() => setFilter('Odd')}>Нечетные</button>
      </div>
      <div>
        {getFilteredNumbers().map((num, index) => (
          <span key={index}>{num}, </span>
        ))}
      </div>
    </div>
  );
};

export default NumberList;
