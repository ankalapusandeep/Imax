import { useParams } from "react-router-dom";
import { useContext } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import products from "../data/products";
import { CartContext } from "../context/CartContext";

import "../css/productDetails.css";
import { useState } from "react";

function ProductDetails() {

  const { id } = useParams();

  const { addToCart } =
    useContext(CartContext);

  const product =
    products.find(
      item =>
      item.id === Number(id)
    );

    const [selectedSize, setSelectedSize] =
  useState(null);

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <>
      <Navbar />

      <section className="details-container">

        <div className="details-image">

          <img
            src={product.image}
            alt={product.name}
          />

        </div>

        <div className="details-content">

          <h1>
            {product.name}
          </h1>

          <h2>
            ₹{product.price}
          </h2>

          <p>
            {product.description}
          </p>

          <h3>
            Available Sizes
          </h3>

          <div className="sizes">

           {product.sizes.map(size => (

  <button
    key={size}
    className={
      selectedSize === size
      ? "active-size"
      : ""
    }
    onClick={() =>
      setSelectedSize(size)
    }
  >
    {size}
  </button>

))}

          </div>

          <button
            className="add-btn"
            onClick={() => {

  if(!selectedSize){
    alert(
      "Please select a size"
    );
    return;
  }

  addToCart({
    ...product,
    selectedSize
  });

  alert(
    `${product.name}
     Size ${selectedSize}
     added to cart`
  );

}}
          >
            Add To Cart
          </button>

        </div>

      </section>

      <Footer />
    </>
  );
}

export default ProductDetails;