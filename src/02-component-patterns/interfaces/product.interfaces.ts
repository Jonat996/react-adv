import { Props as ProductButtonsProps } from "../components/product-buttons";
import { Props as ProductCardProps } from "../components/product-card";
import { Props as ProductImageProps } from "../components/product-image";
import { Props as ProductTitleProps } from "../components/product-title";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increaseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element;
  Title: (props: ProductTitleProps) => JSX.Element;
  Image: (props: ProductImageProps) => JSX.Element;
  Buttons: (props: ProductButtonsProps) => JSX.Element;
}
