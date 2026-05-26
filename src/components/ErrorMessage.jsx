import { AlertCircle, RefreshCw } from 'lucide-react';

export const ErrorMessage = ({ message, onRetry }) => {
  return (
    <div className="bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-800 rounded-xl p-5 flex items-center justify-between">
      <div className="flex items-center gap-3">
        <AlertCircle className="h-5 w-5 text-red-600 dark:text-red-400" />
        <p className="text-sm text-red-700 dark:text-red-300">{message}</p>
      </div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="flex items-center gap-1.5 text-sm font-medium text-red-700 dark:text-red-300 hover:text-red-800"
        >
          <RefreshCw className="h-3.5 w-3.5" />
          Retry
        </button>
      )}
    </div>
  );
};