// ({ onSubmit }) - this is destructuring the props object to get the onSubmit functiongit 
function SearchBar({ onSubmit }) {

  const handleClick = () => {
    console.log('I need to tell parent to do a search!');
    onSubmit('dogs');
  }

  return <div>
    <input></input>
      <button onClick={handleClick}>Click me</button>
    
  </div>;
}

export default SearchBar;