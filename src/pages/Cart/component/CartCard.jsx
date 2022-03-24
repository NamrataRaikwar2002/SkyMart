import React from 'react'

export const CartCard = (props) => {
  return (
    <div className=" horizontal_card cartHorizontalCard">
      <section className="horizontal_img_section">
        <img className="img1 horizontal_img" src={props.productImg} />
        <div className="card_title horizontal_text">
          <h3 className="heading">{props.title}</h3>
          <div className="mrp">
            <h3>₹{props.price}</h3>
            <s>₹{props.prePrice}</s>
          </div>
          <p className="green">{props.discount}</p>
          <small>
            Quantity:
            <button className="quantity_btn decrease_btn">-</button>
            <input type="text" className="quantity_input" value="1" />
            <button className="quantity_btn">+</button>
          </small>
          <button className="horizontal_cart_btn">Remove From Cart</button>
          <button className="e_com_btn wishlist_btn">Move to Wishlist</button>
        </div>
      </section>
    </div>
  )
}
