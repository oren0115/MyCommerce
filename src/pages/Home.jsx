import React, { useState } from "react";
import Product from "../components/Product";
import ProductsByCategory from "../components/ProductByCategory";
import { Container, Button } from "react-bootstrap";

const Home = () => {
  const [showCategory] = useState(false);
  const [selectedCategory] = useState("");

  return (
    <Container>
      {" "}
      {showCategory ? (
        <ProductsByCategory category={selectedCategory} />
      ) : (
        <Product />
      )}
    </Container>
  );
};

export default Home;
