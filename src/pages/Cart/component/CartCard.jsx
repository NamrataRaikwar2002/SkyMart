import React from 'react'
import { useProduct } from '../../../hooks/context/productContext'

export const CartCard = () => {
  const { productState, productDispatch } = useProduct()
  const { cartList } = productState

  return (
    <>
      {cartList.map(
        ({
          productImg,
          price,
          title,
          prePrice,
          rating,
          discount,
          _id,
          quantity,
        }) => {
          return (
            <div className="horizontal_card cartHorizontalCard" key={_id}>
              <section className="horizontal_img_section">
                <img className="img1 horizontal_img" src={productImg} />
                <div className="card_title horizontal_text">
                  <h3 className="heading">{title}</h3>
                  <div className="mrp">
                    <h3>₹{price}</h3>
                    <s>₹{prePrice}</s>
                  </div>
                  <p className="green">{discount}</p>
                  <small className="quantity_div">
                    Quantity:
                    <button
                      className="quantity_btn decrease_btn"
                      onClick={() =>
                        productDispatch({
                          type: 'DECREASE_QUANTITY',
                          payload: { _id: _id, quantity: quantity },
                        })
                      }
                    >
                      -
                    </button>
                    <p className="quantity_input">{quantity}</p>
                    {/* <p type="text" className="quantity_input" value={quantity} /> */}
                    <button
                      className="quantity_btn"
                      onClick={() =>
                        productDispatch({
                          type: 'INCREASE_QUANTITY',
                          payload: { _id: _id, quantity: quantity },
                        })
                      }
                    >
                      +
                    </button>
                  </small>
                  <button
                    className="horizontal_cart_btn"
                    onClick={() =>
                      productDispatch({
                        type: 'REMOVE_FROM_CART',
                        payload: { _id: _id },
                      })
                    }
                  >
                    Remove From Cart
                  </button>
                  <button
                    className="e_com_btn wishlist_btn"
                    onClick={() =>
                      productDispatch({
                        type: 'MOVE_TO_WISHLIST',
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
                    Move to Wishlist
                  </button>
                </div>
              </section>
            </div>
          )
        },
      )}
    </>
  )
}
