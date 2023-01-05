import React from 'react'
import { useSelector } from 'react-redux'
import CartCard from '../../components/CartCard/CartCard'
import './Cart.scss'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CurrencyRupeeOutlinedIcon from '@mui/icons-material/CurrencyRupeeOutlined';

function Cart() {
  // const {total} = useSelector((state)=>state.cart)
  const { cartProducts, total, totalProducts } = useSelector((state) => state.cart)
  return (
    <div className="cart_page">
      <div className="container">
        {/* {
        cartProducts.length ? cartProducts.map((cartItem)=><CartCard key={cartItem.id} cartItem={cartItem} />) : <h1>Feel free to add products to Cart</h1>
      }
      {
        cartProducts.length ? (
          <h1 style={{textAlign: 'right'}}>Total Price: {total}</h1>
        ) : ''
      } */}
        <div className="cart_content_area">
          <div className="left">
            {
              cartProducts.length ? cartProducts.map((cartItem) => <CartCard key={cartItem.id} cartItem={cartItem} />) : <h1>Feel free to add products to Cart</h1>
            }
          </div>
          <div className="right">
              <div className="my_cart">
                  <div className="carts_num">
                      <h3>My Cart <ShoppingCartOutlinedIcon htmlColor='#0B28B7' fontSize='21px' /></h3>
                      <span>Get {totalProducts} products at</span>
                  </div>
                  <div className="prize">
                    <CurrencyRupeeOutlinedIcon fontSize='44px' htmlColor='#262626' />
                    <span>{total}</span>
                  </div>
                  <button className="place_order">
                    <span>Place order</span>
                  </button>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart