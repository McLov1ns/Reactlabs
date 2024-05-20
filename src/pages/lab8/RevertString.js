import React, { useState, useEffect } from 'react';

const RevertString = ({ s }) => {
  const [str, setStr] = useState(s);

  useEffect(() => {
    const timer = setInterval(() => {
      setStr(prevStr => prevStr.slice(-1) + prevStr.slice(0, -1));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <div>{str}</div>;
};

export default RevertString;
