import { useReducer, useRef, useState, type PropsWithChildren } from "react";
import {
  GlobalContext,
  type GlobalContextType,
} from "../Context/GlobalContext";
import { selectedProductReducer } from "../Reducer/selectedProductReducer";
import type { Filters } from "../types";

export default function GlobalContextProvider({ children }: PropsWithChildren) {
  const [selectedProducts, dispatchSelectedProducts] = useReducer(
    selectedProductReducer,
    [],
  );
  const [currentFilter, setCurrentFilter] = useState<Filters>("All");

  const searchRef = useRef<HTMLInputElement>(null);

  const value: GlobalContextType = {
    selectedProducts,
    dispatchSelectedProducts,
    searchRef,
    currentFilter,
    setCurrentFilter,
  };

  return <GlobalContext value={value}>{children}</GlobalContext>;
}
