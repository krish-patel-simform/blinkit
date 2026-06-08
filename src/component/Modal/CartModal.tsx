import style from "./cartModal.module.css";

import type { CartModal } from "./cartModal.type";
import Button from "../Button/Button";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import ProductCard from "../Product/ProductCard";
import ArrowLeft4 from "reicon-react/icons/ArrowLeft4";
import CartShopping from "reicon-react/icons/CartShopping";
import Note from "reicon-react/icons/Note";
import Dollar2 from "reicon-react/icons/Dollar2";
import Scooter from "reicon-react/icons/Scooter";
import ShoppingBag from "reicon-react/icons/ShoppingBag";

const HANDLING_FEE = 2;
const DELIVERY_FEE = 10;

export default function CartModal({ handleOnClose }: CartModal) {
  const { selectedProducts, dispatchSelectedProducts } = useGlobalContext();

  const totalItemPrice = selectedProducts.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0,
  );

  return (
    <div className={`${style.cartModalContainer}`}>
      <div  className={`${style.cartModal}`}>
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
                  initState={product.quantity}
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
              <span>
                {totalItemPrice} <Dollar2 />
              </span>
            </div>
            <div className={`${style.cartBodyBill}`}>
              <span>
                <Scooter /> Delivery charge
              </span>
              <span>
                {DELIVERY_FEE} <Dollar2 />
              </span>
            </div>
            <div className={`${style.cartBodyBill}`}>
              <span>
                <ShoppingBag /> Handling charge
              </span>
              <span>
                {HANDLING_FEE} <Dollar2 />
              </span>
            </div>
            <div className={`${style.cartBodyBill}`}>
              <span>Grand Total</span>
              <span>
                {totalItemPrice + DELIVERY_FEE + HANDLING_FEE}
                <Dollar2 />
              </span>
            </div>
          </article>
        </section>

        <Button mode="Primary" title="Proceed to payment" />
      </div>
    </div>
  );
}
