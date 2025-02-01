import React from "react";
import { Navbar, Nav, NavDropdown, Container, Badge } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "../context/cartContext";

export default function NavMenu() {
  const { cart } = useCart(); // Access cart state from context

  return (
    <Navbar
      bg="primary"
      data-bs-theme="dark"
      expand="md"
      sticky="top"
      collapseOnSelect>
      <Container>
        {/* Logo Brand */}
        <Navbar.Brand href="/">MyCommerce</Navbar.Brand>

        {/* Toggle Button (Mobile) */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Navbar Items */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Dropdown Women */}
            <NavDropdown title="Women" id="nav-dropdown">
              <NavDropdown.Item href="/category/womens-jewellery">
                Womens Jewellery
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/womens-bags">
                Womens Bags
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/womens-shoes">
                Womens Shoes
              </NavDropdown.Item>
            </NavDropdown>

            {/* Dropdown Men */}
            <NavDropdown title="Men" id="nav-dropdown">
              <NavDropdown.Item href="/category/mens-shirts">
                Mens Shirts
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/mens-shoes">
                Mens Shoes
              </NavDropdown.Item>
              <NavDropdown.Item href="/category/mens-watches">
                Mens Watches
              </NavDropdown.Item>
            </NavDropdown>

            {/* Aksesoris Link */}
            <Nav.Link href="/aksesoris">Aksesoris</Nav.Link>

            {/* Cart Icon with Badge showing cart item count */}
            <Nav.Link href="/cart" className="d-flex align-items-center">
              <FaShoppingCart size={22} />
              {cart.length > 0 && (
                <Badge pill bg="danger" className="ms-2">
                  {cart.length}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
