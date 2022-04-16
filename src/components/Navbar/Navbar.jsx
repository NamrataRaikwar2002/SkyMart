import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { useProduct } from '../../hooks/context/productContext'
import { feviconImg } from '../../assets'

const Navbar = ({ LoginOrSignup, address }) => {
  const { productState } = useProduct()
  const { cartList, wishList } = productState
  return (
    <div className="nav_div">
      <nav className="navigation">
        <Link to="/" className="appNameWithIcon">
          <img src='/fevicon.ico' alt="fevicon" className="feviconImg" />
          <h2 className="textForPrimaryColor">SkyMart</h2>
        </Link>
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
          <Link
            to="/product-list"
            className="navbar_link textForPrimaryColor productsText"
          >
            Products
          </Link>
          <Link to={address}>
            <button className="nav_btn navbar_link">{LoginOrSignup}</button>
          </Link>
          <Link to="/wishlist-page">
            <i
              className="far fa-heart nav_icon wishlist_nav_icon"
              id="comIcon"
            ></i>
            <p className="wishlist_icon_home_badge icon_badge">
              {wishList.length}
            </p>
          </Link>
          <Link to="/cart-page">
            <i className="fas fa-shopping-cart nav_icon cart_nav_icon"></i>
            <p className="cart_icon_home_badge icon_badge">{cartList.length}</p>
          </Link>
        </aside>
      </nav>
    </div>
  )
}

export { Navbar }
