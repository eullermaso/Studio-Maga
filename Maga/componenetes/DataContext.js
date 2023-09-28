// DataContext.js
import React, { createContext, useContext, useState } from "react";

const DataContext = createContext();

const products = [""];

export function DataProvider({ children }) {
  const [data, setData] = useState("Nenhum Agendamento");

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
