import { Note } from "./AddNote";
import { openDB } from "./OpenIndexedDB";

export const getNotes = async (): Promise<Note[]> => {
    const db = await openDB();
    const transaction = db.transaction(['notes'], 'readonly');
    const store = transaction.objectStore('notes');
    const request = store.getAll();
  
    return new Promise((resolve, reject) => {
      request.onsuccess = (event: any) => {
        resolve(event.target.result as Note[]);
      };
  
      request.onerror = (event: any) => {
        reject(event.target.error);
      };
    });
  };