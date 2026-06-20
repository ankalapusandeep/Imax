import "../css/hero.css";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="eyebrow">New Collection 2025</div>
        <h1>Step Into <em>Style</em> &amp; Comfort</h1>
        <p>Premium footwear crafted for every occasion — discover collections for Men, Women &amp; Kids.</p>
        <div className="hero-actions">
          <Link to="/products" className="btn-primary">Shop Now</Link>
          <Link to="/products" className="btn-ghost">View Lookbook</Link>
        </div>
      </div>

      <div className="trust-bar">
        <div className="trust-item">Free Delivery Over ₹999</div>
        <div className="trust-item">Easy 30-Day Returns</div>
        <div className="trust-item">Authentic Brands Only</div>
        <div className="trust-item">Order on WhatsApp</div>
      </div>
    </section>
  );
}

export default Hero;
