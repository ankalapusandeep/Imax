import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../css/contact.css";
import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.message) return;
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const msg = `Hello Imax Footwear!%0A%0AName: ${form.name}%0AEmail: ${form.email}%0APhone: ${form.phone}%0A%0AMessage: ${form.message}`;
    window.open(`https://wa.me/919908113133?text=${msg}`, "_blank");
  };

  return (
    <>
      <Navbar />

      <section className="contact-hero">
        <div className="section-label">Get In Touch</div>
        <h1>Contact Us</h1>
        <p>Have a question or want to place a custom order? We're here to help.</p>
      </section>

      <section className="contact-layout">
        <div className="contact-info">
          <h2>Visit or Call Us</h2>

          <div className="info-card">
            <div className="info-icon">📍</div>
            <div>
              <h4>Address</h4>
              <p>Imax Footwear Store<br />Kamareddy, Telangana, India</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">📞</div>
            <div>
              <h4>Phone / WhatsApp</h4>
              <p>+91 99081 13133</p>
            </div>
          </div>

          <div className="info-card">
            <div className="info-icon">🕐</div>
            <div>
              <h4>Store Hours</h4>
              <p>Mon – Sat: 9:00 AM – 8:00 PM<br />Sunday: 10:00 AM – 6:00 PM</p>
            </div>
          </div>

          <a
            href="https://wa.me/919908113133"
            target="_blank"
            rel="noreferrer"
            className="wa-direct-btn"
          >
            💬 Chat on WhatsApp
          </a>
        </div>

        <div className="contact-form-wrap">
          {submitted ? (
            <div className="success-msg">
              <div className="success-icon">✓</div>
              <h2>Message Received!</h2>
              <p>Thank you, {form.name}. We'll get back to you shortly.</p>
              <button className="btn-primary" onClick={() => setSubmitted(false)}>
                Send Another
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Send a Message</h2>

              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Message *</label>
                <textarea
                  name="message"
                  placeholder="How can we help you?"
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-actions">
                <button type="submit" className="btn-primary">Send Message</button>
                <button type="button" className="btn-whatsapp" onClick={handleWhatsApp}>
                  💬 Send via WhatsApp
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;
