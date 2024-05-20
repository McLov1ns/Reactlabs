import React from 'react';

const Temperature = ({ t }) => {
  const tempStyle = {
    color: t < 0 ? 'blue' : 'red'
  };
  return <div style={tempStyle}>{t}</div>;
};

export default Temperature;
