import "../css/navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Navbar() {
  const { cart } = useContext(CartContext);

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <span className="logo-icon">👟</span>
        <span className="logo-text">
          <span className="logo-accent">IMAX</span> FOOTWEAR
        </span>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <Link to="/cart" className="nav-cart">
        Cart ({cart.length})
      </Link>
    </nav>
  );
}

export default Navbar;
