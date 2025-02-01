import React, { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Spinner,
  Alert,
  Badge,
  Button,
} from "react-bootstrap";
import { fetchProductsByCategory } from "../api/productApi";
import { useCart } from "../context/cartContext";

const truncateDescription = (description) => {
  const words = description.split(" ");
  return words.length > 5 ? words.slice(0, 5).join(" ") + "..." : description;
};

const ProductsByCategory = ({ category }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { addToCart } = useCart();

  useEffect(() => {
    if (!category) return;

    const fetchProducts = async () => {
      setLoading(true);
      setError("");
      try {
        const data = await fetchProductsByCategory(category);
        setProducts(data);
      } catch (err) {
        setError("Failed to fetch products. Please try again.");
      }
      setLoading(false);
    };

    fetchProducts();
  }, [category]);

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Products in {category}</h2>

      {/* Loading Indicator */}
      {loading && (
        <div className="text-center">
          <Spinner animation="border" variant="primary" />
        </div>
      )}

      {/* Error Message */}
      {error && <Alert variant="danger">{error}</Alert>}

      {/* No Products Message */}
      {!loading && !error && products.length === 0 && (
        <Alert variant="info">No products found.</Alert>
      )}

      {/* Products Grid */}
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={4} sm={6} xs={12} className="mb-4">
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
                  <Badge bg="warning">{product.rating || "N/A"}</Badge>
                </Card.Text>
                <Button
                  variant="primary"
                  className="mt-auto"
                  onClick={() => addToCart(product)}>
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

export default ProductsByCategory;
