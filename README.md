# Book Management System

A production-grade, highly responsive single-page application (SPA) built with **React**, **Vite**, and **Tailwind CSS**. It delivers a seamless user experience for managing a collection of books, backed by a mock REST API using **JSON Server**.

---

## 🚀 Features

- **Full CRUD Operations**: Create, read, update, and delete books in real time.
- **Dynamic Search & Filtering**: Real-time searching by title or author, coupled with category filtering by genre.
- **Custom Hooks**: Clean state orchestration and side-effect separation using the `useBooks` custom hook.
- **Professional Form Validation**: Robust validation for titles, authors, genres, and page numbers with intuitive error states.
- **Polished UI & Micro-interactions**: Sleek modern design featuring modal confirmations, responsive grids, load states, and toast notifications.

---

## 🛠️ Tech Stack

- **Frontend Core**: React 18 & Vite
- **Styling**: Tailwind CSS & Autoprefixer
- **Icons**: Lucide React
- **API Client**: Axios (configured with a central baseURL and request timeouts)
- **Database/Mock API**: JSON Server (watching `db.json`)
- **Process Orchestration**: Concurrently (runs the Vite dev server and JSON Server on one terminal command)

---

## 📂 Project Structure

```text
├── db.json                     # Local mock database for JSON Server
├── index.html                  # HTML entrypoint
├── package.json                # Project dependencies and script runner configurations
├── tailwind.config.js          # Tailwind CSS style overrides and theme configuration
├── vite.config.js              # Vite configuration
└── src/
    ├── App.jsx                 # Application layout and global toast orchestrator
    ├── index.css               # Base Tailwind imports and customized scrollbars/animations
    ├── main.jsx                # DOM bootstrapping and React entrypoint
    ├── components/             # Reusable UI components
    │   ├── BookCard.jsx        # Book details grid item
    │   ├── BookForm.jsx        # Unified add/edit validated form
    │   ├── BookList.jsx        # Renders the card collections
    │   ├── ConfirmModal.jsx    # Clean dialog for critical actions
    │   ├── ErrorMessage.jsx    # User-friendly API failure feedback
    │   ├── Filter.jsx          # Genre filter selection
    │   ├── Loader.jsx          # Interactive CSS loading spinners
    │   ├── Navbar.jsx          # Top branding and header bar
    │   ├── SearchBar.jsx       # Real-time search query input
    │   └── Toast.jsx           # Self-dismissing micro-notification banners
    ├── hooks/
    │   └── useBooks.js         # Domain-specific state controller and data fetcher
    ├── pages/
    │   └── Home.jsx            # Parent dashboard managing views, search state, and API triggers
    └── services/
        └── bookApi.js          # Unified Axios client and CRUD endpoints configuration
```

---

## ⚡ Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### Installation & Run

1. Install all required dependencies:
   ```bash
   npm install
   ```

2. Spin up the Vite Dev Server and JSON Server simultaneously:
   ```bash
   npm run dev
   ```

The application will launch at `http://localhost:5173`, and the mock REST server will be active at `http://localhost:5001`.
