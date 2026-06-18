import ProductCard from "./ProductCard";
import products from "../data/products";
import "../css/featuredProducts.css";

function FeaturedProducts() {
  return (
    <section className="featured">

      <h2>Featured Products</h2>

      <div className="product-grid">

        {products.map(product => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}

      </div>

    </section>
  );
}

export default FeaturedProducts;