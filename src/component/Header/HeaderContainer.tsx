import { useEffect, useState } from "react";
import logo from "../../assets/logo.svg";
import Button from "../Button/Button";
import Input from "../Input/Input";
import style from "./header.module.css";
import Search4 from "reicon-react/icons/Search4";
import CartShopping from "reicon-react/icons/CartShop";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import CartModal from "../Modal/CartModal";

export default function Header() {
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  useEffect(() => {
    if (isCartModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "scroll";
    }
  }, [isCartModalOpen]);

  function handleCartBtn() {
    setIsCartModalOpen(true);
  }

  function handleOnClose() {
    setIsCartModalOpen(false);
  }

  function handleOnSuccess() {
    console.log("Your is placed");
  }

  const { selectedProducts } = useGlobalContext();

  const totalItem = selectedProducts.reduce(
    (acc, product) => acc + product.quantity,
    0,
  );

  return (
    <>
      {isCartModalOpen && (
        <CartModal
          handleOnClose={handleOnClose}
          handleOnSuccess={handleOnSuccess}
        />
      )}
      <div className={`${style.header}`}>
        <section className={`${style.headerLogo}`}>
          {/* Logo */}
          <img src={logo} />
        </section>
        <section className={`${style.headerLocation}`}>
          {/* location and set Location */}
          <p>Dilevery in 8 minutes</p>
          <p>address from location</p>
        </section>
        <section className={`${style.headerActions}`}>
          <Input
            leftIcon={<Search4 />}
            name="search"
            type="search"
            placeholder="Search milk.."
            containerStyleClass={style.headerInputAction}
          />

          <Button mode="Secondary" title="Login" />

          <Button
            leftIcon={<CartShopping />}
            mode="Primary"
            onClick={handleCartBtn}
            title={`${totalItem} Cart`}
          />
        </section>
      </div>
      )
    </>
  );
}
