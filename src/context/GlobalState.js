import React, { createContext, useReducer } from "react";
import { reducer } from "./AppReducer";
//initial state
const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

// create context
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatcher] = useReducer(reducer, initialState);

  function deleteTransaction(id) {
    dispatcher({ type: "DELETE_TRANSACTION", payload: id });
  }
  function addTransaction(transaction) {
    dispatcher({ type: "ADD_TRANSACTION", payload: transaction });
  }
  return (
    <GlobalContext.Provider
      value={{ transactions: state.transactions, deleteTransaction , addTransaction }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
