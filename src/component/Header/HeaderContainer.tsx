import { useEffect, useState, type ChangeEvent } from "react";
import logo from "../../assets/logo.svg";
import Button from "../Button/Button";
import Input from "../Input/Input";
import style from "./header.module.css";
import Search4 from "reicon-react/icons/Search4";
import CartShopping from "reicon-react/icons/CartShop";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import CartModal from "../Modal/CartModal";
import { useNavigate, useSearchParams } from "react-router";
import { useLocation } from "react-router";
import { removeUserId } from "../../utils";
const FILTER_OPTION = [
  "All",
  "Dairy, Bread & Eggs",
  "Snacks & Munchies",
  "Cold Drinks & Juices",
];

export default function Header() {
  const { searchRef } = useGlobalContext();

  const navigate = useNavigate();
  const location = useLocation();
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  const [searchParam, setSearchParam] = useSearchParams();

  const { selectedProducts } = useGlobalContext();

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

  const totalItem = selectedProducts.reduce(
    (acc, product) => acc + product.quantity,
    0,
  );

  function handleSerachClick() {
    if (location.pathname !== "/s/products")
      navigate(`/s/products`, { replace: true });
  }

  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
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
    if (location.pathname !== "/") navigate("/", { replace: true });
  }

  function handleFilterChange(e: ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    setSearchParam(
      {
        category: value,
      },
      {
        replace: true,
      },
    );
  }

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
          <select onChange={handleFilterChange}>
            {FILTER_OPTION.map((filter) => (
              <option
                selected={filter === searchParam.get("category")}
                value={filter}
              >
                {filter}
              </option>
            ))}
          </select>
        </section>
        <section className={`${style.headerActions}`}>
          <Input
            ref={searchRef}
            id="search"
            leftIcon={<Search4 />}
            name="search"
            type="search"
            placeholder="Search milk.."
            containerStyleClass={style.headerInputAction}
            onChange={handleOnChange}
            onFocus={handleSerachClick}
            value={searchParam.get("search") || ""}
          />

          <Button mode="Secondary" title="Logout" onClick={handleLogoutClick} />

          <Button
            leftIcon={<CartShopping />}
            mode="Primary"
            onClick={handleCartBtn}
            title={` ${totalItem} Cart`}
          />
        </section>
      </div>
    </>
  );
}
