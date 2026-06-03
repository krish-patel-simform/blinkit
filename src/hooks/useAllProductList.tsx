import { useEffect, useState } from "react";
import type { Product, ProductCategory } from "../types";
import { CONFIG } from "../Conast/config";

type RawProductList = {title :string,products : []}

function useAllProductList() {
  const [productList, setProductList] = useState<ProductCategory[]>([]);

  useEffect(() => {
    async function fetchProductList() {
      const response = await fetch(`${CONFIG.JSON_SERVER_PREFIX}/products`);

      if (!response.ok) throw new Error("Failed to fetch the products");

      const jsonData = await response.json();

      const filterProductList:ProductCategory[] = jsonData.map((list : RawProductList) => {
        return {
          title: list.title,
          products: list.products.map((productRaw:[Product]) => {
            const product = productRaw[0];
            const filterProduct: Product = {
              price: product.price,
              unit: product.unit,
              unit_price: product.unit_price,
              unit_type: product.unit_type,
              brand: product.brand,
              name: product.name,
              assets: product.assets,
            };
            return filterProduct;
          }),
        };
      });

      setProductList(filterProductList)
    }

    fetchProductList();
  }, []);

  return productList;
}

export { useAllProductList };
