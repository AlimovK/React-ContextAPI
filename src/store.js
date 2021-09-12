import React, { useState, createContext, useEffect } from "react";

export const PhotoContext = createContext();

const Store = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <PhotoContext.Provider value={[data, setData]}>
      {children}
    </PhotoContext.Provider>
  );
};
export default Store;
