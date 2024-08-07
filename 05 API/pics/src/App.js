import { useState } from 'react';
import searchImages from './api';
import ImageList from './components/ImageList';
import SearchBar from './components/SearchBar';
import React from 'react';

function App() {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const results = await searchImages(term);

    setImages(results);
  }

  return (
    <div>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images}/>
    </div>
    )
}

export default App;
