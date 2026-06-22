import type { Product } from "../types";

import { useGetAllProductListQuery } from "../redux/API/ProductListApi";

type RawProductList = {
  title: string;
  products: [];
};

function useAllProductList(query: string = "") {
  // * Used RTK Query

  const { data, error, isLoading } = useGetAllProductListQuery(query);

  console.log("Data from the RTK:", data);

  const productList =
    data?.map((list: RawProductList) => ({
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
    })) ?? [];

  console.log("In Hook :", productList);

  if (error) {
    if ("status" in error) {
      throw new Error("Error in the fetching all productlist");
    }
    throw new Error(error.message);
  }

  return {
    productList,
    loading: isLoading,
  };
}

export { useAllProductList };
