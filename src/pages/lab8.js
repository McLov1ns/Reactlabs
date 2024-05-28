import React from 'react';
import CountdownTimer from './lab8/CountdownTimer';
import IncrementalTimer from './lab8/IncrementalTimer';
import PrimeNumberGenerator from './lab8/PrimeNumberGenerator';
import TrafficLight from './lab8/TrafficLight';
import RevertString from './lab8/RevertString';

const Lab8 = () => {
  return (
    <div className="lab8">
      <h1>Lab 8</h1>
      <h2>Задача1</h2>
      <CountdownTimer />
      <h2>Таймер</h2>
      <IncrementalTimer />
      <h2>простые числа</h2>
      <PrimeNumberGenerator />
      <h2>Светофор</h2>
      <TrafficLight />
      <h2>Переворот</h2>
      <RevertString s="привет!" />
    </div>
  );
};

export default Lab8;
