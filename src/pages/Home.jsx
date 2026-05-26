import { useState } from 'react';
import { Plus } from 'lucide-react';
import { useBooks } from '../hooks/useBooks';
import { Navbar } from '../components/Navbar';
import { SearchBar } from '../components/SearchBar';
import { Filter } from '../components/Filter';
import { BookList } from '../components/BookList';
import { BookForm } from '../components/BookForm';
import { ConfirmModal } from '../components/ConfirmModal';
import { Loader } from '../components/Loader';
import { ErrorMessage } from '../components/ErrorMessage';
import { Toast } from '../components/Toast';

export const Home = ({ darkMode, toggleDarkMode }) => {
  const {
    books,
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
    refetch,
  } = useBooks();

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingBook, setEditingBook] = useState(null);
  const [deleteConfirm, setDeleteConfirm] = useState(null);
  const [toast, setToast] = useState(null);

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const handleAddBook = async (bookData) => {
    const result = await addBook(bookData);
    if (result.success) {
      showToast(`"${bookData.title}" added successfully`, 'success');
    } else {
      showToast(result.error || 'Failed to add book', 'error');
    }
  };

  const handleEditBook = async (bookData) => {
    const result = await editBook(editingBook.id, bookData);
    if (result.success) {
      showToast(`"${bookData.title}" updated successfully`, 'success');
      setEditingBook(null);
    } else {
      showToast(result.error || 'Failed to update book', 'error');
    }
  };

  const handleDeleteBook = async () => {
    const result = await removeBook(deleteConfirm);
    if (result.success) {
      showToast('Book deleted successfully', 'success');
    } else {
      showToast(result.error || 'Failed to delete book', 'error');
    }
    setDeleteConfirm(null);
  };

  const openEditForm = (book) => {
    setEditingBook(book);
    setIsFormOpen(true);
  };

  const openAddForm = () => {
    setEditingBook(null);
    setIsFormOpen(true);
  };

  const uniqueGenresCount = uniqueGenres.length - 1;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-zinc-950">
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
        totalBooks={books.length}
        uniqueGenresCount={uniqueGenresCount}
      />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div className="flex-1 max-w-md">
            <SearchBar value={searchTerm} onChange={setSearchTerm} />
          </div>
          <div className="flex items-center gap-3">
            <Filter
              genres={uniqueGenres}
              selectedGenre={selectedGenre}
              onSelectGenre={setSelectedGenre}
            />
            <button
              onClick={openAddForm}
              className="flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium text-sm transition-colors"
            >
              <Plus className="h-4 w-4" />
              Add Book
            </button>
          </div>
        </div>

        {error && (
          <div className="mb-6">
            <ErrorMessage message={error} onRetry={refetch} />
          </div>
        )}

        {loading ? (
          <Loader />
        ) : (
          <BookList
            books={books}
            onEdit={openEditForm}
            onDelete={(id) => setDeleteConfirm(id)}
            isLoading={loading}
          />
        )}
      </main>

      <BookForm
        isOpen={isFormOpen}
        onClose={() => {
          setIsFormOpen(false);
          setEditingBook(null);
        }}
        onSubmit={editingBook ? handleEditBook : handleAddBook}
        initialBook={editingBook}
      />

      <ConfirmModal
        isOpen={!!deleteConfirm}
        onClose={() => setDeleteConfirm(null)}
        onConfirm={handleDeleteBook}
        title="Delete Book"
        message="Are you sure you want to delete this book? This action cannot be undone."
      />

      {toast && (
        <div className="fixed bottom-4 right-4 z-50">
          <Toast
            message={toast.message}
            type={toast.type}
            onClose={() => setToast(null)}
          />
        </div>
      )}
    </div>
  );
};