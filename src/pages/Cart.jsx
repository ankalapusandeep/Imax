import { useContext } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { CartContext }
from "../context/CartContext";

import "../css/cart.css";

function Cart() {

  const {
    cart,
    removeFromCart
  } = useContext(CartContext);

  const total =
    cart.reduce(
      (sum, item) =>
      sum + item.price,
      0
    );

  return (
    <>
      <Navbar />

      <section className="cart-page">

        <h1>
          Shopping Cart
        </h1>

        {cart.length === 0 ? (

          <h3>
            Cart is Empty
          </h3>

        ) : (

          <>
            {cart.map(item => (

              <div
                key={item.id}
                className="cart-item"
              >

                <div>
                  <h3>
                    {item.name}
                  </h3>

                  <p>
                    ₹{item.price}
                  </p>
                </div>

                <button
                  onClick={() =>
                    removeFromCart(item.id)
                  }
                >
                  Remove
                </button>

              </div>

            ))}

            <div
              className="total-section"
            >
              <h2>
                Total:
                ₹{total}
              </h2>

            <button
  className="whatsapp-btn"
  onClick={() => {

    const message =
      `Hello Imax Footwear,%0A%0A` +

      cart.map(item =>
        `${item.name} - ₹${item.price}`
      ).join("%0A")

      +

      `%0A%0ATotal: ₹${total}`;

    window.open(
      `https://wa.me/919908113133?text=${message}`,
      "_blank"
    );

  }}
>
  Checkout on WhatsApp
</button>

            </div>

          </>
        )}

      </section>

      <Footer />
    </>
  );
}

export default Cart;