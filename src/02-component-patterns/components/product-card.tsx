import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/product.hook";
import { createContext, CSSProperties, ReactElement } from "react";
import { Product, ProductContextProps } from "../interfaces/product.interfaces";
import { ProductTitle, ProductButtons, ProductImage } from "./index";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  product: Product;
  children?: ReactElement | ReactElement[];
  className?: string;
  style?: CSSProperties;
}

export const ProductCard = ({ children, product, className, style }: Props) => {
  const { increaseBy, counter } = useProduct();

  return (
    <Provider value={{ increaseBy, counter, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
