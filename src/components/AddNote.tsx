import { openDB } from "./OpenIndexedDB";

export interface Note {
    id: number;
    text: string;
}

export const addNote = async (note: Note): Promise<number> => {
  const db = await openDB();
  const transaction = db.transaction(['notes'], 'readwrite');
  const store = transaction.objectStore('notes');
  const request = store.add(note);

  return new Promise((resolve, reject) => {
    request.onsuccess = (event: any) => {
      resolve(event.target.result as number);
    };

    request.onerror = (event: any) => {
      reject(event.target.error);
    };
  });
};