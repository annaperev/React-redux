import { useState } from 'react';

function getRandomAnimal () {
  const animals =['bird', 'cat', 'dog', 'fish', 'hamster', 'rabbit', 'snake'];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  return <div>
    <button onClick={handleClick}>Add animals</button>
    <div>{animals}</div>
  </div>;   
}

export default App;
