import {
  ProductButtons,
  ProductImage,
  ProductTitle,
  ProductCard,
} from "../components";

const product = {
  id: "1",
  title: "Coffee Mug Developer",
  img: "./coffee-mug.png",
};

const product2 = {
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
          <ProductCard.Title title="coffee" />
          <ProductCard.Image />
          <ProductCard.Buttons />
        </ProductCard>

        <ProductCard product={product}>
          <ProductImage img={product.img} />
          <ProductTitle title="Coffee Mug" />
          <ProductButtons />
        </ProductCard>
      </div>
    </div>
  );
};
