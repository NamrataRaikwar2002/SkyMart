import React from 'react'
import { Navbar } from '../../components'
import {Link} from 'react-router-dom'

export const Signup = () => {
  return (
    <main className="login_page">
      <Navbar LoginOrSignup="Login"  
          address='/login-page'
      />

      <section className="login_box content">
        <form>
          <div className="login_div">
            <h2 className="createAccount">Signup</h2>
            <label htmlFor="firstNameinput">First Name</label>
            <input
              type="text"
              className="login_input"
              placeholder="Enter you first name"
              id='firstNameinput'
              required
            />
            <label htmlFor="lastNameinput">Last Name</label>
            <input
              type="text"
              className="login_input"
              placeholder="Enter your last name"
              id='lastNameinput'
              required
            />
            <label htmlFor="emailinput">Email address</label>
            <input
              type="email"
              className="login_input"
              placeholder="username"
              id='emailinput'
              required
            />
            <label htmlFor="passwordinput">Password</label>
            <input
              type="text"
              className="login_input"
              placeholder="Enter Password"
              id='passwordinput'
              required
            />
            <label htmlFor="confirmPswdinput">Confirm Password</label>
            <input
              type="text"
              className="login_input"
              placeholder="Reenter Password"
              id='confirmPswdinput'
              required
            />
            <div className="forgot_password_div">
              <input type="checkbox" name="1" className="rememberme" id='rememberMe' required />
              <label htmlFor="rememberMe">I accept all Terms & Conditions</label>
            </div>
            <button type="submit" className="primary_btn btn">
              Create New Account
            </button>
            <Link to='/login-page'
              className="createAccount login_signup_link"
            >
              Already have an account
            </Link>
          </div>
        </form>
      </section>
    </main>
  )
}
