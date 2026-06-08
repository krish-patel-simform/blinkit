import type React from "react";
import type { Product } from "../../types";
import type { SelectedProductReducerAction } from "../../Reducer/selectedProductReducer";

export type QuantityAction =
  | {
      type: "increase";
      // payload: {
      //   product : Product,
      //   dispatchSelectedProducts: React.Dispatch<SelectedProductReducerAction>;
      // };
    }
  | {
      type: "decrease";
      // payload: {
      //   product : Product,
      //   dispatchSelectedProducts: React.Dispatch<SelectedProductReducerAction>;
      // };
    };

type CardOrientation = "Vertical" |"Horizontal"


export type ProductCardProps = {
  product: Product;
  dispatchSelectedProducts: React.Dispatch<SelectedProductReducerAction>;
  orientation: CardOrientation;
  initState? : number;
};

export type ProductPresenterProps = {
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  product: Product;
  orientation: CardOrientation
};
