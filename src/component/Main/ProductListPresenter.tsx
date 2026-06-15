import ErrorBoundary from "../../Errorboundary/ErrorBoundary";
import ErrorFallback from "../../Errorboundary/ErrorFallback";
import { useAllProductList } from "../../hooks/useAllProductList";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import ProductList from "../Product/ProductList";

import style from "./productListPresenter.module.css";

export default function ProductListPresenter() {
  const { loading, productList: allProdctList } = useAllProductList();

  const { dispatchSelectedProducts } = useGlobalContext();

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <ErrorBoundary fallback={ErrorFallback}>
      <div className={`${style.productListPresenter}`}>
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
    </ErrorBoundary>
  );
}
