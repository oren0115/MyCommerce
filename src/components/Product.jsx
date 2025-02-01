import React, { useState, useEffect } from "react";
import { products } from "../api/productApi"; // Import function to fetch product data
import {
  Container,
  Card,
  Button,
  Row,
  Col,
  Spinner,
  Badge,
} from "react-bootstrap";
import { useCart } from "../context/cartContext"; // Import useCart from context

const truncateDescription = (description) => {
  const words = description.split(" ");
  return words.length > 10 ? words.slice(0, 10).join(" ") + "..." : description;
};

const Product = () => {
  const { addToCart } = useCart();
  const [productList, setProductList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await products(); // Fetch product data
        setProductList(data);
      } catch (err) {
        setError("Failed to load products"); // Handle error
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <Spinner animation="border" variant="primary" />;
  if (error) return <div className="text-danger">{error}</div>;

  const handleAddToCart = (product) => {
    addToCart(product);
  };

  return (
    <Container style={{ paddingTop: "60px" }}>
      <h2>Product List</h2>
      <Row xs={1} sm={2} md={2} lg={3} className="g-4">
        {productList.map((product) => (
          <Col key={product.id}>
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={product.thumbnail}
                alt={product.title}
                style={{ height: "180px", objectFit: "cover" }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="mb-2">{product.title}</Card.Title>
                <Card.Text className="flex-grow-1">
                  {truncateDescription(product.description)}
                </Card.Text>
                <Card.Text>
                  <strong>Price: ${product.price}</strong>
                </Card.Text>
                <Card.Text>
                  <strong>Rating: </strong>
                  <Badge bg="warning">
                    {product.rating ? product.rating : "N/A"}
                  </Badge>
                </Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleAddToCart(product)} // Add product to cart
                >
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Product;
