import { useAllProductList } from "../../hooks/useAllProductList";
import { useGlobalContext } from "../../hooks/useGlobalContext";
import ProductList from "../Product/ProductList";

import style from "./productListPresenter.module.css";

export default function ProductListPresenter() {
  const allProdctList = useAllProductList();

  const { dispatchSelectedProducts } = useGlobalContext();

  return (
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
  );
}
