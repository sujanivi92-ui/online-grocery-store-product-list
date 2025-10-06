import React from 'react';
import './ProductCard.css';

const ProductCard = ({ name, price, discount, availability, image }) => {
  // Calculate final price after discount
  const finalPrice = (price - discount).toFixed(2);
  
  return (
    <div className="product-card">
      {/* Product Image */}
      <div className="product-image-container">
        <img 
          src={image} 
          alt={name} 
          className="product-image"
        />
        {/* Sale Badge - Conditional Rendering */}
        {discount > 0 && (
          <span className="sale-badge">On Sale</span>
        )}
      </div>

      {/* Product Details */}
      <div className="product-details">
        <h3 className="product-name">{name}</h3>
        
        {/* Price Display */}
        <div className="price-section">
          {discount > 0 ? (
            <>
              <span className="original-price">${price.toFixed(2)}</span>
              <span className="final-price">${finalPrice}</span>
              <span 
                className="discount-amount"
                style={{ color: 'red' }}
              >
                Save ${discount.toFixed(2)}
              </span>
            </>
          ) : (
            <span className="final-price no-discount">${price.toFixed(2)}</span>
          )}
        </div>

        {/* Availability - Conditional Rendering */}
        <div className={`availability ${!availability ? 'out-of-stock' : ''}`}>
          {availability ? 'In Stock' : 'Out of Stock'}
        </div>

        {/* Add to Cart Button */}
        <button 
          className="add-to-cart-btn"
          disabled={!availability}
        >
          {availability ? 'Add to Cart' : 'Notify Me'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;