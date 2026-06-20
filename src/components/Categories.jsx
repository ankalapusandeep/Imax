import "../css/categories.css";
import { Link } from "react-router-dom";

function Categories() {
  const categories = [
    {
      title: "Men",
      subtitle: "Explore Collection",
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80",
    },
    {
      title: "Women",
      subtitle: "Explore Collection",
      image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=600&q=80",
    },
    {
      title: "Kids",
      subtitle: "Explore Collection",
      image: "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?w=600&q=80",
    },
  ];

  return (
    <section className="categories">
      <div className="section-label">Collections</div>
      <h2>Shop By Category</h2>

      <div className="category-grid">
        {categories.map((item, index) => (
          <Link to="/products" key={index} className="category-card">
            <img src={item.image} alt={`${item.title}'s footwear`} />
            <div className="category-overlay">
              <h3>{item.title}</h3>
              <span>{item.subtitle} →</span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default Categories;
