/* eslint-disable react/prop-types */
import { useState } from "react";
import { DataContext } from "../context";
import demoData from "../data/demoData";
const DataContextProvider = ({ children }) => {
  const [data, setData] = useState(demoData);
  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
