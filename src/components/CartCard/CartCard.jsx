import React, { useEffect, useState } from 'react'
import './CartCard.scss'
import productImg from '../../imgs/product_img.png'
import { useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../../redux/cart/cartSlice';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { addToWishList } from '../../redux/wish/wishSlice';
import { useNavigate } from 'react-router-dom';

function CartCard({ cartItem }) {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  // const [selectedNumOfProducts, setSelectedNumOfProducts] = useState(cartItem.numberOfProducts)
  useEffect(() => {

  })
  function pad(d) {
    return (d < 10) ? '0' + d.toString() : d.toString();
  }
  return (
    <div className='cartCard'>
      <button
        className='add_to_fav'
        onClick={(e) => {
          dispatch(addToWishList(cartItem))
          alert('Succesfully added to Wishlist')
          // navigate('/wishpage')
        }}
      >
        <FavoriteBorderIcon />
      </button>
      <div className="left">
        <figure>
          <img src={cartItem.image} alt="" />
        </figure>
        <div className="title">
          <h2>{cartItem.title.replace(/ .*/, '')}</h2>
          <span className="cat">{cartItem.category}</span>
        </div>
      </div>
      <div className="center">
        <div className="quantity">
          <button onClick={() => { dispatch(removeFromCart({ product: cartItem })) }}><RemoveOutlinedIcon fontSize='inherit' htmlColor='#262626' /></button>
          <span className='num_of_product'>{pad(cartItem.numberOfProducts)}</span>
          <button onClick={() => { dispatch(addToCart({ product: cartItem })) }}><AddOutlinedIcon fontSize='inherit' htmlColor='#262626' /></button>
        </div>
      </div>
      <div className="right">
        <div className="price_calc">
          {cartItem.numberOfProducts} <CloseOutlinedIcon htmlColor='#262626' fontSize='inherit' /> <CurrencyRupeeOutlinedIcon htmlColor='#262626' fontSize='inherit' />{cartItem.price}
        </div>
        <button 
          className="romove_btn"
          onClick={()=>{dispatch(removeFromCart({product:cartItem, type:'complete'}))}}
        >
          <ShoppingCartOutlinedIcon fontSize='inherit' />
          <span>Remove</span>
        </button>
      </div>      
    </div>
  )
}

export default CartCard