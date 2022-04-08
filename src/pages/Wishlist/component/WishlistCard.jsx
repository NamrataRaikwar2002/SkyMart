import React from 'react'
import {Link} from 'react-router-dom'

export const WishlistCard = (props) => {
  return (
    <div className="product_list_item">
      <img className="productListImg" src={props.productImg} alt="images" />
      <div className="card_detail">
         <button className='wishlist_icon'>
         <i className="fa-solid fa-heart"></i>
         </button> 
        <p>{props.title}</p>
        <div className="mrpdiv">
          <h3>₹{props.price}</h3>
          <s>₹{props.prePrice}</s>
        </div>
        <div className="discountRating">
          <p className="green">{props.discount}</p>

          <p className="ratingStarPara">
            {props.rating}
            <i className="fas fa-star star_icon"></i>
          </p>
        </div>
      </div>
      <Link to='/wishlist-page'>
        <button className="card_btn primary_selected_btn productAddToCartbtn" onClick={() => console.log('wishlist')}>
          Move to Cart
        </button>
      </Link>
    </div>
  )
}
