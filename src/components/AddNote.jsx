import React, { useState } from 'react';
import { saveNote } from '../utils/storage';

// Why I chose useState + this submit handler: simple form state management
function AddNote() {
  // State to handle the note's title, content, saving status, and error handling
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isSaving, setIsSaving] = useState(false);  // Track saving process
  const [error, setError] = useState(null);  // To handle any error during saving

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission
    setIsSaving(true); // Set saving state to true to show user feedback (loading state)
    setError(null); // Reset error state before starting the save

    try {
      // Attempt to save the note. If it fails, an error will be thrown
      saveNote({ title, content });
      setTitle(''); // Reset title after successful save
      setContent(''); // Reset content after successful save
    } catch (err) {
      setError('Failed to save note.'); // Set error message if saving fails
    }

    setIsSaving(false); // Reset saving state after the process is complete
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
      {/* Input field for the note title */}
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)} // Update title state on input change
        className="bg-[#222630] px-4 py-3 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
        required
      />
      
      {/* Textarea for the note content */}
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)} // Update content state on input change
        className="bg-[#222630] px-4 py-3 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040] h-40"
        required
      ></textarea>

      {/* Show spinner while saving */}
      {isSaving && <p>// Why show spinner here: user feedback during save</p>}

      {/* Show error message if saving fails */}
      {error && <p className="text-red-500">// Why display error banner: localStorage may fail</p>}

      {/* Save button to submit the form */}
      <button type="submit" className="save-button">Save Note</button>
    </form>
  );
}

export default AddNote;
