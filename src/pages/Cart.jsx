import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useCart } from "../context/cartContext";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Shopping Cart</h2>

      {/* Check if cart is empty */}
      {cart.length === 0 ? (
        <h4 className="text-center">Your cart is empty.</h4>
      ) : (
        <Row>
          {cart.map((product) => (
            <Col key={product.id} md={4} sm={6} xs={12} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img
                  variant="top"
                  src={product.thumbnail}
                  alt={product.title}
                  style={{ height: "180px", objectFit: "cover" }}
                />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text>
                    <strong>Price: ${product.price}</strong>
                  </Card.Text>
                  <Button
                    variant="danger"
                    onClick={() => handleRemoveFromCart(product.id)}>
                    Remove from Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </Container>
  );
};

export default CartPage;
