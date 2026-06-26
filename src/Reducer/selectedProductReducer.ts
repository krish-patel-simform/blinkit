import type { Product } from "../types";

export type SelectedProduct = Product & {
  quantity: number;
};

export type SelectedProductReducerState = SelectedProduct[];

export type SelectedProductReducerAction =
  | { type: "delete"; payload: { productId: number } }
  | {
      type: "increaseQuantity";
      payload: { product: Product };
    }
  | {
      type: "decreaseQuantity";
      payload: { product: Product };
    };

function selectedProductReducer(
  prevState: SelectedProductReducerState,
  action: SelectedProductReducerAction,
): SelectedProductReducerState {
  switch (action.type) {
    case "increaseQuantity": {
      const { product } = action.payload;

      const productIndex = prevState.findIndex(
        (p) => p.product_id === product.product_id,
      );

      if (productIndex < 0) {
        // new product
        const newProduct: SelectedProduct = { ...product, quantity: 1 };

        return [...prevState, newProduct];
      } else {
        const newProduct: SelectedProduct = {
          ...product,
          quantity: prevState[productIndex].quantity + 1,
        };

        const prefix = prevState.slice(0, productIndex);
        const sufix = prevState.slice(productIndex + 1);

        return [...prefix, newProduct, ...sufix];
      }
    }
    case "decreaseQuantity": {
      const { product } = action.payload;

      const productIndex = prevState.findIndex(
        (p) => p.product_id === product.product_id,
      );

      if (productIndex < 0) {
        // new product
        return prevState;
        // return [...prevState, newProduct];
      } else {
        const newProduct: SelectedProduct = {
          ...product,
          quantity: prevState[productIndex].quantity - 1,
        };
        const prefix = prevState.slice(0, productIndex);
        const sufix = prevState.slice(productIndex + 1);

        return [...prefix, newProduct, ...sufix];
      }
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
