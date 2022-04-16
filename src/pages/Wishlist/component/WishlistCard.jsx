import React from 'react'
import { useProduct } from '../../../hooks/context/productContext'

export const WishlistCard = () => {
  const { productState, productDispatch } = useProduct()
  const { wishList } = productState

  return (
    <>
      {wishList.map(
        ({
          productImg,
          price,
          title,
          prePrice,
          rating,
          discount,
          quantity,
          _id,
        }) => {
          return (
            <div className="product_list_item" key={_id}>
              <img className="productListImg" src={productImg} alt="images" />
              <div className="card_detail">
                <button
                  className="wishlist_icon"
                  onClick={() =>
                    productDispatch({
                      type: 'REMOVE_FROM_WISHLIST',
                      payload: { _id: _id },
                    })
                  }
                >
                  <i className="fa-solid fa-heart"></i>
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
              <button
                className="card_btn primary_selected_btn productAddToCartbtn"
                onClick={() =>
                  productDispatch({
                    type: 'MOVE_TO_CART',
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
                Move to Cart
              </button>
            </div>
          )
        },
      )}
    </>
  )
}
