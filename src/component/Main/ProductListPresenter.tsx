import { useAllProductList } from "../../hooks/useAllProductList";
import { useCartContext } from "../../hooks/useCartContext";
import ProductList from "../Product/ProductList";

import style from "./productListPresenter.module.css";

export default function ProductListPresenter() {
  const { loading, productList: allProdctList } = useAllProductList();

  const { dispatchSelectedProducts } = useCartContext();

  if (loading) {
    return <h1>Loading...</h1>;
  }

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
