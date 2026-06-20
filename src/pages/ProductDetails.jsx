import { useParams, Link } from "react-router-dom";
import { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import products from "../data/products";
import { CartContext } from "../context/CartContext";
import "../css/productDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [selectedSize, setSelectedSize] = useState(null);
  const [added, setAdded] = useState(false);

  const product = products.find(item => item.id === Number(id));

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="not-found">
          <h2>Product Not Found</h2>
          <Link to="/products" className="btn-primary">Back to Products</Link>
        </div>
        <Footer />
      </>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size first.");
      return;
    }
    addToCart({ ...product, selectedSize });
    setAdded(true);
    setTimeout(() => setAdded(false), 2500);
  };

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <>
      <Navbar />

      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span>/</span>
        <Link to="/products">Products</Link>
        <span>/</span>
        <span>{product.name}</span>
      </div>

      <section className="details-container">
        <div className="details-image">
          <img src={product.image} alt={product.name} />
          {product.badge && <div className="detail-badge">{product.badge}</div>}
        </div>

        <div className="details-content">
          <div className="detail-brand">{product.brand || "IMAX"}</div>
          <h1>{product.name}</h1>

          <div className="detail-price">
            ₹{product.price.toLocaleString()}
            {product.originalPrice && (
              <span className="detail-original">₹{product.originalPrice.toLocaleString()}</span>
            )}
            {product.originalPrice && (
              <span className="discount-tag">
                {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
              </span>
            )}
          </div>

          <p className="detail-desc">{product.description || "Premium quality footwear crafted for comfort and style. Designed to last through every step of your journey."}</p>

          <div className="size-section">
            <div className="size-header">
              <h3>Select Size</h3>
              <span className="size-guide">Size Guide →</span>
            </div>
            <div className="sizes">
              {(product.sizes || [6, 7, 8, 9, 10, 11]).map(size => (
                <button
                  key={size}
                  className={`size-btn ${selectedSize === size ? "active-size" : ""}`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="detail-actions">
            <button
              className={`add-btn ${added ? "added" : ""}`}
              onClick={handleAddToCart}
            >
              {added ? "✓ Added to Cart" : "Add to Cart"}
            </button>

            <button
              className="wa-order-btn"
              onClick={() => {
                const msg = `Hello! I'd like to order:%0A%0A${product.name}%0ASize: ${selectedSize || "TBD"}%0APrice: ₹${product.price.toLocaleString()}`;
                window.open(`https://wa.me/919908113133?text=${msg}`, "_blank");
              }}
            >
              💬 Order on WhatsApp
            </button>
          </div>

          <div className="detail-perks">
            <div className="perk">✓ Free delivery over ₹999</div>
            <div className="perk">✓ Easy 30-day returns</div>
            <div className="perk">✓ Authentic product guaranteed</div>
          </div>
        </div>
      </section>

      {relatedProducts.length > 0 && (
        <section className="related-section">
          <div className="section-label">You May Also Like</div>
          <h2>Related Products</h2>
          <div className="related-grid">
            {relatedProducts.map(p => (
              <Link to={`/product/${p.id}`} key={p.id} className="related-card">
                <div className="related-img">
                  <img src={p.image} alt={p.name} />
                </div>
                <div className="related-info">
                  <div className="related-brand">{p.brand || "IMAX"}</div>
                  <p>{p.name}</p>
                  <strong>₹{p.price.toLocaleString()}</strong>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}

export default ProductDetails;
