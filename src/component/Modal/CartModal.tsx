import style from "./cartModal.module.css";

import type { CartModal } from "./cartModal.type";
import Button from "../Button/Button";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import ProductCard from "../Product/ProductCard";
import ArrowLeft4 from "reicon-react/icons/ArrowLeft4";
import CartShopping from "reicon-react/icons/CartShopping";
import Note from "reicon-react/icons/Note";
import Scooter from "reicon-react/icons/Scooter";
import ShoppingBag from "reicon-react/icons/ShoppingBag";
import { useState } from "react";
import { fa } from "zod/locales";
// import { handlePayment } from "../../Stripe/Razorpay";

const HANDLING_FEE = 2;
const DELIVERY_FEE = 10;

export default function CartModal({ handleOnClose }: CartModal) {
  const { selectedProducts, dispatchSelectedProducts } = useGlobalContext();

  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);

  const totalItemPrice = selectedProducts.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0,
  );

  async function callPaymentGateWay() {
    if (selectedProducts.length > 0) {
      const items = [
        { name: "Handling charge", price: 2, quantity: 1 },
        { name: "Delivery charge", price: 10, quantity: 1 },
        ...selectedProducts,
      ];
      setIsPaymentProcessing(true);
      try {
        const response = await fetch("http://localhost:4000/checkout-session", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: totalItemPrice, items: items }),
        });

        console.log(response.status);

        const { url } = await response.json();
        window.location.href = url;
      } catch (error) {
        console.log("Error in the CartModal" + error);
      } finally {
        setIsPaymentProcessing(false);
      }
    } else {
      alert("Please select the product");
    }
  }

  return (
    <div className={`${style.cartModalContainer}`}>
      <div className={`${style.cartModal}`}>
        <section className={`${style.cartModalHeader}`}>
          <span className={`${style.cartFlex}`}>
            <ArrowLeft4
              onClick={handleOnClose}
              className={`${style.cartIcon}`}
            />
            <h6>My Cart</h6>
          </span>

          <Button mode="Primary" title="Share" leftIcon={<CartShopping />} />
        </section>

        <section className={`${style.cartBody}`}>
          <article className={`${style.cartBodySection}`}>
            {selectedProducts.map((product) => {
              return (
                <ProductCard
                  key={product.product_id}
                  product={product}
                  orientation="Horizontal"
                  quantity={product.quantity}
                  dispatchSelectedProducts={dispatchSelectedProducts}
                />
              );
            })}
          </article>

          <article className={`${style.cartBodySection}`}>
            <h6>Bill Details</h6>
            <div className={`${style.cartBodyBill}`}>
              <span>
                <Note /> Items total
              </span>
              <span>₹ {totalItemPrice}</span>
            </div>
            <div className={`${style.cartBodyBill}`}>
              <span>
                <Scooter /> Delivery charge
              </span>
              <span>₹ {DELIVERY_FEE}</span>
            </div>
            <div className={`${style.cartBodyBill}`}>
              <span>
                <ShoppingBag /> Handling charge
              </span>
              <span>₹ {HANDLING_FEE}</span>
            </div>
            <div className={`${style.cartBodyBill}`}>
              <span>Grand Total</span>
              <span>₹ {totalItemPrice + DELIVERY_FEE + HANDLING_FEE}</span>
            </div>
          </article>
        </section>

        <Button
          mode="Primary"
          title={
            isPaymentProcessing
              ? "Processing payment gateway"
              : "Proceed to payment"
          }
          onClick={callPaymentGateWay}
        />
      </div>
    </div>
  );
}
