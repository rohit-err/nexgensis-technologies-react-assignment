import { Edit2, Trash2, BookMarked } from 'lucide-react';

export const BookCard = ({ book, onEdit, onDelete }) => {
  return (
    <div className="group relative bg-white dark:bg-zinc-900 rounded-xl border border-slate-200 dark:border-zinc-800 hover:border-slate-300 dark:hover:border-zinc-700 transition-all duration-200 hover:shadow-md overflow-hidden">
      <div className="p-5">
        <div className="flex justify-between items-start gap-3">
          <div className="flex-1 min-w-0">
            <h3 className="font-serif text-lg font-semibold text-slate-900 dark:text-white truncate">
              {book.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-0.5">by {book.author}</p>
          </div>
          <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
            <button
              onClick={() => onEdit(book)}
              className="p-1.5 rounded-md hover:bg-slate-100 dark:hover:bg-zinc-800 text-slate-500"
              aria-label="Edit book"
            >
              <Edit2 className="h-4 w-4" />
            </button>
            <button
              onClick={() => onDelete(book.id)}
              className="p-1.5 rounded-md hover:bg-red-50 dark:hover:bg-red-950/30 text-slate-500 hover:text-red-600"
              aria-label="Delete book"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>
        
        <div className="flex flex-wrap items-center gap-2 mt-3">
          <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-indigo-50 dark:bg-indigo-950/40 text-indigo-700 dark:text-indigo-300 text-xs font-medium">
            <BookMarked className="h-3 w-3" />
            {book.genre}
          </span>
          <span className="text-xs text-slate-500 dark:text-slate-500 border-l border-slate-200 dark:border-zinc-800 pl-2">
            {book.publicationYear}
          </span>
        </div>
      </div>
    </div>
  );
};