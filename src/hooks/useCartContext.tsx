import { useContext } from "react";
import { CartContext } from "../Context/GlobalContext";

function useCartContext() {
  const context = useContext(CartContext);

  if (!context) throw new Error("No Global Context is exist");

  return context;
}

export { useCartContext };
