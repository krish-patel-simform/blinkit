import React, { createContext, type RefObject } from "react";
import type {
  SelectedProductReducerAction,
  SelectedProductReducerState,
} from "../Reducer/selectedProductReducer";

export type UpdatePurchaseQuantity = (quantity: number) => void;

export type GlobalContextType = {
  selectedProducts: SelectedProductReducerState;
  dispatchSelectedProducts: React.Dispatch<SelectedProductReducerAction>;
  searchRef: RefObject<HTMLInputElement | null>;
};

const GlobalContext = createContext<GlobalContextType | null>(null);

export { GlobalContext };
