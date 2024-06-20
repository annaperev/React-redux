import searchImages from './api';
import SearchBar from './components/SearchBar';

function App() {
  const handleSubmit = (term) => {
    console.log('Do a search for:', term);
    searchImages(term);
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
    )
}

export default App;
