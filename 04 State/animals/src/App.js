import { useState } from 'react';
import AnimalShow from './AnimalShow';
import './App.css';

function getRandomAnimal () {
  const animals =['bird', 'cat', 'dog', 'cow', 'gator', 'horse'];

  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, getRandomAnimal()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <AnimalShow type={animal} key={index} />;
  });

  return (
  <div className='app'>
    <button onClick={handleClick}>Add animals</button>
    <div className='animal-list'>{renderedAnimals}</div>
  </div
  >);   
}

export default App;
