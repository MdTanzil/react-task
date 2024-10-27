/* eslint-disable react/prop-types */
import { useState } from "react";
import { DataContext } from "../context";
import demoData from "../data/demoData";
const DataContextProvider = ({ children }) => {
  const [data, setData] = useState(demoData);
  const [showAddTask, setShowAddTask] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [originalData, setOriginalData] = useState(data);

  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        showAddTask,
        setShowAddTask,
        editingTask,
        setEditingTask,
        originalData,
        setOriginalData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContextProvider;
