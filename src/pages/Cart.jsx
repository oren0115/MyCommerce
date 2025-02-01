import React from "react";
import { useCart } from "../context/cartContext";
import { Card, Button, Row, Col, Container } from "react-bootstrap";

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart(); // Ambil cart & fungsi clearCart dari context

  // Menghitung total harga semua produk di cart
  const totalPrice = cart.reduce((sum, product) => sum + product.price, 0);

  // Fungsi checkout
  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    const confirmCheckout = window.confirm(
      `Total: $${totalPrice.toFixed(2)}. Proceed to checkout?`
    );

    if (confirmCheckout) {
      alert("Checkout successful! Thank you for your purchase.");
      clearCart(); // Kosongkan cart setelah checkout
    }
  };

  return (
    <Container>
      <h2 className="text-center my-4">Shopping Cart</h2>

      {cart.length === 0 ? (
        <h4 className="text-center">Your cart is empty</h4>
      ) : (
        <>
          {/* List Produk di Cart */}
          <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            {cart.map((product) => (
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
                      Price: ${product.price}
                    </Card.Text>
                    <Button
                      variant="danger"
                      onClick={() => removeFromCart(product.id)}>
                      Remove from Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* Total Harga & Checkout */}
          <div className="mt-4 text-center">
            <h4>
              Total Price: <strong>${totalPrice.toFixed(2)}</strong>
            </h4>
            <Button
              variant="success"
              className="mt-3 px-4 py-2"
              onClick={handleCheckout}>
              Checkout
            </Button>
          </div>
        </>
      )}
    </Container>
  );
};

export default CartPage;
