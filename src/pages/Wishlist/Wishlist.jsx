import React from 'react'
import { product10Img, product3Img, product6Img } from '../../assets'
import { Navbar } from '../../components'
import './Wishlist.css'
import { WishlistCard } from './component/WishlistCard'

export const Wishlist = () => {
  return (
    <main className="wishlist_page">
            <Navbar
            LoginOrSignup='Logout' address='/' />

        <section className="wishlist_products content">
            <div className="wishlist_products_div">
                <h2 className='productHeading'>My Wishlist(4)</h2>
                <div className="all_wishlist_products">

                <WishlistCard 
                    productImg={product6Img}
                    title='DOVE Original Deodorant Spray'
                    price='304'
                    prePrice='695'
                    discount='25% off'
                    rating='3'
                />

                <WishlistCard 
                    productImg={product10Img}
                    title='Wild Stone LEgend, Red, US, HYDRA Body Spray'
                    price='344'
                    prePrice='595'
                    discount='20% off'
                    rating='3.5'
                />

                    <WishlistCard 
                    productImg={product3Img}
                    title='Nivea Pearl And Beauty Deodorant'
                    price='204'
                    prePrice='695'
                    discount='40% off'
                    rating='4'
                />
                    
                </div>
            </div>
        </section>
    </main>
  )
}
