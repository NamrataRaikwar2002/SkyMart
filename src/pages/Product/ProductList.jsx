import React, { useEffect, useState } from 'react'
import { Navbar } from '../../components'
import './Product.css'
import { Filter } from './component/Filter'
import axios from 'axios'

export const ProductList = () => {
  const [res, setRes] = useState([])

  const dataFetch = async () => {
    const response = await axios.get('/api/products')
    setRes(response.data.products)
  }

  useEffect(dataFetch, [])

  return (
    <>
      <main className="product_page">
        <Navbar LoginOrSignup="Login" address="/login-page" />
        <section className="all_product content">
          <Filter />
          <aside className="product_list">
            <h3 className="productHeading">Showing All Products</h3>
            <section className="product_list_section">
              {res.map(({productImg,price,title,prePrice,discount,rating}) => {
                return (
                  <div className="product_list_item">
                    <img
                      className="productListImg"
                      src={productImg}
                      alt="images"
                    />
                    <div className="card_detail">
                      <button className="wishlist_icon">
                        <i className="far fa-heart"></i>
                      </button>
                      <p>{title}</p>
                      <div className="mrpdiv">
                        <h3>₹{price}</h3>
                        <s>₹{prePrice}</s>
                      </div>
                      <div className="discountRating">
                        <p className="green">{discount}</p>

                        <p className="ratingStarPara">
                          {rating}
                          <i className="fas fa-star star_icon"></i>
                        </p>
                      </div>
                    </div>
                    <button className="card_btn primary_selected_btn productAddToCartbtn">
                      Add to Cart
                    </button>
                  </div>
                )
              })}
            </section>
          </aside>
        </section>
      </main>
    </>
  )
}
