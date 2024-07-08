import './SearchBar.css'
import React from "react";
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

  return (
  <div className="search-bar">
    <form onSubmit={handleFormSubmit}>
      <label>Enter Search term</label>
      <input value={term} onChange={handleChange}/>
    </form>
  </div>);
}

export default SearchBar;