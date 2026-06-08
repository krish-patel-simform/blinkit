import type { Product } from "../types";

export type SelectedProduct = Product & {
  quantity: number;
};

export type SelectedProductReducerState = SelectedProduct[];

export type SelectedProductReducerAction =
  | { type: "insert"; payload: { newSelectedProduct: SelectedProduct } }
  | { type: "delete"; payload: { productId: number } }
  | {
      type: "increaseQuantity";
      payload: { productId: number; product: SelectedProduct };
    }
  | {
      type: "decreaseQuantity";
      payload: { productId: number; product: SelectedProduct };
    };

function selectedProductReducer(
  prevState: SelectedProductReducerState,
  action: SelectedProductReducerAction,
):SelectedProductReducerState {
  switch (action.type) {
    case "insert": {
      const { newSelectedProduct } = action.payload;
      return [...prevState, newSelectedProduct];
    }
    case "increaseQuantity":
    case "decreaseQuantity": {
      const { productId, product } = action.payload;
      const productIndex = prevState.findIndex(
        (product) => product.product_id === productId,
      );

      const prefix = prevState.slice(0, productIndex);
      const sufix = prevState.slice(productIndex + 1);
      return [...prefix, product, ...sufix];
    }
    case "delete": {
      const { productId } = action.payload;
      return prevState.filter((product) => product.product_id !== productId);
    }
    default: {
      return prevState;
    }
  }
}

export { selectedProductReducer };
