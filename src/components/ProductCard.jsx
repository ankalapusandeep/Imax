import "../css/productCard.css";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="product-card">
      <div className="product-img">
        <img src={product.image} alt={product.name} />
        {product.badge && (
          <div className="product-badge">{product.badge}</div>
        )}
      </div>

      <div className="product-info">
        <div className="product-brand">{product.brand || "IMAX"}</div>
        <h3>{product.name}</h3>
        <div className="product-price">
          ₹{product.price.toLocaleString()}
          {product.originalPrice && (
            <span className="original-price">₹{product.originalPrice.toLocaleString()}</span>
          )}
        </div>
        <button className="add-btn" onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
