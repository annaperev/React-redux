import { useState, useEffect } from 'react';
import BookCreate from './components/BookCreate';
import BookList from './components/BookList';
import axios from 'axios';

function App() {
    const [books, setBooks] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3002/books');
        setBooks(response.data);
    }

    useEffect(() => {
        fetchBooks();
    }, []);

    const editBookById = (id, newTitle) => {
        const updatedBooks = books.map((book) => {
            if (book.id === id) {
                return { ...book, title: newTitle }
            }
            return book;
        });

        setBooks(updatedBooks);
    }

    const deleteBookById = (id) => {
        console.log('need to delete book with id:', id);
        const updatedBooks = books.filter((book) => {
            return book.id !== id
        });

        setBooks(updatedBooks);
    };

    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3002/books', { title });

        console.log(response);
        const updatedBook = [
            ...books,
            response.data
        ];
        
        setBooks(updatedBook);
    };

    return <div className="app">
        <h1>Reading List</h1>
        <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
        <BookCreate onCreate={createBook} />
    </div>;
}

export default App;