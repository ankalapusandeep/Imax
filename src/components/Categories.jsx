import "../css/categories.css";

function Categories() {
  const categories = [
    {
      title: "Men",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff"
    },
    {
      title: "Women",
      image:
        "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77"
    },
    {
  title: "Kids",
  image:
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1000"
}
  ];

  return (
    <section className="categories">

      <h2>Shop By Category</h2>

      <div className="category-grid">

        {categories.map((item, index) => (
          <div
            key={index}
            className="category-card"
          >
            <img src={item.image} alt="" />

            <div className="overlay">
              <h3>{item.title}</h3>
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Categories;