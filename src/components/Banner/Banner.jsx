import React from 'react'
import './Banner.scss'
import bannerImg from '../../imgs/beeone-banner.png'
function Banner() {
  return (
    <div className="banner">
      <div className="container">
        <img src={bannerImg} alt="banner" />
      </div>
    </div>
  )
}

export default Banner