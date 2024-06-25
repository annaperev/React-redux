import searchImages from './api';
import SearchBar from './components/SearchBar';

function App() {
  const handleSubmit = async (term) => {
    console.log('Do a search for:', term);
    const results = await searchImages(term);
    console.log(results);
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
    </div>
    )
}

export default App;
