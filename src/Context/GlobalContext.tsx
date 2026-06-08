import React, { createContext } from "react";
import type { SelectedProductReducerAction, SelectedProductReducerState } from "../Reducer/selectedProductReducer";

export type UpdatePurchaseQuantity = (quantity: number) => void;

type GlobalContextType = {
  selectedProducts : SelectedProductReducerState,
  dispatchSelectedProducts : React.Dispatch<SelectedProductReducerAction>
}

const GlobalContext = createContext<GlobalContextType|null>(null);

export { GlobalContext };
