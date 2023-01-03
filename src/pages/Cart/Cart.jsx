import React from 'react'
import { useSelector } from 'react-redux'
import CartCard from '../../components/CartCard/CartCard'

function Cart() {
  const { cartProducts } = useSelector((state) => state.cart)
  return (
    <div className="container" style={{paddingTop: '80px'}}>
      {
        cartProducts.length ? cartProducts.map((cartItem)=><CartCard key={cartItem.id} cartItem={cartItem} />) : <h1>Feel free to add products to Cart</h1>
      }
    </div>
  )
}

export default Cart