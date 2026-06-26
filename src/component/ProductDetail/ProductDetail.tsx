import Button from "../Button/Button";
import style from "./productDetail.module.css";
import type { ProductDetailProps } from "./productDetail.type";
import Plus from "reicon-react/icons/Plus";
import Minus2 from "reicon-react/icons/Minus2";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import type { MouseEvent } from "react";

const WHY_US_DATA = [
  {
    imageURL:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/10_minute_delivery.png",
    title: "Round The Clock Delivery",
    desc: "Get items delivered to your doorstep from dark stores near you, whenever you need them.",
  },
  {
    imageURL:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/Best_Prices_Offers.png",
    title: "Best Prices & Offers",
    desc: "Best price destination with offers directly from the manufacturers.",
  },
  {
    imageURL:
      "https://cdn.grofers.com/cdn-cgi/image/f=auto,fit=scale-down,q=70,metadata=none,w=90/assets/web/blinkit-promises/Wide_Assortment.png",
    title: "Wide Assortment",
    desc: "Choose from 30,000+ products across food, personal care, household & other categories.",
  },
];

export default function ProductDetail({ product }: ProductDetailProps) {
  const { dispatchSelectedProducts, selectedProducts } = useGlobalContext();

  const selectedProduct = selectedProducts.find(
    (p) => p.product_id === product.product_id,
  );

  let quantity = 0;

  if (selectedProduct) {
    quantity = selectedProduct.quantity;
  }

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

  return (
    <div className={`${style.productDetailContainer}`}>
      <section>
        <p>{product.name}</p>
        <p>{product.unit}</p>
        <p>₹{product.price}</p>

        <Button
          mode="Primary"
          title={quantity.toString()}
          leftIcon={<Minus2 onClick={handleDecrease} />}
          rightIcon={<Plus onClick={handleIncrease} />}
        />
      </section>

      <section>
        <WhyUs />
      </section>
    </div>
  );
}

const WhyUs = () => {
  return (
    <div className={`${style.whyUsContainer}`}>
      <h6>Why shop from blinkit</h6>
      {WHY_US_DATA.map((data, index) => {
        return (
          <div key={index} className={`${style.whyUsItem}`}>
            <section className={`${style.whyUsItemSection}`}>
              <img
                className={`${style.whyUsItemImage}`}
                src={data.imageURL}
                alt={data.title}
                height={"100%"}
              />
            </section>

            <section className={`${style.whyUsItemSection}`}>
              <h6>{data.title}</h6>
              <p>{data.desc}</p>
            </section>
          </div>
        );
      })}
    </div>
  );
};
