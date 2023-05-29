import { useState, useEffect } from 'react';

const MinhaPromise = () => {
  const [texto, setTexto] = useState('Texto Vazio');

  useEffect(() => {
    const minhaPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        const myInt = Math.floor(Math.random() * 10) + 1;
        return myInt % 2 === 0 ? resolve('Deu certo.') : reject('Deu errado.');
      }, 3000);
    });

    minhaPromise
      .then((msg) => {
        setTexto(msg);
      })
      .catch((error) => {
        setTexto(error);
      });
  }, []);

  return <h1>{texto}</h1>;
};

export default MinhaPromise;
