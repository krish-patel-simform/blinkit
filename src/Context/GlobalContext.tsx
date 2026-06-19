import React, {
  createContext,
  type Dispatch,
  type RefObject,
  type SetStateAction,
} from "react";
import type {
  SelectedProductReducerAction,
  SelectedProductReducerState,
} from "../Reducer/selectedProductReducer";
import type { Filters } from "../types";

export type UpdatePurchaseQuantity = (quantity: number) => void;

export type GlobalContextType = {
  selectedProducts: SelectedProductReducerState;
  dispatchSelectedProducts: React.Dispatch<SelectedProductReducerAction>;
  searchRef: RefObject<HTMLInputElement | null>;
  currentFilter: Filters;
  setCurrentFilter: Dispatch<SetStateAction<Filters>>;
};

const GlobalContext = createContext<GlobalContextType | null>(null);

export { GlobalContext };
