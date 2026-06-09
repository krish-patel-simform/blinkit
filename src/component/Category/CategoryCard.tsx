import { useState } from "react";
import style from "./category.module.css";
import type { CategoryCardProps } from "./category.type";

export default function CategoryCard({ category }: CategoryCardProps) {
  const [isImageLoading, setIsImageLoading] = useState(true);

  function handleImageLoad() {
    setIsImageLoading(false);
  }

  return (
    <div className={`${style.category}`}>
      <section className={`${style.categoryImg}`}>
        {/* Image */}

        {isImageLoading ?? <div className={`${style.imageSkeleton}`} />}
        <img
          alt={category.name}
          src={category.imageUrl}
          onLoad={handleImageLoad}
          onError={handleImageLoad}
          className={
            isImageLoading ? `${style.imageHidden}` : `${style.imageVisible}`
          }
        />
      </section>
    </div>
  );
}
