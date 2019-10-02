import React, { useState } from "react";

const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
       const item = localStorage.getItem(key);
       const setValue = (value) => {
           setStoredValue(value);
          localStorage.setItem(key, JSON.stringify(value));
       }
       return item ? JSON.parse(item) : initialValue;
    });
    return [storedValue,setValue];


};

export default useLocalStorage;