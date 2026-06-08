import style from "./category.module.css";
import type { CategoryCardProps } from "./category.type";

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <div className={`${style.category}`}>
      <section className={`${style.categoryImg}`}>
        {/* Image */}
        <img alt={category.name} src={category.imageUrl} />
      </section>
    </div>
  );
}
