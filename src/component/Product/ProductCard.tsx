import style from "./product.module.css";
import Button from "../Button/Button";
import Plus from "reicon-react/icons/Plus";
import Minus2 from "reicon-react/icons/Minus2";
// import { useReducer } from "react";
import type {
  ProductCardProps,
  ProductPresenterProps,
  // QuantityAction,
} from "./productCard.type";
import type { SelectedProduct } from "../../Reducer/selectedProductReducer";
import { usePurchasedQuantity } from "../../hooks/usePurchasedQuantity";

function ProductCardPresenter({
  quantity,
  onIncrease,
  onDecrease,
  product,
  orientation
}: ProductPresenterProps) {
  return (
    <div className={` ${style.product} ${style[`product${orientation}`]}`}>
      <section>
        {/* Img */}
        <img className={`${style.productImage}`} src={product.assets[0].image_url} />
      </section>
      <section className={`${style.productInfo}`}>
        <p className={`${style.productInfoBold}`}>{product.name}</p>
        <p className={`${style.productInfoSecondary}`}>{product.unit}</p>
      </section>
      <section className={`${style[`productActions${orientation}`]}`}>
        <p>₹{product.price}</p>
        <Button
          mode="Primary"
          title={quantity.toString()}
          rightIcon={<Plus onClick={onIncrease} />}
          leftIcon={<Minus2 onClick={onDecrease} />}
        />
      </section>
    </div>
  );
}

// function quantityReducer(prevState: number, action: QuantityAction) {
//   switch (action.type) {
//     case "increase": {
//       return prevState + 1;
//     }

//     case "decrease": {
//       return Math.max(prevState - 1, 0);
//     }
//     default:
//       return prevState;
//   }
// }

function ProductCard({ product, dispatchSelectedProducts,orientation ,
  // initState = 0
}: ProductCardProps) {
  // const [quantity, dispatchQuantity] = useReducer(quantityReducer, initState);

  const quantity = usePurchasedQuantity(product.product_id)

  function handleIncrease() {
    const newQuantity = quantity + 1;

    // dispatchQuantity({ type: "increase" });

    const newSelectedProduct: SelectedProduct = {
      ...product,
      quantity: newQuantity,
    };

    if (newQuantity === 1) {
      dispatchSelectedProducts({
        type: "insert",
        payload: { newSelectedProduct },
      });
    } else {
      dispatchSelectedProducts({
        type: "increaseQuantity",
        payload: {
          productId: product.product_id,
          product: newSelectedProduct,
        },
      });
    }
  }
  function handleDecrease() {
    const newQuantity = quantity - 1;

    // dispatchQuantity({
    //   type: "decrease",
    // });

    if (newQuantity < 0) return;

    const newSelectedProduct: SelectedProduct = {
      ...product,
      quantity: newQuantity,
    };

    if (newQuantity === 0) {
      dispatchSelectedProducts({
        type: "delete",
        payload: {
          productId: product.product_id,
        },
      });
    } else {
      dispatchSelectedProducts({
        type: "decreaseQuantity",
        payload: {
          productId: product.product_id,
          product: newSelectedProduct,
        },
      });
    }
  }

  return (
    <ProductCardPresenter
      quantity={quantity}
      onIncrease={handleIncrease}
      onDecrease={handleDecrease}
      product={product}
      orientation = {orientation}
    />
  );
}

export default ProductCard;
