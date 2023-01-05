import React, { useEffect } from 'react'
import ProductCard from '../ProductCard/ProductCard'

function ProductFeed({products, fromWishPage}) {
  return (
    <div className="product_feed">
      {products.map((product) => <ProductCard key={product.id} product={product} fromWishPage={fromWishPage}  />)}
    </div>
  )
}

export default ProductFeed