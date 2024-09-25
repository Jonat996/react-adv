import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/product.hook";
import { createContext } from "react";
import {
  ProductCardProps,
  ProductContextProps,
} from "../interfaces/product.interfaces";
import { ProductTitle, ProductButtons, ProductImage } from "./index";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({ children, product }: ProductCardProps) => {
  const { increaseBy, counter } = useProduct();

  return (
    <Provider value={{ increaseBy, counter, product }}>
      <div className={styles.productCard}>{children}</div>
    </Provider>
  );
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImage;
ProductCard.Buttons = ProductButtons;
