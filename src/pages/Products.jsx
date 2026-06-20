import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import productsData from "../data/products";
import "../css/products.css";

const CATEGORIES = ["All", "Men", "Women", "Kids"];
const SORT_OPTIONS = [
  { label: "Default", value: "default" },
  { label: "Price: Low to High", value: "asc" },
  { label: "Price: High to Low", value: "desc" },
];

function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");

  const filtered = productsData
    .filter(p => {
      const matchSearch = p.name.toLowerCase().includes(search.toLowerCase());
      const matchCat = category === "All" || p.category === category;
      return matchSearch && matchCat;
    })
    .sort((a, b) => {
      if (sort === "asc") return a.price - b.price;
      if (sort === "desc") return b.price - a.price;
      return 0;
    });

  return (
    <>
      <Navbar />

      <section className="products-hero">
        <div className="section-label">Our Range</div>
        <h1>All Products</h1>
        <p>{filtered.length} items available</p>
      </section>

      <section className="products-page">
        <div className="products-toolbar">
          <input
            type="text"
            placeholder="Search footwear..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="search-box"
          />

          <div className="filter-buttons">
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                className={`filter-btn ${category === cat ? "active-filter" : ""}`}
                onClick={() => setCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <select
            className="sort-select"
            value={sort}
            onChange={e => setSort(e.target.value)}
          >
            {SORT_OPTIONS.map(opt => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        {filtered.length === 0 ? (
          <div className="no-results">
            <div style={{ fontSize: "2.5rem", opacity: 0.3 }}>🔍</div>
            <h3>No products found</h3>
            <p>Try adjusting your search or filter.</p>
            <button className="btn-primary" onClick={() => { setSearch(""); setCategory("All"); }}>
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="products-grid">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}

export default Products;
