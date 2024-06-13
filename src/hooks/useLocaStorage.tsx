import { useEffect, useState } from "react";

export interface UseLocalStorageResult<T> {
  item: T;
  saveItem: (newItem: T) => void;
  error: boolean;
  loading: boolean;
}

export function useLocaStorage<T>(
  itemName: string,
  initialValue: T
): UseLocalStorageResult<T> {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    }, 2000);
  }, []);

  const saveItem = (newItem: T) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return { item, saveItem, error, loading };
}
