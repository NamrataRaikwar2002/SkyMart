import React from 'react'
import './Navbar.css'

const Navbar = ({ LoginOrSignup }) => {
  return (
    <div className="nav_div">
      <nav className="navigation">
        <h2>SkyMart</h2>
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
          <a href="/product/product.html" className="navbar_link">
            Product
          </a>
          <a href="/Authentication/Login/Login.jsx">
            <button className="nav_btn navbar_link">{LoginOrSignup}</button>
          </a>
          <a href="/wishlist/wishlist.html">
            <i
              className="far fa-heart nav_icon wishlist_nav_icon"
              id="comIcon"
            ></i>
            <p className="wishlist_icon_home_badge icon_badge">0</p>
          </a>
          <a href="/cart/cart.html">
            <i className="fas fa-shopping-cart nav_icon cart_nav_icon"></i>
            <p className="cart_icon_home_badge icon_badge">0</p>
          </a>
        </aside>
      </nav>
    </div>
  )
}

export { Navbar }
