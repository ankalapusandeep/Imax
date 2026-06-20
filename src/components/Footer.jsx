import "../css/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-accent">IMAX</span> FOOTWEAR
          </div>
          <p>Premium footwear for every step. Crafted with care, delivered with trust.</p>
          <a
            href="https://wa.me/919908113133"
            target="_blank"
            rel="noreferrer"
            className="whatsapp-btn"
          >
            💬 Order on WhatsApp
          </a>
        </div>

        <div className="footer-col">
          <h4>Shop</h4>
          <ul>
            <li><Link to="/products">Men's Footwear</Link></li>
            <li><Link to="/products">Women's Footwear</Link></li>
            <li><Link to="/products">Kids' Footwear</Link></li>
            <li><Link to="/products">New Arrivals</Link></li>
            <li><Link to="/products">Sale</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Help</h4>
          <ul>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/contact">Size Guide</Link></li>
            <li><Link to="/contact">Returns Policy</Link></li>
            <li><Link to="/contact">Track Order</Link></li>
            <li><Link to="/contact">FAQs</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Imax Footwear. All rights reserved.</p>
        <p>Made with ❤ in India</p>
      </div>
    </footer>
  );
}

export default Footer;
