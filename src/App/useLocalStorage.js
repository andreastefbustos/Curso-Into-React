import React, { useState, useEffect } from "react";

function useLocalStorage(itemName, initialValue) {
    const [sincronizedItem, setSincronizedItem] = useState(true);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [item, setItem] = useState(initialValue);
    
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
          }
  
          setItem(parsedItem);
          setLoading(false);
          setSincronizedItem(true);
        } catch(error) {
          setError(error);
        }
      }, 1000);
    }, [sincronizedItem]);
    
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      } catch(error) {
        setError(error);
      }
    };

    const sincronize = () => {
      setLoading(true);
      setSincronizedItem(false);
    };
  
    return {
      item,
      saveItem,
      loading,
      error,
      setSincronizedItem,
    };
}

export { useLocalStorage };