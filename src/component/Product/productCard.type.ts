import type React from "react";
import type { Product } from "../../types";
import type { SelectedProductReducerAction } from "../../Reducer/selectedProductReducer";
import type { MouseEvent } from "react";

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

type CardOrientation = "Vertical" | "Horizontal";

export type ProductCardProps = {
  product: Product;
  dispatchSelectedProducts: React.Dispatch<SelectedProductReducerAction>;
  orientation: CardOrientation;
  quantity: number;
};

export type ProductPresenterProps = {
  quantity: number;
  onIncrease: (e: MouseEvent<SVGSVGElement>) => void;
  onDecrease: (e: MouseEvent<SVGSVGElement>) => void;
  product: Product;
  orientation: CardOrientation;
  onCardClick: () => void;
};
