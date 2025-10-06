import React from 'react';
import ProductCard from './ProductCard';
import './ProductList.css';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      <h2 className="product-list-title">Our Products</h2>
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            discount={product.discount}
            availability={product.availability}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;