import React, { useState, useEffect } from 'react';

const TrafficLight = () => {
  const [activeColorIndex, setActiveColorIndex] = useState(0);
  const colors = ['red', 'yellow', 'green'];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveColorIndex(prevIndex => (prevIndex + 1) % colors.length);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const lightStyle = (color, index) => ({
    width: '100px',
    height: '100px',
    backgroundColor: index === activeColorIndex ? color : 'black',
    borderRadius: '50%',
    margin: '10px auto',
  });

  return (
    <div style={{ textAlign: 'center' }}>
      <div style={lightStyle(colors[0], 0)}></div>
      <div style={lightStyle(colors[1 || 3], 1)}></div>
      <div style={lightStyle(colors[2], 2)}></div>
    </div>
  );
};

export default TrafficLight;
