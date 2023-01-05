import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import rupee from '../../imgs/bx-rupee.png'
import cart from '../../imgs/cart.svg'
import close from '../../imgs/close.svg'
import rating from '../../imgs/rating.png'
import './ProductDetail.scss'
import api from '../../api'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../redux/cart/cartSlice'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

function ProductDetail() {
    const navigate = useNavigate()
    const {id} = useParams()
    const [product, setProduct] = useState([])
    const dispatch = useDispatch()

    useEffect(()=>{
        api.get(`products/${id}`).then((res)=>{
            setProduct(res.data)
        })
    }, [])

    const {title, category, description, image, price} = product

    return (
        <div className="modal">
            <div className="product_detail">
                <button onClick={() => navigate(-1)} className='close_btn'><img src={close} alt="" /></button>
                <div className="left">
                    <img src={image} alt="" />
                </div>
                <div className="right">
                    <div className="content">
                        <h1>{title}</h1>
                        <p className="cat">{category}</p>
                        <img src={rating} alt="rating" className='rating' />
                        <div className="price">
                            <img src={rupee} alt="" /> {price}
                        </div>
                        <div className="description">
                            <p>
                                {
                                    description
                                }
                            </p>
                        </div>
                        <div className="btn_group">
                            <div>
                                <button className='add_to_cart_btn' onClick={()=>{
                                    dispatch(addToCart({product}))
                                    navigate('/cartpage')
                                }}>
                                    <ShoppingCartOutlinedIcon fontSize='inherit' htmlColor='#DE8500' />
                                    <span>Add to cart</span>
                                </button>
                            </div>
                            <div>
                                <button className="buy_now">
                                    <span>Buy Now</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <div>This is modal</div>
             */}
        </div>
    )
}

export default ProductDetail