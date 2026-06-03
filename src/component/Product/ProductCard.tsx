import style from './product.module.css'
import Button from '../Button/Button'
import Plus from 'reicon-react/icons/Plus'
import Minus2 from 'reicon-react/icons/Minus2'
import { useReducer } from 'react'
import type { ProductPresenterProps, QuantityAction } from './productCard.type'
import { useProduct } from '../../hooks/useProduct'


function ProductCardPresenter({quantity,onIncrease,onDecrease}:ProductPresenterProps)
{
    const product = useProduct()
    return (
    <div className={`${style.product}`}>
      <section>
        {/* Img */}
        <img src={product.assets[0].image_url} />
      </section>
      <section className={`${style.productInfo}`}>
        <p className={`${style.productInfoBold}`}>{product.name}</p>
        <p className={`${style.productInfoSecondary}`}>{product.unit}</p>
      </section>
      <section className={`${style.productActions}`}>
        <p>₹{product.price}</p>
        <Button mode='Primary' title={quantity.toString()}  leftIcon={<Plus onClick={onIncrease}/>} rightIcon={<Minus2 onClick={onDecrease}/>}/>
      </section>
    </div>
  )
}

function quantityReducer(prevState:number,action:QuantityAction)
{
    switch(action.type)
    {
        case 'increase':
            return prevState + 1;

        case 'decrease':
            if(prevState === 0)
                return prevState;
            return prevState - 1; 
    }
}

const initState:number = 0;

export default function ProductCard() {
    const [quantity,dispatchQuantity] = useReducer(quantityReducer,initState)

    function handleIncrease()
    {
        dispatchQuantity({type:'increase'})
    }

    function handleDecrease()
    {
        dispatchQuantity({type:'decrease'})
    }

    return <ProductCardPresenter quantity={quantity} onIncrease={handleIncrease} onDecrease={handleDecrease}/>
}
