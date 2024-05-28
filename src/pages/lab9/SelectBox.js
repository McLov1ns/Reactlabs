import React, { useState } from 'react';

const CitySelector = () => {
  const [selectedCity, setSelectedCity] = useState('');

  const handleChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div>
      <select value={selectedCity} onChange={handleChange}>
        <option value="">Выберите город</option>
        <option value="Rio">Рио</option>
        <option value="New York">Нью Йорк</option>
        <option value="Paris">Москва</option>
      </select>
      {selectedCity !== 'Rio' && selectedCity && (
        <p>Нет, это не Рио-де-Жанейро!</p>
      )}
    </div>
  );
};

export default CitySelector;
