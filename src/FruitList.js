import React, { useState, useContext } from 'react';
import Fruit from './Fruit';
import FruitContext from './FruitContext';

const FruitList = () => {
  const [fruits, setFruits] = useContext(FruitContext);

  return (
    <div>
      {fruits.map((fruit) => (
        <Fruit name={fruit.name} price={fruit.price} key={fruit.id} />
      ))}
    </div>
  );
};

export default FruitList;
