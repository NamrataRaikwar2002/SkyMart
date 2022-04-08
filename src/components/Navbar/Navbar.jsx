import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar = ({ LoginOrSignup, address }) => {
  return (
    <div className="nav_div">
      <nav className="navigation">
    <Link to='/'>
        <h2 className='textForPrimaryColor'>SkyMart</h2></Link>
        <div className="search_icon">
          <input
            type="text"
            className="search_bar"
            placeholder="Search.."
            name="search"
          />
          <i className="fa fa-search"></i>
        </div>
        <aside className="nav_rightside">

          <Link to='/product-list' className="navbar_link textForPrimaryColor productsText">Products</Link>
          <Link to={address}>
            <button className="nav_btn navbar_link">{LoginOrSignup}</button>
          </Link>
          <Link to='/wishlist-page'>
            <i
              className="far fa-heart nav_icon wishlist_nav_icon"
              id="comIcon"
            ></i>
            <p className="wishlist_icon_home_badge icon_badge">0</p>
          </Link>
          <Link to='/cart-page'>
            <i className="fas fa-shopping-cart nav_icon cart_nav_icon"></i>
            <p className="cart_icon_home_badge icon_badge">0</p>
          </Link>
        </aside>
      </nav>
    </div>
  )
}

export { Navbar }
