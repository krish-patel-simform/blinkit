import { useContext } from "react";
import { GlobalContext } from "../Context/GlobalContext";

function useGlobalContext() {
  const context =  useContext(GlobalContext);

  if(!context)
    throw new Error("No Global Context is exist")

  return context;
}

export { useGlobalContext };
