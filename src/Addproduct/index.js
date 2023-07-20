import React,{useState} from "react";
import './index.css'
import { Link } from "react-router-dom";

const AddProduct=() =>{
  const [product, setProduct] = useState({
    name: '',
    description: '',
    price: 0.0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const productParams = new URLSearchParams(product).toString();
    window.location.href = `/mainPage?${productParams}`;
  };

  return (
    <form onSubmit={handleSubmit} className="forms">
      <div>
        <label>
          Name:
          <input type="text" name="name" value={product.name} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Description:
          <textarea name="description" value={product.description} onChange={handleChange} />
        </label>
      </div>
      <div>
        <label>
          Price:
          <input type="number" name="price" value={product.price} onChange={handleChange} />
        </label>
      </div>
      <Link to={`/Product/` }><button type="submit" className="button">AddProduct</button></Link>
    </form>
  );
}

export default AddProduct;

