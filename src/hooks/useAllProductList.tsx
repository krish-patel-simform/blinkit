import { useEffect, useState } from "react";
import type { Product, ProductCategory } from "../types";
import { CONFIG } from "../consts/config";

type RawProductList = {
  title: string;
  products: [];
};

function useAllProductList(query: string = "") {
  const [productList, setProductList] = useState<ProductCategory[]>([]);
  const [loading, setLoading] = useState(true);

  // throw Error("This error for testing purpose");

  useEffect(() => {
    const controller = new AbortController();

    let active = true;
    async function fetchProductList() {
      try {
        console.log("Request Started:", query);

        setLoading(true);

        // Temporary delay for testing
        // await new Promise((resolve) => setTimeout(resolve, 3000));

        const response = await fetch(`${CONFIG.JSON_PRODUCTS}`, {
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const jsonData = await response.json();

        const filterProductCategory: ProductCategory[] = jsonData.map(
          (list: RawProductList) => ({
            title: list.title,
            products: list.products.map((productRaw: [Product]) => {
              const product = productRaw[0];

              return {
                price: product.price,
                unit: product.unit,
                unit_price: product.unit_price,
                unit_type: product.unit_type,
                brand: product.brand,
                name: product.name,
                assets: product.assets,
                product_id: product.product_id,
              };
            }),
          }),
        );

        console.log("Response Received:", query);

        if (!active) return;

        setProductList(filterProductCategory);
        setLoading(false);
      } catch (error) {
        if ((error as Error).name === "AbortError") {
          console.log("Request Aborted:", query);
          return;
        }
        setLoading(false);

        console.error(error);
      }
    }

    fetchProductList();

    return () => {
      console.log("Cleanup:", query);
      controller.abort();
      active = false;
    };
  }, [query]);

  return {
    productList,
    loading,
  };
}

export { useAllProductList };
