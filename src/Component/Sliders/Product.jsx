import React from 'react';
import productsDatabase from '../ProductDatabase/ProductDatabase';

const Product = ({ product, showDescription,showOriginalPrice,showDiscountPrice, showRating }) => {
  return (
    <div className="product d-flex">
      <img src={product.image} alt={product.productName} className="product-image" />
      <div className="product-details">
        <h3 className="product-name">{product.productName}</h3>
        {showDescription && <p className="product-description">{product.description}</p>}
      <div className="price-section d-flex flex-row ">
        {showOriginalPrice && <del className="original-price original-price-color">{product.originalPrice}</del>}
        {showDiscountPrice  && <strong className="discounted-price discounted-price-color"> {product.discountedPrice}</strong>}
      </div>
        {showRating && <p className="product-rating">Rating: {product.rating}</p>}
      </div>
    </div>
  );
};

export default Product;