import { BookOpen, Moon, Sun, Library } from 'lucide-react';

export const Navbar = ({ darkMode, toggleDarkMode, totalBooks, uniqueGenresCount }) => {
  return (
    <nav className="border-b border-slate-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm sticky top-0 z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <Library className="h-7 w-7 text-indigo-600 dark:text-indigo-400" strokeWidth={1.5} />
            <span className="font-serif text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
              Executive<span className="text-indigo-600 dark:text-indigo-400">Books</span>
            </span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden sm:flex gap-4 text-sm">
              <div className="flex items-center gap-1.5">
                <BookOpen className="h-4 w-4 text-slate-500" />
                <span className="font-medium text-slate-700 dark:text-slate-300">{totalBooks}</span>
                <span className="text-slate-500">titles</span>
              </div>
              <div className="text-slate-600 dark:text-slate-400">
                <span className="font-medium">{uniqueGenresCount}</span> genres
              </div>
            </div>
            
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? <Sun className="h-4 w-4 text-amber-500" /> : <Moon className="h-4 w-4 text-slate-600" />}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};