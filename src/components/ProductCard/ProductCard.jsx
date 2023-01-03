import React, { useEffect, useState } from 'react'
import './ProductCard.scss'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import rating from '../../imgs/rating.png'
import rupee from '../../imgs/bx-rupee.png'
import cartClr from '../../imgs/cart_clr.png'
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishList } from '../../redux/wish/wishSlice';
import { addToCart } from '../../redux/cart/cartSlice';

function ProductCard({ product }) {
    const { image, price, title, category, id } = product
    const [productHovered, setProductHovered] = useState(false)  
    const navigate = useNavigate()  
    const { wishList } = useSelector((state) => state.wish)
    const { cartProducts } = useSelector((state) => state.cart)
    const dispatch = useDispatch()
    
    // console.log(cartProducts);
    return (
        <div>
            <div 
                className="product_card"
                onMouseEnter={()=>setProductHovered(true)}
                onMouseLeave={()=>setProductHovered(false)}
            >
                <div className="card_top">
                    <figure>
                        <img src={image} alt="product_img" />
                    </figure>
                    <button
                        className='add_to_fav'
                        onClick={(e)=>{
                            dispatch(addToWishList(product))
                            alert('Succesfully added to Wishlist')
                            navigate('/wishpage')
                        }}
                    >
                        <FavoriteBorderIcon />
                    </button>
                    {
                        productHovered && (
                            <div className="hoverElement">
                                <Link
                                    to={`/product/${id}`}
                                >
                                    <RemoveRedEyeIcon />
                                </Link>                                     
                            </div>
                        )
                    }
                </div>
                <div className="card_btm">
                    <div className="left">
                        <h2>{title.replace(/ .*/, '')}</h2>
                        <span className="catname">{category}</span>
                    </div>
                    <div className="right">
                        <img src={rating} alt="rating" className='rating' />
                        <span className="price">
                            <img src={rupee} alt="" />
                            {price}
                        </span>
                        <button
                            className="add_to_cart_btn"
                            onClick={()=>{
                                dispatch(addToCart({product, numberOfProducts:1}))
                                navigate('/cartpage')
                            }}
                        >
                            <img src={cartClr} alt="cart" />
                            <span>Add to cart</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard