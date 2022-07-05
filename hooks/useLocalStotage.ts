import { useState } from "react";

const useLocalStorage = (key: string, initialValue: any) => {
  const getStorage = () => {
    try {
      const serializedState = window.localStorage.getItem(key);
      if (serializedState === null) {
        return initialValue;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      console.log(err);
    }
  };

  const [storedValue, setStoredValue] = useState(getStorage());

  const setValue = (value: any) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.log(err);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
