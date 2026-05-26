import { AlertTriangle } from 'lucide-react';

export const ConfirmModal = ({ isOpen, onClose, onConfirm, title = "Confirm Delete", message = "Are you sure you want to delete this item? This action cannot be undone." }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl w-full max-w-md shadow-2xl border border-slate-200 dark:border-zinc-800">
        <div className="p-5">
          <div className="flex items-center gap-3 text-amber-600 dark:text-amber-500 mb-3">
            <AlertTriangle className="h-6 w-6" />
            <h3 className="font-serif text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
          </div>
          <p className="text-slate-600 dark:text-slate-400 text-sm">{message}</p>
        </div>
        <div className="flex gap-3 p-5 pt-0">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 border border-slate-300 dark:border-zinc-700 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-zinc-800"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};