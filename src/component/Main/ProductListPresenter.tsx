import { useSearchParams } from "react-router";
import { useState } from "react";
import { useAllProductList } from "../../hooks/useAllProductList";
import Button from "../Button/Button";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import ProductList from "../Product/ProductList";

import style from "./productListPresenter.module.css";
import { useMemo } from "react";
import { isValidCategory } from "../../utils";
export default function ProductListPresenter() {
  const [hasError, setHasError] = useState(false);

  const { loading, productList: allProdctList } = useAllProductList();

  const { dispatchSelectedProducts } = useGlobalContext();

  const [params] = useSearchParams();

  const filterProductList = useMemo(() => {
    const query = params.get("category") || "All";
    const isValidFilter = isValidCategory(query);

    if (isValidFilter && query === "All") {
      return allProdctList;
    } else if (isValidFilter) {
      return allProdctList.filter((list) => list.title === query);
    } else return allProdctList;
  }, [params, allProdctList]);

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
      {filterProductList.map((productCategory) => {
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
