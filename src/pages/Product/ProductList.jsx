import React, { useEffect, useState } from 'react'
import { Navbar } from '../../components'
import './Product.css'
import { Filter } from './component/Filter'
import axios from 'axios'
import { useFilter } from '../../hooks/context/filterContext'
import {
  PriceFilter,
  RatingFilter,
  SortFilter,
  CategoryFilter,
} from '../../utilities'

export const ProductList = () => {
  const [res, setRes] = useState([])
  const [loader, setloader] = useState('')

  const { filterState } = useFilter()
  const { priceValue } = filterState

  const dataFetch = async () => {
    try {
      setloader('Loading....')
      const response = await axios.get('/api/products')
      setRes(response.data.products)
      setloader('')
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(dataFetch, [])

  const priceRangeItems = PriceFilter(res, filterState)
  const ratingItems = RatingFilter(priceRangeItems, filterState)
  const categoryItem = CategoryFilter(ratingItems, filterState)
  const sortedItems = SortFilter(categoryItem, filterState)

  return (
    <>
      <main className="product_page">
        <Navbar LoginOrSignup="Login" address="/login-page" />
        <section className="all_product content">
          <Filter />
          <aside className="product_list">
            <h3 className="productHeading">
              Total Products: {sortedItems.length}
            </h3>
            <h1 className="noItemMsg loader">{loader}</h1>
            <h1 className="noItemMsg ">
              {priceValue == 0 ? 'No Products Available' : ''}
            </h1>
            <section className="product_list_section">
              {sortedItems.map(
                ({
                  productImg,
                  price,
                  title,
                  prePrice,
                  discount,
                  rating,
                  _id,
                }) => {
                  return (
                    <div className="product_list_item" key={_id}>
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
                },
              )}
            </section>
          </aside>
        </section>
      </main>
    </>
  )
}
