import { createContext } from "react";
import type { Product } from "../types";

const initProduct: Product = {
  assets: [],
  brand: "Brand Name",
  name: "Product Name",
  price: 0,
  unit: "Unit",
  unit_price: 0,
  unit_type: "Unit Type",
  product_id: 1,
};

export const ProductContext = createContext<Product>(initProduct);
