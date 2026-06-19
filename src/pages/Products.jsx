import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import productsData from "../data/products";

import "../css/products.css";

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = productsData.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" ||
      product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />

      <section className="products-page">

        <h1>Our Products</h1>

        <input
          type="text"
          placeholder="Search footwear..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-box"
        />

        <div className="filter-buttons">
          <button onClick={() => setCategory("All")}>
            All
          </button>

          <button onClick={() => setCategory("Men")}>
            Men
          </button>

          <button onClick={() => setCategory("Women")}>
            Women
          </button>

          <button onClick={() => setCategory("Kids")}>
            Kids
          </button>
        </div>

        <div className="products-grid">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>

      </section>

      <Footer />
    </>
  );
}

export default Products;