import { useParams } from "react-router-dom";

function ProductDetails() {

  const { id } = useParams();

  return (
    <div
      style={{
        padding:"100px",
        textAlign:"center"
      }}
    >
      <h1>
        Product Details
      </h1>

      <h2>
        Product ID: {id}
      </h2>
    </div>
  );
}

export default ProductDetails;