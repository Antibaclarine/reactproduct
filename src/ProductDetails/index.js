import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './style.css'

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/product/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div className='productdetails'>
      <h1>Product Details</h1>
      <div>
        <img src={product.thumbnail} alt={product.title} />
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <p>{product.brand}</p>
        <p>{product.price}</p>
        <h4>{product.rating}</h4>
        <p>{product.stock}</p>
        <p>{product.category}</p>
      </div>
    </div>
  );
};

export default ProductDetails;
