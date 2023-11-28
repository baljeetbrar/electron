import React from 'react'
import Product from './Product'

const ProductList = ({products,layoutType, showDescription,showOriginalPrice,showDiscountPrice, showRating}) => {
  if (!products) {
    return null; // or display a loading message, empty state, etc.
  }

  return (
    <ul className={`product-list-section d-flex ${layoutType === 'flex-row' ? 'flex-row' : 'flex-column'}`}>
      {products.map((product) => (
        <li key={product.id} className="d-flex product-list">
          <Product product={product} 
           showOriginalPrice={showOriginalPrice}
           showDiscountPrice={showDiscountPrice}
           showDescription={showDescription}
           showRating={showRating}
          />
        </li>
      ))}
    </ul>
  )
}

export default ProductList