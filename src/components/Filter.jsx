import { Filter as FilterIcon } from 'lucide-react';

export const Filter = ({ genres, selectedGenre, onSelectGenre }) => {
  return (
    <div className="relative">
      <div className="flex items-center gap-2">
        <FilterIcon className="h-4 w-4 text-slate-400" />
        <select
          value={selectedGenre}
          onChange={(e) => onSelectGenre(e.target.value)}
          className="pl-2 pr-7 py-1.5 bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 rounded-lg text-sm text-slate-700 dark:text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 appearance-none cursor-pointer"
        >
          {genres.map(genre => (
            <option key={genre} value={genre}>{genre}</option>
          ))}
        </select>
      </div>
    </div>
  );
};