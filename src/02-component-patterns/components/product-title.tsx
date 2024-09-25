import styles from "../styles/styles.module.css";
import { ProductContext } from "./product-card";
import { CSSProperties, useContext } from "react";

export interface Props {
  title?: string;
  className?: string;
  style?: CSSProperties;
}

export const ProductTitle = ({ title, className, style }: Props) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={`${className} ${styles.productDescription}`} style={style}>
      {!title ? product.title : title}
    </span>
  );
};
