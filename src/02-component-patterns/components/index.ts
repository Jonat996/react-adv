import { ProductCardHOC } from ".";
import { ProductCardHOCProps } from "../interfaces/product.interfaces";

import { ProductButtons } from "./product-buttons";
import { ProductImage } from "./product-image";
import { ProductTitle } from "./product-title";

export { ProductButtons } from "./product-buttons";
export { ProductCard as ProductCardHOC } from "./product-card";
export { ProductImage } from "./product-image";
export { ProductTitle } from "./product-title";

export const ProductCard: ProductCardHOCProps = Object.assign(ProductCardHOC, {
  Title: ProductTitle,
  Image: ProductImage,
  Buttons: ProductButtons,
});

export default ProductCard;
