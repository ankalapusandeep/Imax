import ProductCard from "./ProductCard";
import products from "../data/products";
import "../css/featuredProducts.css";
import { Link } from "react-router-dom";

function FeaturedProducts() {
  const featured = products.slice(0, 4);

  return (
    <section className="featured">
      <div className="featured-header">
        <div>
          <div className="section-label">Bestsellers</div>
          <h2>Featured Products</h2>
        </div>
        <Link to="/products" className="view-all">View All Products →</Link>
      </div>

      <div className="product-grid">
        {featured.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;
