import { useReducer, useRef, type PropsWithChildren } from "react";
import {
  GlobalContext,
  type GlobalContextType,
} from "../Context/GlobalContext";
import { selectedProductReducer } from "../Reducer/selectedProductReducer";

export default function GlobalContextProvider({ children }: PropsWithChildren) {
  const [selectedProducts, dispatchSelectedProducts] = useReducer(
    selectedProductReducer,
    [],
  );

  const searchRef = useRef<HTMLInputElement>(null);

  const value: GlobalContextType = {
    selectedProducts,
    dispatchSelectedProducts,
    searchRef,
  };

  return <GlobalContext value={value}>{children}</GlobalContext>;
}
