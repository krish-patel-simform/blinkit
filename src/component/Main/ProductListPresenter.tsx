import { useAllProductList } from '../../hooks/useAllProductList'
import ProductList from '../Product/ProductList';

import style from './productListPresenter.module.css'

export default function ProductListPresenter() {
    const allProdctList = useAllProductList();
  return (
    <div className={`${style.productListPresenter}`}>
        {
            allProdctList.map((productCategory)=>{
                return <ProductList key={productCategory.title} productCategory={productCategory} />
            })
        }
    </div>
  )
}
