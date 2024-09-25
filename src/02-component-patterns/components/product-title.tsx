import { useContext } from "react";
import { ProductContext } from "./product-card";
import styles from "../styles/styles.module.css";

export const ProductTitle = ({ title = "" }) => {
  const { product } = useContext(ProductContext);

  return (
    <span className={styles.productDescription}>
      {!title ? product.title : title}
    </span>
  );
};
