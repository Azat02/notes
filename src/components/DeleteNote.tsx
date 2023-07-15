import { openDB } from "./OpenIndexedDB";

export const deleteNote = async (noteId: number): Promise<void> => {
    const db = await openDB();
    const transaction = db.transaction(['notes'], 'readwrite');
    const store = transaction.objectStore('notes');
    store.delete(noteId);
  };