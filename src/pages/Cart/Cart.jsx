import React from 'react'
import { Navbar } from '../../components'
import './Cart.css'
import { CartCard } from './component/CartCard'
import { useProduct } from '../../hooks/context/productContext'
import { emptyCart } from '../../assets';
import {Link} from 'react-router-dom';

export const Cart = () => {
const {productState} = useProduct();
const {cartList} = productState; 
const totalPrice = cartList.reduce((total, item) => total =  (total + Number(item.prePrice))*item.quantity,0)
const totalDiscount = totalPrice*45/100

  return (
    <main className="cart_page">
        <Navbar 
        LoginOrSignup='Login'
        address='/login-page'

        />
        <section className="cart_management content">
            <h2 className='productHeading'>MY CART({cartList.length})</h2>
                {cartList.length >=1 ? 
                <>
            <div className="section_background">
                <div className='cartListDiv'>
                   <CartCard />
                </div>
                {/* <div className='priceImgDiv'> */}

                <div className="cart_price">

                    <div className="price_details_div">
                        <h3>PRICE DETAILS</h3>
                        <hr/>
                        <div className="price_details">
                            <div className="each_price_detail price">Price({cartList.length} item)
                                <p>₹{totalPrice}</p>
                            </div>
                            <div className="each_price_detail discount"> Discount
                                <p>-{totalDiscount}</p>
                            </div>
                            <div className=" each_price_detail delivery_charges">Delivery Charges
                                <p className="green">Free</p>
                            </div>
                        </div>
                        <hr/>
                        <div className="total_amount">
                            <h4>TOTAL AMOUNT</h4>
                            <h4>{totalPrice-totalDiscount}</h4>
                        </div>
                        <hr/>
                        <p className="green">You will save ₹{totalDiscount} on this order</p>
                        <div className="place_order">
                            <button className="e_com_btn primary_selected_btn">PLACE ORDER</button>
                        </div>
                    </div>
                </div>
            </div>
                </>
                : <>
                <div className='emptycartDiv'>
                <img src={emptyCart} alt="empty cart" className='emptyCartImg' />
                <p>
                <Link to='/product-list'>
                <button className='emptycartBtn card_btn'>Shop Now</button>
                </Link>
                </p>
                </div>
                </>
            }


        </section>

    </main>
  )
}
