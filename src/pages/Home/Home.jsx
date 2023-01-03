import React, { useEffect } from 'react'
import Banner from '../../components/Banner/Banner'
import Loader from '../../components/Loader/Loader'
import ProductFeed from '../../components/ProductFeed/ProductFeed'
import Filter from '../../components/Filter/Filter'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/product/productSlice'

import './Home.scss'
import { Outlet } from 'react-router-dom'

function Home() {
  const dispatch = useDispatch();
  const { products, loader } = useSelector((state) => state.product)
  const { categoryProducts, catLoader } = useSelector((state) => state.category)
  useEffect(() => {
    dispatch(fetchProducts());
  }, [])

  const RenderProducts = () => {
    // { loader ? <Loader/> : <ProductFeed products={ products } /> }
    if (categoryProducts.length) {
      return loader ? <Loader /> : <ProductFeed products={categoryProducts} />
    }
    else {
      return catLoader ? <Loader /> : <ProductFeed products={products} />
    }
  }
  return (
    <>
      <Outlet />
      <Banner />
      <div className="container">
        <div className="content_area">
          <div className="left">
            <Filter />
          </div>
          <div className="right">
            {RenderProducts()}
          </div>
        </div>
      </div>
    </>
  )
}

export default Home