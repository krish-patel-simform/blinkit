import {useProductCategory} from  '../../hooks/useProductCategory'
import CategoryCard from '../Category/CategoryCard'
import style from './categoryPresenter.module.css'

export default function CategoryPresenter() {
    const categories = useProductCategory()
  return (
    <div className={`${style.categoryContainer}`}>
        {categories.map((category)=>{
            return <CategoryCard key={category.id} category={category} />
        })}
    </div>
  )
}
