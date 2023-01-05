import React, { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.scss'
import { useDispatch } from 'react-redux';
import { getSearchRersult } from '../../redux/product/productSlice';
import logo from '../../imgs/logo.svg'
import searchIcon from '../../imgs/search.svg'
import notificationIcon from '../../imgs/notification.svg'
import userThumb from '../../imgs/user.png'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useViewport } from '../../utils/useViewport';

function Navbar() {
  const [searchTerm, setSearchTerm] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  // const desktopNavbar = useRef()
  // const mobileNavbar = useRef()
  const winWidth = useViewport()

  console.log(winWidth);

  useEffect(() => {
    dispatch(getSearchRersult(searchTerm))
  }, [searchTerm])

  
  return (
    <>
      {
        winWidth < 991 ? (
          <div className="navbar mobile">
            <div className="nav_wrap">
              <div className="left">
                <Link to="/" className='logo'><img src={logo} alt="logo" /></Link>
              </div>
              <div className="right">
                <ul className="links">
                  <li>
                    <Link to='/wishpage'><FavoriteBorderIcon fontSize='inherit' /></Link>
                  </li>
                  <li>
                    <Link to='/cartpage'><ShoppingCartOutlinedIcon fontSize='inherit' /></Link>
                  </li>
                </ul>
                <div className="search">
                  <img src={searchIcon} alt="search" />
                  <input
                    type="text"
                    placeholder='Seacrh Here'
                    onFocus={() => navigate('/search')}
                    onChange={e => setSearchTerm(e.target.value)}
                  />
                </div>
                <div className="user">
                  <div className="user_thub"><img src={userThumb} alt="" /></div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="navbar desk">
            <div className="nav_wrap">
              <div className="left">
                <Link to="/" className='logo'><img src={logo} alt="logo" /></Link>
                <div className="search">
                  <img src={searchIcon} alt="search" />
                  <input
                    type="text"
                    placeholder='Seacrh Here'
                    onFocus={() => navigate('/search')}
                    onChange={e => setSearchTerm(e.target.value)}
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
    </>
  )
}

export default Navbar