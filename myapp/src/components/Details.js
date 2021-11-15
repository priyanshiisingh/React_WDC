import { useParams } from "react-router";
import { useSelector } from "react-redux";

const Details = () => {
  const { name } = useParams();
  const products = useSelector((state) => state);
  const product = products.find((product) => product.name === name);
  return (
    <div>
      <h2>{name} Details</h2>
      {product.description}
    </div>
  );
};

export default Details;
