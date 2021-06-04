import './App.css';
import FruitList from './FruitList';
import Nav from './Nav';
import { FruitProvider } from './FruitContext';

function App() {
  return (
    <FruitProvider>
      <div className='App'>
        <Nav />
        <FruitList />
      </div>
    </FruitProvider>
  );
}

export default App;
