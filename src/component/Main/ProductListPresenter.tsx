import { useSearchParams } from "react-router";
import { useAllProductList } from "../../hooks/useAllProductList";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import ProductList from "../Product/ProductList";

import style from "./productListPresenter.module.css";
import { useMemo } from "react";
import { isValidCategory } from "../../utils";
export default function ProductListPresenter() {
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

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={`${style.productListPresenter}`}>
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
