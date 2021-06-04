import { useState, createContext } from 'react';

export const FruitContext = createContext();

export const FruitProvider = (props) => {
  const [fruits, setFruits] = useState([
    {
      name: 'Watermelon',
      price: '$3',
      id: 1,
    },
    {
      name: 'Kiwi',
      price: '$5',
      id: 12,
    },
    {
      name: 'Nashi',
      price: '$4',
      id: 123,
    },
  ]);
  return (
    <FruitContext.Provider value={[fruits, setFruits]}>
      {props.children}
    </FruitContext.Provider>
  );
};
