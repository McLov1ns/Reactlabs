import React, { useState } from 'react';

const ToggleButton = () => {
  const [isRed, setIsRed] = useState(true);

  const handleClick = () => {
    setIsRed(!isRed);
  };

  const buttonStyle = {
    backgroundColor: isRed ? 'red' : 'green',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    cursor: 'pointer'
  };

  return <button style={buttonStyle} onClick={handleClick}>Нажми меня!</button>;
};

export default ToggleButton;
