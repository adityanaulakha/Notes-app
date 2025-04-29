import React, { useState } from 'react';
import AddNote from './components/AddNote';
import NotesList from './components/NotesList';
import './styles/App.css';

// Why this nav approach for simplicity: easy toggle with conditional rendering
function App() {
  const [page, setPage] = useState('add'); // State to manage current page ('add' or 'view')

  return (
    <div className="min-h-screen p-4 bg-black font-sans">
      {/* App Header */}
      <h1 className='text-5xl text-center font-bold underline text-[#7d2ae8]'>Notes App</h1>

      {/* Navigation Bar */}
      <nav className="flex justify-center gap-4 m-6">
        {/* Button to switch to Add Notes page */}
        <button onClick={() => setPage('add')} className="main-buttons">
          Add Notes
        </button>

        {/* Button to switch to View Notes page */}
        <button onClick={() => setPage('view')} className="main-buttons">
          View Notes
        </button>
      </nav>

      {/* Conditional Rendering based on the 'page' state */}
      {page === 'add' ? <AddNote /> : <NotesList />}
    </div>
  );
}

export default App;
