import style from "./imageContainer.module.css";
import type { ImageContainerProps, ImageItem } from "./imageContainer.type";

export default function ImagesContainer({
  assets,
  productName,
}: ImageContainerProps) {
  return (
    <div className={`${style.imageContainer}`}>
      <section className={`${style.imagePreviewContainer}`}>
        {/* preview section */}
        <img
          className={`${style.imagePreview}`}
          src={assets[0].image_url}
          alt={productName}
        />
      </section>

      <section className={`${style.imageList}`}>
        {assets.map((assetsObj, index) => {
          return (
            <ImageItem
              key={index}
              imageUrl={assetsObj.image_url}
              productName={productName}
            />
          );
        })}
      </section>
    </div>
  );
}

const ImageItem = ({ imageUrl, productName }: ImageItem) => {
  return (
    <div className={`${style.imageListImg}`}>
      <img src={imageUrl} alt={productName} />
    </div>
  );
};
