import {  useReducer,  type PropsWithChildren } from "react";
import { GlobalContext } from "../Context/GlobalContext";
import { selectedProductReducer } from "../Reducer/selectedProductReducer";


export default function GlobalContextProvider({ children }: PropsWithChildren) {

  const [selectedProducts,dispatchSelectedProducts] = useReducer(selectedProductReducer,[])

  const value = {
    selectedProducts,
    dispatchSelectedProducts 
  };

  return <GlobalContext value={value}>{children}</GlobalContext>;
}
