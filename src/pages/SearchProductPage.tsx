import { useMemo } from "react";
import { useSearchParams } from "react-router";
import { useAllProductList } from "../hooks/useAllProductList";
import type { Product, ProductCategory } from "../types";
import { useGlobalContext } from "../hooks/useGlobalContext";
import ProductCard from "../component/Product/ProductCard";

export default function SearchProductPage() {
  const [searchParam] = useSearchParams();
  const query = searchParam.get("search") || "";
  const { loading, productList: categories } = useAllProductList(query);
  const { selectedProducts, dispatchSelectedProducts } = useGlobalContext();

  const filterProducts: ProductCategory = useMemo(() => {
    if (query) {
      const products: Product[] = [];
      for (const category of categories) {
        products.push(
          ...category.products.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase()),
          ),
        );

        console.log("category after filter:");
        console.log(products);
      }

      return { title: query, products };
    }
    return { title: query, products: [] };
  }, [categories, query]);

  // console.log("loading:", loading);
  // console.log("searchProduct Page re render");
  console.log("search product page", filterProducts);

  if (!query) return <h1>Search milk...</h1>;

  if (loading) return <h1>Loading...</h1>;

  if (filterProducts.products.length === 0) return <NoProductFound />;

  return (
    <div className="w-full h-full min-h-screen">
      <p>{filterProducts.title}</p>
      <div className="grid grid-cols-6 gap-4 p-8!">
        {filterProducts.products.map((product) => {
          return (
            <ProductCard
              key={product.product_id}
              product={product}
              orientation="Vertical"
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

function NoProductFound() {
  return (
    <div className="w-full h-full flex items-center justify-center flex-col">
      <img
        className="h-60 aspect-square"
        src="https://blinkit.com/57070263a359a92dc0fe.png"
        alt="No Product Found"
      />
      <p>Nothing here yet</p>
    </div>
  );
}
