import React, { useState, useEffect } from 'react';

const PrimeNumberGenerator = () => {
  const [primes, setPrimes] = useState([]);
  
  useEffect(() => {
    const isPrime = num => {
      for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
      }
      return num > 1;
    };

    const generateNextPrime = () => {
      let num = primes.length === 0 ? 2 : primes[primes.length - 1] + 1;
      while (!isPrime(num)) num++;
      setPrimes([...primes, num]);
    };

    const timer = setInterval(generateNextPrime, 1000);
    return () => clearInterval(timer);
  }, [primes]);

  return <div>{primes.join(', ')}</div>;
};

export default PrimeNumberGenerator;
