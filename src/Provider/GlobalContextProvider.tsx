import { useReducer, type PropsWithChildren } from "react";
import { selectedProductReducer } from "../Reducer/selectedProductReducer";
import { CartContext } from "../Context/GlobalContext";

export default function CartContextProvider({ children }: PropsWithChildren) {
  const [selectedProducts, dispatchSelectedProducts] = useReducer(
    selectedProductReducer,
    [],
  );

  const value = {
    selectedProducts,
    dispatchSelectedProducts,
  };

  return <CartContext value={value}>{children}</CartContext>;
}
