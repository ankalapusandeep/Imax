import "../css/testimonials.css";

function Testimonials() {

  const reviews = [
    {
      name:"Ravi",
      review:"Very comfortable shoes and great service."
    },
    {
      name:"Priya",
      review:"Good quality products at affordable prices."
    },
    {
      name:"Kiran",
      review:"Fast delivery and excellent support."
    }
  ];

  return (
    <section className="testimonials">

      <h2>Customer Reviews</h2>

      <div className="review-grid">

        {reviews.map((item,index)=>(
          <div
            className="review-card"
            key={index}
          >

            <h3>
              ⭐⭐⭐⭐⭐
            </h3>

            <p>
              {item.review}
            </p>

            <h4>
              - {item.name}
            </h4>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Testimonials;