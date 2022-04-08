import React from 'react'
import { Navbar } from '../../components'
import './authentication.css'
import {Link} from 'react-router-dom'

export const Login = () => {
  return (
    <main className="login_page">
      <Navbar LoginOrSignup="Signup" address='/signup-page' />

      <section className="login_box content">
        <form>
          <div className="login_div">
            <h2 className="createAccount">Login</h2>
            <label htmlFor="emailInput">Email address</label>
            <input
              type="text"
              className="login_input"
              placeholder="username"
              id="loginInput"
              required
            />
            <label htmlFor="passwordInput">Password</label>
            <input
              type="text"
              className="login_input"
              placeholder="Password"
              id='passwordInput'
              required
            />
            <div className="forgot_password_div">
              <input type="checkbox" name="1" className="rememberme" id='rememberMe' required />
              <label htmlFor="rememberMe">Remember me</label>
              <Link to='/'>
                <span>Forgot your Password?</span>
              </Link>
            </div>
            <button type="submit" className="primary_btn btn">
              Login
            </button>
            <Link to='/signup-page'
              className="createAccount login_signup_link"
            >
              Create New Account
            </Link>
          </div>
        </form>
      </section>
    </main>
  )
}
