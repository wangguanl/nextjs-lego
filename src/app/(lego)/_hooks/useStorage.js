import { useState, useEffect } from 'react';

export default function useLocalStorage(key, initialValue = {}) {
  const [value, setValue] = useState(initialValue);

  const updateValue = newValue => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  useEffect(() => {
    const storedValue = localStorage.getItem(key);
    try {
      setValue(JSON.parse(storedValue));
    } catch (e) {
      updateValue({});
    }
  }, [key]);

  return [value, updateValue];
}
