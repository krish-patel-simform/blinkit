import ProductCard from "./ProductCard";
import type { ProductListProps } from "./productList.type";

import style from "./productList.module.css";
import { useGlobalContext } from "../../hooks/useGlobalContext";

function ProductList({
  productCategory,
  dispatchSelectedProducts,
}: ProductListProps) {
  const { selectedProducts } = useGlobalContext();
  console.log(selectedProducts);

  console.log(
    selectedProducts.find((p) => p.product_id === 123)?.product_id ?? 0,
  );

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
              quantity={
                selectedProducts.find(
                  (p) => p.product_id === product.product_id,
                )?.quantity ?? 0
              }
            />
          );
        })}
      </div>
    </div>
  );
}

export default ProductList;
