import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavMenu from "./components/NavMenu";
import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/Cart"; // Import CartPage
import { CartProvider } from "./context/cartContext";

function App() {
  return (
    <CartProvider>
      <Router>
        <NavMenu />
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<Home />} />

          {/* Category Page */}
          <Route path="/category/:category" element={<CategoryPage />} />

          {/* Cart Page */}
          <Route path="/cart" element={<CartPage />} />

          {/* 404 Page Not Found */}
          <Route
            path="*"
            element={<h1 className="text-center mt-5">404 Not Found</h1>}
          />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
