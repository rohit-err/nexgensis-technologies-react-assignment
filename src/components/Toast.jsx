import { useEffect } from 'react';
import { CheckCircle, XCircle, Info, X } from 'lucide-react';

const icons = {
  success: CheckCircle,
  error: XCircle,
  info: Info,
};

export const Toast = ({ message, type = 'info', onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [onClose, duration]);

  const Icon = icons[type] || icons.info;
  const bgColors = {
    success: 'bg-emerald-500',
    error: 'bg-red-500',
    info: 'bg-blue-500',
  };

  return (
    <div className={`${bgColors[type]} text-white rounded-lg shadow-lg p-3 flex items-center gap-3 min-w-[280px] animate-in slide-in-from-right-full duration-300`}>
      <Icon className="h-5 w-5 flex-shrink-0" />
      <p className="text-sm font-medium flex-1">{message}</p>
      <button onClick={onClose} className="p-0.5 hover:bg-white/20 rounded">
        <X className="h-4 w-4" />
      </button>
    </div>
  );
};