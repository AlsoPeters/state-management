import React, { useContext } from 'react';
import { FruitContext } from './FruitContext';
const Nav = () => {
  const [fruit, setFruit] = useContext(FruitContext);

  return (
    <div>
      <h3>AlsoPeters</h3>
      <p>List of Fruits: {fruit.length} </p>
    </div>
  );
};

export default Nav;
