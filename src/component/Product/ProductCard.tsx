import style from "./product.module.css";
import Button from "../Button/Button";
import Plus from "reicon-react/icons/Plus";
import Minus2 from "reicon-react/icons/Minus2";
import type {
  ProductCardProps,
  ProductPresenterProps,
} from "./productCard.type";
import { memo, type MouseEvent } from "react";
import { useNavigate } from "react-router";

function ProductCardPresenter({
  quantity,
  onIncrease,
  onDecrease,
  product,
  orientation,
  onCardClick,
}: ProductPresenterProps) {
  return (
    <div
      onClick={onCardClick}
      className={` ${style.product} ${style[`product${orientation}`]}`}
    >
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
  const navigate = useNavigate();

  function handleIncrease(e: MouseEvent<SVGSVGElement>) {
    e.stopPropagation();
    dispatchSelectedProducts({
      type: "increaseQuantity",
      payload: { product: product },
    });
  }

  function handleDecrease(e: MouseEvent<SVGSVGElement>) {
    e.stopPropagation();
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

  function handleOnClick() {
    navigate(`/${product.product_id}`);
  }

  return (
    <ProductCardPresenter
      quantity={quantity}
      onIncrease={handleIncrease}
      onDecrease={handleDecrease}
      product={product}
      orientation={orientation}
      onCardClick={handleOnClick}
    />
  );
}

export default memo(ProductCard);
