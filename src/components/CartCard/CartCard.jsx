import React, { useEffect, useState } from 'react'
import './CartCard.scss'
import productImg from '../../imgs/product_img.png'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../../redux/cart/cartSlice';

function CartCard({cartItem}) {
  const dispatch = useDispatch();
  // const [selectedNumOfProducts, setSelectedNumOfProducts] = useState(cartItem.numberOfProducts)
  useEffect(()=>{

  })
  return (
    <div className='cartCard'>
      <figure>
        <img src={cartItem.image} alt="" />
      </figure>
      <h3>{cartItem.title}</h3>
      <div className="quantity">
        <button onClick={ ()=>{dispatch(removeFromCart({product:cartItem}))} }>-</button>
        <h2>{cartItem.numberOfProducts}</h2>
        <button onClick={ ()=>{dispatch(addToCart({product:cartItem}))} }>+</button>
      </div>
      <div className="price">
        price: 
        <span>{cartItem.price * cartItem.numberOfProducts}</span>
      </div>
      <div className="btn_group">
        <button onClick={()=>{dispatch(removeFromCart({product:cartItem, type:'complete'}))}}>Remove from cart</button>
      </div>
    </div>
  )
}

export default CartCard