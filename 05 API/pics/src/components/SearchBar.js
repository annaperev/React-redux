// ({ onSubmit }) - this is destructuring the props object to get the onSubmit function
function SearchBar({ onSubmit }) {

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit('dogs');
  }

  return <div>
    <form onSubmit={handleFormSubmit}>
      <input/>
    </form>
  </div>;
}

export default SearchBar;