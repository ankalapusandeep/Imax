import "../css/whyChooseUs.css";

function WhyChooseUs() {
  const reasons = [
    {
      icon: "👟",
      title: "Premium Quality",
      desc: "High-quality footwear designed for lasting comfort and durability in every step.",
    },
    {
      icon: "🔥",
      title: "Latest Designs",
      desc: "Trend-forward collections for Men, Women, and Kids — refreshed every season.",
    },
    {
      icon: "💰",
      title: "Affordable Prices",
      desc: "Premium products at prices that make great footwear accessible to everyone.",
    },
    {
      icon: "🤝",
      title: "Trusted Store",
      desc: "Serving our community with quality, transparency, and genuine care since day one.",
    },
  ];

  return (
    <section className="why-section">
      <div className="section-label">Our Promise</div>
      <h2>Why Choose Imax Footwear?</h2>

      <div className="why-grid">
        {reasons.map((item, index) => (
          <div key={index} className="why-card">
            <div className="why-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
