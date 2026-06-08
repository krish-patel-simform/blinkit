import { useProduct } from "./useProduct"

export function usePurchasedQuantity(id:number)
{
    const product = useProduct(id)
    if(product)
    {
        return product.quantity;
    }
    return 0;
}
