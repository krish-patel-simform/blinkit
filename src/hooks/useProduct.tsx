import { useEffect, useState } from "react";
import { useAllProductList } from "./useAllProductList";
import type { Product } from "../types";

function useProduct(id: number) {
  const {productList:categories} = useAllProductList();

  const [loading, setIsLoading] = useState(true);
  const [data, setData] = useState<null | Product>();

  useEffect(() => {
    function fetchProduct() {
      for (const category of categories) {
        console.log("loop is running");
        const product = category.products.find(
          (product) => product.product_id === id,
        );
        if (product) {
          console.log("Product found");
          setIsLoading(false);
          setData(product);
          break;
        }
      }
    }

    fetchProduct();
  }, [categories, id]);

  return { loading, data };
}

export { useProduct };
