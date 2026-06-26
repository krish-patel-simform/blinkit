import { useState } from "react";
import { useAllProductList } from "../../hooks/useAllProductList";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import Button from "../Button/Button";
import ProductList from "../Product/ProductList";

import style from "./productListPresenter.module.css";

export default function ProductListPresenter() {
  const [hasError, setHasError] = useState(false);

  const { loading, productList: allProdctList } = useAllProductList();

  const { dispatchSelectedProducts } = useGlobalContext();

  function handleGenerateErrorClick() {
    setHasError(true);
  }

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (hasError) throw new Error("This is just for testing purpose");

  return (
    <div className={`${style.productListPresenter}`}>
      <div>
        <Button
          mode="Primary"
          title="Generate Error"
          onClick={handleGenerateErrorClick}
        />
      </div>
      {allProdctList.map((productCategory) => {
        return (
          <ProductList
            key={productCategory.title}
            productCategory={productCategory}
            dispatchSelectedProducts={dispatchSelectedProducts}
          />
        );
      })}
    </div>
  );
}
