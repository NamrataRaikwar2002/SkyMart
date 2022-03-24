import React from 'react'

export const WishlistCard = (props) => {
  return (
    <div className="product_list_item">
      <img className="productListImg" src={props.productImg} alt="images" />
      <div className="card_detail">
        <i class="fa-solid fa-heart wishlist_icon"></i>
        <p>{props.title}</p>
        <div className="mrpdiv">
          <h3>₹{props.price}</h3>
          <s>₹{props.prePrice}</s>
        </div>
        <div className="discountRating">
          <p className="green">{props.discount}</p>

          <p className="ratingStarPara">
            {props.rating}
            <i class="fas fa-star star_icon"></i>
          </p>
        </div>
      </div>
      <a href="">
        <button className="card_btn primary_selected_btn productAddToCartbtn">
          Move to Cart
        </button>
      </a>
    </div>
  )
}