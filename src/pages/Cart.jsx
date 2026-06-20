import { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CartContext } from "../context/CartContext";
import "../css/cart.css";

function Cart() {
  const { cart, removeFromCart, updateQuantity, totalPrice } = useContext(CartContext);

  const handleWhatsApp = () => {
    const message =
      `Hello Imax Footwear,%0A%0A` +
      cart
        .map(item =>
          `• ${item.name} (Size: ${item.selectedSize || "N/A"}) x${item.quantity} - ₹${(item.price * item.quantity).toLocaleString()}`
        )
        .join("%0A") +
      `%0A%0ATotal: ₹${totalPrice.toLocaleString()}`;

    window.open(`https://wa.me/919908113133?text=${message}`, "_blank");
  };

  return (
    <>
      <Navbar />

      <section className="cart-page">
        <div className="cart-header">
          <div className="section-label">Your Order</div>
          <h1>Shopping Cart</h1>
        </div>

        {cart.length === 0 ? (
          <div className="cart-empty">
            <div className="empty-icon">🛒</div>
            <h2>Your cart is empty</h2>
            <p>Looks like you haven't added anything yet.</p>
            <Link to="/products" className="btn-primary">Browse Products</Link>
          </div>
        ) : (
          <div className="cart-layout">
            <div className="cart-items">
              {cart.map(item => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-img">
                    <img src={item.image} alt={item.name} />
                  </div>

                  <div className="cart-item-info">
                    <div className="cart-item-brand">{item.brand || "IMAX"}</div>
                    <h3>{item.name}</h3>
                    {item.selectedSize && (
                      <p className="cart-item-size">Size: <strong>{item.selectedSize}</strong></p>
                    )}
                    <div className="cart-item-price">₹{item.price.toLocaleString()}</div>
                  </div>

                  <div className="cart-item-actions">
                    <div className="qty-control">
                      <button onClick={() => updateQuantity(item.id, item.quantity - 1)}>−</button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
                    </div>
                    <div className="cart-item-subtotal">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </div>
                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Order Summary</h2>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>₹{totalPrice.toLocaleString()}</span>
              </div>
              <div className="summary-row">
                <span>Delivery</span>
                <span className="free-tag">
                  {totalPrice >= 999 ? "Free" : "₹99"}
                </span>
              </div>
              {totalPrice < 999 && (
                <p className="delivery-hint">
                  Add ₹{(999 - totalPrice).toLocaleString()} more for free delivery
                </p>
              )}
              <div className="summary-divider" />
              <div className="summary-total">
                <span>Total</span>
                <span>₹{(totalPrice >= 999 ? totalPrice : totalPrice + 99).toLocaleString()}</span>
              </div>

              <button className="whatsapp-btn" onClick={handleWhatsApp}>
                💬 Checkout on WhatsApp
              </button>
              <Link to="/products" className="continue-link">← Continue Shopping</Link>
            </div>
          </div>
        )}
      </section>

      <Footer />
    </>
  );
}

export default Cart;
