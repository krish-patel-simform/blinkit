import ProductCard from "./ProductCard";
import type { ProductListProps } from "./productList.type";

import style from "./productList.module.css";
import { memo } from "react";

function ProductList({
  productCategory,
  dispatchSelectedProducts,
}: ProductListProps) {
  return (
    <div className={`${style.productListContainer}`}>
      <h1 className={`${style.productListHeader}`}>{productCategory.title}</h1>
      <div className={`${style.productList}`}>
        {productCategory.products.map((product) => {
          return (
            <ProductCard
              orientation="Vertical"
              key={product.product_id}
              product={product}
              dispatchSelectedProducts={dispatchSelectedProducts}
            />
          );
        })}
      </div>
    </div>
  );
}

export default memo(ProductList);
