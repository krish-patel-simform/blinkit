import type React from "react";
import type { ProductCategory } from "../../types";
import type { SelectedProductReducerAction } from "../../Reducer/selectedProductReducer";

export type ProductListProps = {
  productCategory: ProductCategory;
  dispatchSelectedProducts: React.Dispatch<SelectedProductReducerAction>;
};
