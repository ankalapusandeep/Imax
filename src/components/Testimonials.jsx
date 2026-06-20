import "../css/testimonials.css";

function Testimonials() {
  const reviews = [
    {
      name: "Ravi Kumar",
      initials: "RK",
      review: "Very comfortable shoes and great service. Will definitely shop again from Imax.",
    },
    {
      name: "Priya Sharma",
      initials: "PS",
      review: "Good quality products at very affordable prices. Impressed with the packaging too.",
    },
    {
      name: "Kiran Reddy",
      initials: "KR",
      review: "Fast delivery and excellent customer support. Exactly what I was looking for.",
    },
  ];

  return (
    <section className="testimonials">
      <div className="section-label">Customer Stories</div>
      <h2>What Our Customers Say</h2>

      <div className="review-grid">
        {reviews.map((item, index) => (
          <div key={index} className="review-card">
            <div className="stars">★★★★★</div>
            <blockquote>"{item.review}"</blockquote>
            <div className="reviewer">
              <div className="reviewer-avatar">{item.initials}</div>
              <div>
                <div className="reviewer-name">{item.name}</div>
                <div className="reviewer-label">Verified Buyer</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;
