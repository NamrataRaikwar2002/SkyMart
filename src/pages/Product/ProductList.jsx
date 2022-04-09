import React, { useEffect, useState } from 'react'
import { Navbar } from '../../components'
import './Product.css'
import { Filter } from './component/Filter'
import axios from 'axios'
import { useFilter } from '../../hooks/context/filterContext'
import { useProduct } from '../../hooks/context/productContext'
import {
  PriceFilter,
  RatingFilter,
  SortFilter,
  CategoryFilter,
} from '../../utilities'
import { Link } from 'react-router-dom'

export const ProductList = () => {
  const [res, setRes] = useState([])
  const [loader, setloader] = useState('')
  const { productState, productDispatch } = useProduct()
  const { wishList, cartList } = productState

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
          <div className="product_list">
            <h3 className="productHeading">
              Total Products: {sortedItems.length}
            </h3>
            <h1 className="noItemMsg loader">{loader}</h1>
            {priceValue == 0 ? (
              <h1 className="noItemMsg">No Products Available </h1>
            ) : (
              <div className="product_list_section ">
                {sortedItems.map(
                  ({
                    productImg,
                    price,
                    title,
                    prePrice,
                    discount,
                    rating,
                    quantity,
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
                          <button
                            className="wishlist_icon"
                            onClick={() =>
                              productDispatch({
                                type: 'ADD_TO_WISHLIST',
                                payload: {
                                  productImg: productImg,
                                  price: price,
                                  title: title,
                                  prePrice: prePrice,
                                  discount: discount,
                                  rating: rating,
                                  _id: _id,
                                },
                              })
                            }
                          >
                            {wishList.find((item) => item._id === _id) ? (
                              <i className="fa-solid fa-heart"></i>
                            ) : (
                              <i className="far fa-heart"></i>
                            )}
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

                        {cartList.find((item) => item._id === _id) ? (
                          <Link to="/cart-page">
                            <button className="card_btn primary_selected_btn productAddToCartbtn goToCart">
                              Go to Cart
                            </button>
                          </Link>
                        ) : (
                          <button
                            className="card_btn primary_selected_btn productAddToCartbtn"
                            onClick={() =>
                              productDispatch({
                                type: 'ADD_TO_CART',
                                payload: {
                                  productImg: productImg,
                                  price: price,
                                  title: title,
                                  prePrice: prePrice,
                                  discount: discount,
                                  rating: rating,
                                  quantity: quantity,
                                  _id: _id,
                                },
                              })
                            }
                          >
                            Add to Cart
                          </button>
                        )}
                      </div>
                    )
                  },
                )}
              </div>
            )}
          </div>
        </section>
      </main>
    </>
  )
}
