import { useGlobalContext } from "./useGlobalContext";

function useProduct(id:number) {
  const {selectedProducts} = useGlobalContext()

  return selectedProducts.find((product)=> product.product_id === id)
}

export { useProduct };