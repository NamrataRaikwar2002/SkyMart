import React from 'react'
import { product11Img } from '../../assets'
import { Navbar } from '../../components'
import './Cart.css'
import { CartCard } from './component/CartCard'


export const Cart = () => {
  return (
    <main className="cart_page">
        
        <Navbar 
        LoginOrSignup='Login'
        address='/login-page'

        />
        <section className="cart_management content">
            <div className="section_background">
                <h2>MY CART(1)</h2>
                <div className="cart_price">
                   <CartCard 
                       productImg={product11Img}
                       title='THE MAN COMPANY Non-Gas Body fragrance'
                       price='405'
                       prePrice='689'
                       discount='45% off'   
                   />

                    <div className="price_details_div">
                        <h3>PRICE DETAILS</h3>
                        <hr/>
                        <div className="price_details">
                            <div className="each_price_detail price">Price(1 item)
                                <p>&#8377;2,999</p>
                            </div>

                            <div className="each_price_detail discount"> Discount
                                <p>-&#8377;1,749</p>

                            </div>

                            <div className=" each_price_detail delivery_charges">Delivery Charges
                                <p className="green">Free</p>
                            </div>
                        </div>
                        <hr/>
                        <div className="total_amount">
                            <h4>TOTAL AMOUNT</h4>
                            <h4>₹1,250</h4>
                        </div>
                        <hr/>
                        <p className="green">You will save ₹1,749 on this order</p>
                        <div className="place_order">
                            <button className="e_com_btn primary_selected_btn">PLACE ORDER</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main>
  )
}
