import React from 'react'
import { useSelector } from 'react-redux'
import ProductFeed from '../../components/ProductFeed/ProductFeed'

function Wish() {
  const { wishList } = useSelector((state) => state.wish)

  console.log(wishList);

  return (
    <div className="container" style={{paddingTop: '80px'}}>
      {
        wishList.length ? <ProductFeed products={wishList} />: <h1>Please add some product to your wish list</h1>
        // wishList.length ? wishList.map((product)=><ProductFeed products={product} />) : 'Nothing to show'
      }
    </div>
  )
}

export default Wish