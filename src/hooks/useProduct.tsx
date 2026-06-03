import { useContext } from "react";
import { ProductContext } from "../Context/ProductContext";

function useProduct()
{
    return useContext(ProductContext)
}

export {useProduct}