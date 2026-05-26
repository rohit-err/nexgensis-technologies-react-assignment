import { BookCard } from './BookCard';
import { BookOpen, FilterX } from 'lucide-react';

export const BookList = ({ books, onEdit, onDelete, isLoading }) => {
  if (isLoading) return null;
  
  if (books.length === 0) {
    return (
      <div className="text-center py-16 border-2 border-dashed border-slate-200 dark:border-zinc-800 rounded-2xl">
        <BookOpen className="h-12 w-12 mx-auto text-slate-400 mb-3" strokeWidth={1.2} />
        <h3 className="text-lg font-medium text-slate-700 dark:text-slate-300">No books found</h3>
        <p className="text-sm text-slate-500 mt-1">Try adjusting your search or filter criteria</p>
      </div>
    );
  }
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {books.map((book) => (
        <BookCard
          key={book.id}
          book={book}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};