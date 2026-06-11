import style from "./product.module.css";
import Button from "../Button/Button";
import Plus from "reicon-react/icons/Plus";
import Minus2 from "reicon-react/icons/Minus2";
import type {
  ProductCardProps,
  ProductPresenterProps,
} from "./productCard.type";
import { memo, useState, type MouseEvent } from "react";
import { useNavigate } from "react-router";
import Spinner from "../LoadingSpinner/Spinner";

function ProductCardPresenter({
  quantity,
  onIncrease,
  onDecrease,
  product,
  orientation,
  onCardClick,
  isImageLoading,
  onImageLoad,
}: ProductPresenterProps) {
  return (
    <div
      onClick={onCardClick}
      className={` ${style.product} ${style[`product${orientation}`]}`}
    >
      <section className={`${style[`productImageContainer${orientation}`]}`}>
        {/* Img */}

        {isImageLoading && <Spinner />}

        <img
          className={`
            ${
              isImageLoading
                ? `${style.productImageHidden}`
                : `${style.productImageVisible}`
            }
              ${style.productImage}`}
          src={product.assets[0].image_url}
          onLoad={onImageLoad}
          onError={onImageLoad}
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

  const [isImageLoading, setIsImageLoading] = useState(true);

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

  function handleOnImageLoad() {
    setIsImageLoading(false);
  }

  return (
    <ProductCardPresenter
      quantity={quantity}
      onIncrease={handleIncrease}
      onDecrease={handleDecrease}
      product={product}
      orientation={orientation}
      onCardClick={handleOnClick}
      isImageLoading={isImageLoading}
      onImageLoad={handleOnImageLoad}
    />
  );
}

export default memo(ProductCard);
