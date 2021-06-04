import { useState, useContext } from 'react';
import { FruitContext } from './FruitContext';

export const AddMovie = () => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [fruit, setfruit] = useContext(FruitContext);

  const updateName = (e) => {
    setName(e.target.value);
  };

  const updatePrice = (e) => {
    setPrice(e.target.value);
  };

  const addFruit = (e) => {
    e.preventDefault();
    setfruit((prevFruit) => [...prevFruit, { name: name, price: price }]);
  };

  return (
    <form onSubmit={addFruit}>
      <input
        type='text'
        placeholder='Name'
        name='name'
        value={name}
        onChange={updateName}
      />
      <br />
      <input
        type='text'
        placeholder='Price'
        name='price'
        value={price}
        onChange={updatePrice}
      />
      <button>Submit</button>
    </form>
  );
};

export default AddMovie;
