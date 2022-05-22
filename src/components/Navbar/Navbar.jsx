import React from 'react'
import './Navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { useProduct } from '../../hooks/context/productContext'
import { toast } from 'react-toastify'
import { useAuth } from '../../hooks/context/authContext'

const Navbar = () => {
  const navigate = useNavigate()
  const { productState } = useProduct()
  const { cart, wishList } = productState

  const { userDetail, userDispatch } = useAuth()
  const { token } = userDetail

  const logutHandler = () => {
    localStorage.removeItem('user')
    localStorage.removeItem('token')
    userDispatch({ type: 'LOGOUT' })
    toast.success('LoggedOut successfully')
    navigate('/')
  }

  return (
    <div className="nav_div">
      <nav className="navigation">
        <Link to="/" className="appNameWithIcon">
          <img src="/fevicon.ico" alt="fevicon" className="feviconImg" />
          <h2 className="textForPrimaryColor">SkyMart</h2>
        </Link>
        <div className="search_icon">
          <input
            type="text"
            className="search_bar"
            placeholder="Search..."
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
          {token ? (
            <button
              className="nav_btn navbar_link logoutBtn"
              onClick={logutHandler}
            >
              Logout
            </button>
          ) : (
            <Link to="/login-page">
              <button className="nav_btn navbar_link">Login</button>
            </Link>
          )}
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
            <p className="cart_icon_home_badge icon_badge">{cart.length}</p>
          </Link>
        </aside>
      </nav>
    </div>
  )
}

export { Navbar }
