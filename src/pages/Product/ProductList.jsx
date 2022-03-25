import React from 'react'
import { Navbar } from '../../components'
import './Product.css'
import { products } from '../../backend/db/products'
import { Filter } from './component/Filter'
import {Link} from 'react-router-dom'

export const ProductList = () => {
  return (
    
    <>
    <main className="product_page">
      <Navbar LoginOrSignup="Login" address='/login-page' />
        <section class="all_product content">
        <Filter />
          <aside className="product_list">
          <h3 className='productHeading'>Showing All Products</h3>
            <section className="product_list_section">
              {products.map((productItem) => {
                return (
                  <div className="product_list_item">
                    <img
                      className="productListImg"
                      src={productItem.productImg} alt='images'
                    />
                    <div className="card_detail">
                    <button className='wishlist_icon'>
                      <i className="far fa-heart"></i>
                    </button>
                      <p>{productItem.title}</p>
                      <div className="mrpdiv">
                        <h3>₹{productItem.price}</h3>
                        <s>₹{productItem.prePrice}</s>
                      </div>
                      <div className="discountRating">
                        <p className="green">{productItem.discount}</p>

                        <p className="ratingStarPara">
                          {productItem.rating}
                          <i class="fas fa-star star_icon"></i>
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
