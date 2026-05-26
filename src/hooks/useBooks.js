import { useState, useEffect, useMemo, useCallback } from 'react';
import { getBooks, createBook, updateBook, deleteBook } from '../services/bookApi';

export const useBooks = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedGenre, setSelectedGenre] = useState('');

  const fetchBooks = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getBooks();
      setBooks(response.data);
    } catch (err) {
      setError(err.message || 'Failed to fetch books');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBooks();
  }, [fetchBooks]);

  const addBook = useCallback(async (bookData) => {
    try {
      const response = await createBook(bookData);
      await fetchBooks();
      return { success: true, data: response.data };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }, [fetchBooks]);

  const editBook = useCallback(async (id, bookData) => {
    try {
      const response = await updateBook(id, bookData);
      await fetchBooks();
      return { success: true, data: response.data };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }, [fetchBooks]);

  const removeBook = useCallback(async (id) => {
    try {
      await deleteBook(id);
      await fetchBooks();
      return { success: true };
    } catch (err) {
      return { success: false, error: err.message };
    }
  }, [fetchBooks]);

  const uniqueGenres = useMemo(() => {
    const genres = new Set(books.map(book => book.genre).filter(Boolean));
    return ['All Genres', ...Array.from(genres).sort()];
  }, [books]);

  const filteredBooks = useMemo(() => {
    let result = books;
    
    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      result = result.filter(book =>
        book.title.toLowerCase().includes(term) ||
        book.author.toLowerCase().includes(term)
      );
    }
    
    if (selectedGenre && selectedGenre !== 'All Genres') {
      result = result.filter(book => book.genre === selectedGenre);
    }
    
    return result;
  }, [books, searchTerm, selectedGenre]);

  return {
    books: filteredBooks,
    allBooks: books,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    selectedGenre,
    setSelectedGenre,
    uniqueGenres,
    addBook,
    editBook,
    removeBook,
    refetch: fetchBooks,
  };
};