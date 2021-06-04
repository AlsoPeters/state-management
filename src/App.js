import './App.css';
import Nav from './Nav';
import FruitList from './FruitList';
import AddMovie from './AddMovie';
import { FruitProvider } from './FruitContext';

function App() {
  return (
    <FruitProvider>
      <div className='App'>
        <Nav />
        <AddMovie />
        <FruitList />
      </div>
    </FruitProvider>
  );
}

export default App;
