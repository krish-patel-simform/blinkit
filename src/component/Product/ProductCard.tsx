import style from "./product.module.css";
import Button from "../Button/Button";
import Plus from "reicon-react/icons/Plus";
import Minus2 from "reicon-react/icons/Minus2";
import type {
  ProductCardProps,
  ProductPresenterProps,
} from "./productCard.type";
import { memo } from "react";

function ProductCardPresenter({
  quantity,
  onIncrease,
  onDecrease,
  product,
  orientation,
}: ProductPresenterProps) {
  return (
    <div className={` ${style.product} ${style[`product${orientation}`]}`}>
      <section>
        {/* Img */}
        <img
          className={`${style.productImage}`}
          src={product.assets[0].image_url}
        />
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

function ProductCard({
  product,
  dispatchSelectedProducts,
  orientation,
  quantity,
}: ProductCardProps) {
  console.log("Product card re render");

  function handleIncrease() {
    dispatchSelectedProducts({
      type: "increaseQuantity",
      payload: { product: product },
    });
  }
  function handleDecrease() {
    const newQuantity = quantity - 1;

    if (newQuantity === 0) {
      dispatchSelectedProducts({
        type: "delete",
        payload: {
          productId: product.product_id,
        },
      });
    } else if (newQuantity < 0) return;
    else {
      dispatchSelectedProducts({
        type: "decreaseQuantity",
        payload: { product },
      });
    }
  }

  return (
    <ProductCardPresenter
      quantity={quantity}
      onIncrease={handleIncrease}
      onDecrease={handleDecrease}
      product={product}
      orientation={orientation}
    />
  );
}

export default memo(ProductCard);
