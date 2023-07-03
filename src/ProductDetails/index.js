import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetails = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://dummyjson.com/products/${productId}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProductDetails();
  }, [productId]);

  return (
    <div className='prod'>
      <h1>Product Details</h1>
      {product && (
        <div>
          <img src={product.images} alt={product.title} className='images' />
          <h2>{product.title}</h2>
          <p>{product.brand}</p>
          <p>{product.price}</p>
          <h4>{product.rating}</h4>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
