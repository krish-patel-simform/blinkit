import { useAllProductList } from "./useAllProductList";

function useProduct(id: number) {
  const { productList: categories, loading } = useAllProductList();

  const data =
    categories
      ?.map((category) =>
        category.products.find((product) => product.product_id === id),
      )
      .find((p) => p !== undefined) ?? null;

  return { loading, data };
}

export { useProduct };
