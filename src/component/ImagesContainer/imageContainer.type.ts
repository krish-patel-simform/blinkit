import type { ProductAssets } from "../../types";

export type ImageContainerProps = {
  assets: ProductAssets[];
  productName: string;
};

export type ImageItem = {
  imageUrl: string;
  productName: string;
};
