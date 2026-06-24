import { useEffect, useState, type ChangeEvent } from "react";
import logo from "../../assets/logo.svg";
import Button from "../Button/Button";
import Input from "../Input/Input";
import style from "./header.module.css";
import Search4 from "reicon-react/icons/Search4";
import CartShopping from "reicon-react/icons/CartShop";
import { useCartContext } from "../../hooks/useCartContext";
import CartModal from "../Modal/CartModal";
// import { useAbortController } from "../../hooks/useAbortController";
import { useNavigate, useSearchParams } from "react-router";
import { useLocation } from "react-router";
import { removeUserId } from "../../utils";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const [searchParam, setSearchParam] = useSearchParams();
  const { selectedProducts } = useCartContext();

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

  function handleSearchClick() {
    if (location.pathname !== "/s/products")
      navigate(`/s/products`, { replace: true });
  }

  function handleSearchOnChange(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setSearchParam(
      {
        search: value,
      },
      {
        replace: true,
      },
    );
  }

  function handleLogoutClick() {
    removeUserId();
    navigate("/login", { replace: true });
  }

  function handleLogoClick() {
    if (location.pathname !== "/") navigate("/");
  }

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
          <img src={logo} onClick={handleLogoClick} />
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
            onChange={handleSearchOnChange}
            onClick={handleSearchClick}
            value={searchParam.get("search") || ""}
          />

          <Button mode="Secondary" title="Logout" onClick={handleLogoutClick} />

          <Button
            leftIcon={<CartShopping />}
            mode="Primary"
            onClick={handleCartBtn}
            title={`${totalItem} Cart`}
          />
        </section>
      </div>
    </>
  );
}
