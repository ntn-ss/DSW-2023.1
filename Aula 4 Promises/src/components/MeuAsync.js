import React, { useState, useEffect } from 'react';

const MeuAsync = () => {
  const [name, setName] = useState('');

  useEffect(() => {
    const changeData = async () => {
      setName('Nathan');
    };

    changeData();
  }, []);

  return (
        <div>
            <h1>{name}</h1>
        </div>
  )
};

export default MeuAsync;