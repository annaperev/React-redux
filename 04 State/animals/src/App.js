function App() {
  const handleClick = () => {
    console.log('clicked');
  };

  return <div>
    <button onClick={handleClick}>Add animals</button>
  </div>;   
}

export default App;
