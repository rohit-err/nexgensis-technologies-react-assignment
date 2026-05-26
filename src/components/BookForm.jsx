import { useState, useEffect } from 'react';
import { X, Save } from 'lucide-react';

const GENRES = [
  'Fiction', 'Non-Fiction', 'Science Fiction', 'Fantasy', 'Mystery',
  'Biography', 'Self-Help', 'Historical Fiction', 'Thriller', 'Romance'
];

export const BookForm = ({ isOpen, onClose, onSubmit, initialBook = null }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    publicationYear: new Date().getFullYear(),
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialBook) {
      setFormData({
        title: initialBook.title || '',
        author: initialBook.author || '',
        genre: initialBook.genre || '',
        publicationYear: initialBook.publicationYear || new Date().getFullYear(),
      });
    } else {
      setFormData({
        title: '',
        author: '',
        genre: '',
        publicationYear: new Date().getFullYear(),
      });
    }
    setErrors({});
  }, [initialBook, isOpen]);

  const validate = () => {
    const newErrors = {};
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.author.trim()) newErrors.author = 'Author is required';
    if (!formData.genre) newErrors.genre = 'Genre is required';
    const year = Number(formData.publicationYear);
    const currentYear = new Date().getFullYear();
    if (!formData.publicationYear || isNaN(year) || year < 1000 || year > currentYear) {
      newErrors.publicationYear = `Year must be between 1000 and ${currentYear}`;
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setIsSubmitting(true);
    try {
      await onSubmit({
        ...formData,
        publicationYear: Number(formData.publicationYear),
      });
      onClose();
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-zinc-900 rounded-2xl w-full max-w-md shadow-2xl border border-slate-200 dark:border-zinc-800">
        <div className="flex justify-between items-center p-5 border-b border-slate-200 dark:border-zinc-800">
          <h2 className="font-serif text-xl font-semibold text-slate-900 dark:text-white">
            {initialBook ? 'Edit Book' : 'Add New Book'}
          </h2>
          <button onClick={onClose} className="p-1 rounded-md hover:bg-slate-100 dark:hover:bg-zinc-800">
            <X className="h-5 w-5 text-slate-500" />
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-5 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-slate-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
            {errors.title && <p className="text-xs text-red-500 mt-1">{errors.title}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Author</label>
            <input
              type="text"
              name="author"
              value={formData.author}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-slate-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
            />
            {errors.author && <p className="text-xs text-red-500 mt-1">{errors.author}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Genre</label>
            <select
              name="genre"
              value={formData.genre}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-slate-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
            >
              <option value="">Select genre</option>
              {GENRES.map(genre => (
                <option key={genre} value={genre}>{genre}</option>
              ))}
            </select>
            {errors.genre && <p className="text-xs text-red-500 mt-1">{errors.genre}</p>}
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">Publication Year</label>
            <input
              type="number"
              name="publicationYear"
              value={formData.publicationYear}
              onChange={handleChange}
              min="1000"
              max={new Date().getFullYear()}
              className="w-full px-3 py-2 border border-slate-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-zinc-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-indigo-500"
            />
            {errors.publicationYear && <p className="text-xs text-red-500 mt-1">{errors.publicationYear}</p>}
          </div>
          
          <div className="flex gap-3 pt-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-slate-300 dark:border-zinc-700 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-zinc-800"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium disabled:opacity-70"
            >
              <Save className="h-4 w-4" />
              {isSubmitting ? 'Saving...' : initialBook ? 'Update' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};