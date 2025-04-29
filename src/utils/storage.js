const STORAGE_KEY = 'custom_notes';

export const getNotes = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveNote = (note) => {
  const notes = getNotes();
  const updated = [...notes, note];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
};

export const deleteNote = (indexToDelete) => {
    const existing = JSON.parse(localStorage.getItem('custom_notes')) || [];
    const updated = existing.filter((_, index) => index !== indexToDelete);
    localStorage.setItem('custom_notes', JSON.stringify(updated));
  };
  