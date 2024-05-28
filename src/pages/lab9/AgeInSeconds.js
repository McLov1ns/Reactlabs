import React, { useState, useEffect } from 'react';

const AgeInSeconds = () => {
  const [birthDate, setBirthDate] = useState('');
  const [secondsLived, setSecondsLived] = useState(0);

  useEffect(() => {
    let interval;
    if (birthDate) {
      const birthTime = new Date(birthDate).getTime();
      interval = setInterval(() => {
        setSecondsLived(Math.floor((Date.now() - birthTime) / 1000));
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [birthDate]);

  return (
    <div>
      <input
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
      />
      {birthDate && <p>You have lived: {secondsLived} seconds.</p>}
    </div>
  );
};

export default AgeInSeconds;
