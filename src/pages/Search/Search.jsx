import React, { useEffect } from 'react'
// import './Home.scss'
import Banner from '../../components/Banner/Banner'
import ProductFeed from '../../components/ProductFeed/ProductFeed'
import Filter from '../../components/Filter/Filter'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/product/productSlice'
import Loader from '../../components/Loader/Loader'

function Seacrh() {
    const dispatch = useDispatch();
    const { loader, searchResult } = useSelector((state) => state.product)
    const { categoryProducts, catLoader } = useSelector((state) => state.category)
    useEffect(() => {
        dispatch(fetchProducts());
    }, [])
    const RenderProducts = () => {
        // { loader ? <Loader/> : <ProductFeed products={ products } /> }
        if (categoryProducts.length) {
            return loader ? <Loader /> : <ProductFeed products={categoryProducts} />
            // return <ProductFeed products={categoryProducts} />
        }
        else {
            return catLoader ? <Loader /> : <ProductFeed products={searchResult} />
            // return <ProductFeed products={searchResult} />
        }
    }

    return (
        <>
            <Banner />
            <div className="container">
                <div className="content_area">
                    <div className="left">
                        <Filter />
                    </div>
                    <div className="right">
                        {/* {searchResult.length ? <ProductFeed products={searchResult} /> : 'No result Found'} */}
                        {RenderProducts()}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Seacrh