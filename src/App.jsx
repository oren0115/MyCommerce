import React from "react";
import { CartProvider } from "./context/cartContext";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavMenu from "./components/NavMenu";
import CategoryPage from "./pages/CategoryPage";
import CartPage from "./pages/Cart"; // Import CartPage

function App() {
  return (
    <CartProvider>
      <Router>
        <NavMenu />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/cart" element={<CartPage />} /> {/* Cart route */}
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
