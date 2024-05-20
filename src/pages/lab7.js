import React from 'react';
import Square from './lab7/Square';
import OnlyEven from './lab7/OnlyEven';
import Temperature from './lab7/Temperature';
import ToggleButton from './lab7/ToggleButton';

const Lab7 = () => {
  return (
    <div className="lab7">
      <h1>React Components</h1>
      <h2>Задача1</h2>
      <Square n={3} />
      <h2>Задача2</h2>
      <OnlyEven arr={[14, 5, 6, 12, 21, 2, 4]} />
      <h2>Задача3</h2>
      <Temperature t={451} />
      <h2>Задача4</h2>
      <ToggleButton />
    </div>
  );
}
export default Lab7;
