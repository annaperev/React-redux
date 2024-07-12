import { useState } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';

function App() {
    const [books, setBooks] = useState([]);

    const deleteBookById = (id) => {
        console.log('need to delete book with id:', id);
        const updatedBooks = books.filter((book) => {
            return book.id !== id
        });

        setBooks(updatedBooks);
    };

    const createBook = (title) => {
        console.log('need to create a book with title:', title);
        const updatedBook = [
            ...books,
            { 
                id: Math.round(Math.random()* 9999), 
                title }
        ];
        
        setBooks(updatedBook);
    };

    return <div className="app">
        <BookList books={books} onDelete={deleteBookById} />
        <BookCreate onCreate={createBook} />
    </div>;
}

export default App;