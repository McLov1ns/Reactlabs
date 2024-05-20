import React, { useState, useEffect } from 'react';

const IncrementalTimer = () => {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (running) {
      timer = setInterval(() => {
        setCount(prevCount => prevCount + 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [running]);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setRunning(true)}>▶</button>
    </div>
  );
};

export default IncrementalTimer;
