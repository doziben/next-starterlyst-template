import { useState } from "react";

function useIndexedDB<T>(
  dbName: string,
  storeName: string
): [T | undefined, (value: T, valueKey?: string) => void] {
  const [storedValue, setStoredValue] = useState<T>();

  const openDB = () => {
    return new Promise<IDBDatabase>((resolve, reject) => {
      const request = window.indexedDB.open(dbName);

      request.onerror = () => reject("Failed to open database");

      request.onsuccess = () => resolve(request.result);

      request.onupgradeneeded = (event) => {
        const db = request.result;
        db.createObjectStore(storeName);
      };
    });
  };

  const setValue = async (value: T, valueKey?: string) => {
    try {
      const db = await openDB();
      const transaction = db.transaction(storeName, "readwrite");
      const objectStore = transaction.objectStore(storeName);
      const request = objectStore.put(value, valueKey ?? 1);

      request.onerror = () => console.error("Error writing to IndexedDB");

      request.onsuccess = () => setStoredValue(value);
    } catch (error) {
      console.error(error);
    }
  };

  const getValue = async () => {
    try {
      const db = await openDB();
      const transaction = db.transaction(storeName, "readonly");
      const objectStore = transaction.objectStore(storeName);
      const request = objectStore.get(1);

      request.onerror = () => console.error("Error reading from IndexedDB");

      request.onsuccess = (event) => {
        const target = event.target as any;
        setStoredValue(target.result);
      };
    } catch (error) {
      console.error(error);
    }
  };

  getValue();

  return [storedValue, setValue];
}

export default useIndexedDB;
