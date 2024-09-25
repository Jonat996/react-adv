import {
  ProductButtons,
  ProductImage,
  ProductTitle,
  ProductCard,
} from "../components";
import "../styles/custom.styles.css";

const product = {
  id: "1",
  title: "Coffee Mug Developer",
  img: "./coffee-mug.png",
};

export const ShoppingPage = () => {
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        <ProductCard product={product}>
          <ProductCard.Title title="coffee" className="text-bold" />
          <ProductCard.Image className="custom-image" />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product} className="bg-dark">
          <ProductImage img={product.img} className="custom-image" />
          <ProductTitle className="text-white text-bold" />
          <ProductButtons className="custom-buttons" />
        </ProductCard>
        <ProductCard
          product={product}
          style={{
            backgroundColor: "#70D1F8",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          <ProductImage />
          <ProductTitle />
          <ProductButtons
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              textAlign: "center",
            }}
          />
        </ProductCard>
      </div>
    </div>
  );
};
