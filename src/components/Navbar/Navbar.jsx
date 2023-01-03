import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.scss'
import { useDispatch } from 'react-redux';
import { getSearchRersult } from '../../redux/product/productSlice';
import logo from '../../imgs/logo.svg'
import searchIcon from '../../imgs/search.svg'
import notificationIcon from '../../imgs/notification.svg'
import userThumb from '../../imgs/user.png'

function Navbar() {
  const [searchTerm, setSearchTerm] = useState('')
  const dispatch = useDispatch()
  // const {searchResult} = useSelector((state)=>state.product)
  const navigate = useNavigate()

  useEffect(()=>{
    dispatch(getSearchRersult(searchTerm))
    // console.log(searchResult);
  }, [searchTerm])
  return (
    <div className="navbar">
        <div className="nav_wrap">
          <div className="left">
            <Link to="/" className='logo'><img src={logo} alt="logo" /></Link>
            <div className="search">
              <img src={searchIcon} alt="search" />
              <input 
                type="text"
                placeholder='Seacrh Here'
                onFocus={()=>navigate('/search')}
                onChange={e=>setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          <div className="right">
            <ul className="links">
              <li>
                <Link to='/wishpage'>My Wishlist</Link>
              </li>
              <li>
                <Link to='/cartpage'>My Cart</Link>
              </li>
            </ul>
            <div className="notification">
                <img src={notificationIcon} alt="" />
            </div>
            <div className="user">
              <div className="user_thub"><img src={userThumb} alt="" /></div>
              <div className="user_txt">
                <span className="wlcome_note">Welcome</span><br />
                <span className="name">Jane Doe</span>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Navbar