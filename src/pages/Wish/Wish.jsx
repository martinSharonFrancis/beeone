import React from 'react'
import { useSelector } from 'react-redux'
import ProductFeed from '../../components/ProductFeed/ProductFeed'
import './Wish.scss'

function Wish() {
  const { wishList, wishListLength } = useSelector((state) => state.wish)

  console.log(wishList);

  return (
    <div className="wish_page">
      <div className="container" >
        <div className="head">
          <h1>My Wishlist</h1>
          <div className="count">
            <span className="num">{wishListLength}</span>
            items
          </div>
        </div>
        {
          wishList.length ? <ProductFeed products={wishList} fromWishPage={true} /> : <h1>Please add some product to your wish list</h1>
          // wishList.length ? wishList.map((product)=><ProductFeed products={product} />) : 'Nothing to show'
        }
      </div>
    </div>
  )
}

export default Wish