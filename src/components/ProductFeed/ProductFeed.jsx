import React, { useEffect } from 'react'
import ProductCard from '../ProductCard/ProductCard'

function ProductFeed({products}) {
  return (
    <div className="product_feed">
      {products.map((product) => <ProductCard key={product.id} product={product} />)}
    </div>
  )
}

export default ProductFeed