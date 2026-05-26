export const Loader = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {[...Array(6)].map((_, i) => (
        <div key={i} className="bg-white dark:bg-zinc-900 rounded-xl border border-slate-200 dark:border-zinc-800 p-5 animate-pulse">
          <div className="flex justify-between">
            <div className="space-y-2 flex-1">
              <div className="h-5 bg-slate-200 dark:bg-zinc-800 rounded w-3/4"></div>
              <div className="h-4 bg-slate-200 dark:bg-zinc-800 rounded w-1/2"></div>
            </div>
            <div className="h-8 w-8 bg-slate-200 dark:bg-zinc-800 rounded-full"></div>
          </div>
          <div className="mt-3 flex gap-2">
            <div className="h-5 w-16 bg-slate-200 dark:bg-zinc-800 rounded"></div>
            <div className="h-5 w-12 bg-slate-200 dark:bg-zinc-800 rounded"></div>
          </div>
        </div>
      ))}
    </div>
  );
};