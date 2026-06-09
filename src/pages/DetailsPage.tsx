import { useParams } from "react-router";
import ImagesContainer from "../component/ImagesContainer/ImagesContainer";
import ProductDetail from "../component/ProductDetail/ProductDetail";
import { useProduct } from "../hooks/useProduct";

export default function DetailsPage() {
  const { productId } = useParams();

  const product_id = Number(productId);

  if (!product_id || Number.isNaN(product_id)) {
    console.log("we have an if in side an number parsing");
    throw new Error("No Product exist with this id");
  }

  const { loading, data: product } = useProduct(product_id);

  console.log(loading, product);

  if (loading) {
    return <h1>Loading...</h1>;
  } else if (!product) {
    throw new Error("No Product exist with this id");
  }

  return (
    <div className="flex gap-8 justify-between">
      <div className="flex-1">
        <ImagesContainer assets={product.assets} productName={product.name} />
      </div>

      <div className="flex-1">
        <ProductDetail product={product} />
      </div>
    </div>
  );
}
