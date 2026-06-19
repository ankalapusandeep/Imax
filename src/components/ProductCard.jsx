import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../context/CartContext";

import "../css/productCard.css";

function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  const handleAddToCart = () => {
    addToCart(product);
    alert(`${product.name} added to cart`);
  };

  return (
    <div className="product-card">

      <Link
        to={`/product/${product.id}`}
        className="product-link"
      >
        <img
          src={product.image}
          alt={product.name}
        />

        <h3>{product.name}</h3>
      </Link>

      <p>₹{product.price}</p>

      <button onClick={handleAddToCart}>
        Add To Cart
      </button>

    </div>
  );
}

export default ProductCard;