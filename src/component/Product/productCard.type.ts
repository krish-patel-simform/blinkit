import type { Product } from "../../types"

export type QuantityAction = 
| {type : 'increase'}
| {type : 'decrease'}

export type ProductCardProps = {
    product:Product
}

export type ProductPresenterProps = {
    quantity : number,
    onIncrease : ()=>void,
    onDecrease : ()=>void,
}