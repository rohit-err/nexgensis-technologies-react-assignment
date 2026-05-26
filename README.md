# Book Management System

A modern, responsive Book Management System built with React, Vite, and Tailwind CSS. Features full CRUD operations, real-time search, genre filtering, and a polished dark mode UI.

---

## 🚀 Features

- **Full CRUD Operations**: Create, read, update, and delete books
- **Search**: Real-time search by title or author
- **Filter**: Filter books by genre
- **Dark Mode**: Toggle between light and dark themes
- **Responsive Design**: Works seamlessly on mobile, tablet, and desktop
- **Form Validation**: Comprehensive validation with error messages
- **Loading States**: Skeleton loaders for better UX
- **Error Handling**: User-friendly error messages with retry functionality
- **Toast Notifications**: Success/error feedback for all operations

---

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Axios** - HTTP client
- **MockAPI.io** - Mock REST API
- **Lucide React** - Icons

---

## 📂 Project Structure

```
├── src/
│   ├── components/       # Reusable UI components
│   ├── hooks/           # Custom React hooks
│   ├── pages/           # Page components
│   ├── services/        # API service layer
│   ├── App.jsx          # Root component
│   └── main.jsx         # Entry point
├── public/              # Static assets
└── package.json         # Dependencies
```

---

## ⚡ Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd nexgensis-technologies-react-assignment
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

---

## 🌐 Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click "New Project" and import your repository
4. Vercel will auto-detect Vite settings
5. Click "Deploy"

### Deploy to Netlify

1. Push your code to GitHub
2. Go to [netlify.com](https://netlify.com) and sign in
3. Click "Add new site" → "Import an existing project"
4. Select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy"

---

## 📝 API Configuration

The app uses MockAPI.io for the backend. The API endpoint is configured in `src/services/bookApi.js`:

```javascript
const API_BASE_URL = 'https://6a15efd991ff9a63de08ff83.mockapi.io';
```

---

## 🎯 Assignment Requirements

✅ View books with title, author, genre, and publication year  
✅ Add new books through a form  
✅ Edit existing books  
✅ Delete books with confirmation  
✅ Search by title or author  
✅ Filter by genre  
✅ Clean, maintainable code with proper component structure  
✅ API integration with MockAPI  
✅ Loading states  
✅ Error handling  
✅ Professional styling with Tailwind CSS  
✅ Fully deployed and functional  

---

## 📄 License

MIT License - Created for NexGensis Technologies React Assignment
