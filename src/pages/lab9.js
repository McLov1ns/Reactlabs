import React from 'react';
import CitySelector from './lab9/SelectBox';
import Calculator from './lab9/Calculator';
import BaseConverter from './lab9/BaseConverter';
import AgeInSeconds from './lab9/AgeInSeconds';
import NumberList from './lab9/NumberList';
import RegistrationForm from './lab9/RegistrationForm';
import ProfileForm from './lab9/ProfileForm';
const Lab9 = () => {
    return (
      <div className="lab9">
        <h1>Lab 9</h1>
        <h2>Задача1</h2>
        <CitySelector />
        <h2>Калькулятор</h2>
        <Calculator/>
        <h2>Калькулятор систем счисления</h2>
        <BaseConverter/>
        <h2>Время в секундах</h2>
        <AgeInSeconds/>
        <h2></h2>
        <NumberList/>
        <h2></h2>
        <RegistrationForm/>
        <h2></h2>
        <ProfileForm/>
      </div>
    );
  };
  
  export default Lab9;