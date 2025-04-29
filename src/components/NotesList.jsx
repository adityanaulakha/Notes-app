import React, { useEffect, useState } from 'react';
import { getNotes, deleteNote } from '../utils/storage';

// Why useEffect to sync storage → state: fetch once on mount
function NotesList() {
  // State to store the list of notes
  const [notes, setNotes] = useState([]);

  // useEffect hook to fetch notes once when the component mounts
  useEffect(() => {
    setNotes(getNotes()); // Fetch notes from localStorage
  }, []); // Empty dependency array ensures it runs only once on mount

  // Handler to delete a note at a specific index
  const handleDelete = (index) => {
    deleteNote(index); // Delete the note from storage
    setNotes(getNotes()); // Refresh the notes state after deletion
  };

  // Handler to clear all notes from localStorage
  const handleClearNotes = () => {
    localStorage.removeItem('custom_notes'); // Clear all notes from localStorage
    setNotes([]); // Clear the notes state
  };

  return (
    <div className="max-w-xl mx-auto space-y-4 text-white">
      {/* Display message if no notes exist */}
      {notes.length === 0 && <p>No Notes Created.</p>}
      
      {/* Show 'Clear All Notes' button if there are notes */}
      {notes.length > 0 && (
        <button
          onClick={handleClearNotes} // Calls the clear notes handler
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          Clear All Notes
        </button>
      )}

      {/* Map through the notes and display each one */}
      {notes.map((note, index) => (
        <div
          key={index}
          className="p-4 border rounded bg-[#222630] shadow flex justify-between items-start border-[#2B3040] transition-all duration-200 hover:border-[#596A95]"
        >
          <div>
            <h3 className="font-bold text-lg text-white">{note.title}</h3>
            <p className="text-gray-300">{note.content.slice(0, 100)}...</p>
          </div>

          {/* Delete button */}
          <button
            onClick={() => handleDelete(index)} // Deletes the specific note
            className="noselect flex items-center justify-center bg-[#e62222] text-white font-bold rounded-[5px] shadow-md w-[120px] h-[35px] relative overflow-hidden transition-all duration-200 hover:bg-[#3e3e3e] focus:outline-none"
          >
            <span className="text transform translate-x-[25px]">Delete</span>
            {/* Icon for the delete button */}
            <span className="icon absolute left-0 top-1/2 transform -translate-y-1/2 border-l-[1px] border-[#3e3e3e] w-[30px] h-[30px] flex items-center justify-center transition-all duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
              </svg>
            </span>
          </button>
        </div>
      ))}
    </div>
  );
}

export default NotesList;
