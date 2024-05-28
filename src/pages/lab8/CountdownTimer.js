import React, { useState, useEffect } from 'react';

const CountdownTimer = () => {
  const [count, setCount] = useState(10);

  useEffect(() => {
    if (count === 0) return;
    const timer = setInterval(() => {
      setCount(prevCount => prevCount - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [count]);

  return <div>Обратный отсчет: {count}</div>;
};

export default CountdownTimer;