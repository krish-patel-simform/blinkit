import { ProductContext } from "../../Context/ProductContext";
import ProductCard from "./ProductCard";
import type { ProductListProps } from "./productList.type";

import style from './productList.module.css'

export default function ProductList({ productCategory }: ProductListProps) {
  return (
    <div className={`${style.productListContainer}`}>
      <h1 className={`${style.productListHeader}`}>{productCategory.title}</h1>
      <div className={`${style.productList}`}>
        {productCategory.products.map((product,index) => {
          return (
            <ProductContext value={product} key={index}>
              <ProductCard key={product.name} />
            </ProductContext>
          );
        })}
      </div>
    </div>
  );
}
