import { useState } from "react";

// ({ onSubmit }) - this is destructuring the props object to get the onSubmit function
function SearchBar({ onSubmit }) {
  const [term, setTerm] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(term)
  }

  const handleChange = (event) => {
    setTerm(event.target.value);
  }

  return <div>
    <form onSubmit={handleFormSubmit}>
      <input value={term} onChange={handleChange}/>
    </form>
  </div>;
}

export default SearchBar;