import React, { createContext } from "react";
import type {
  SelectedProductReducerAction,
  SelectedProductReducerState,
} from "../Reducer/selectedProductReducer";

export type UpdatePurchaseQuantity = (quantity: number) => void;

type CartContextType = {
  selectedProducts: SelectedProductReducerState;
  dispatchSelectedProducts: React.Dispatch<SelectedProductReducerAction>;
};

const CartContext = createContext<CartContextType | null>(null);

export { CartContext };
