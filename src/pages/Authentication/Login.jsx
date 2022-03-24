import React from 'react'
import { Navbar } from '../../components'
import './authentication.css'

export const Login = () => {
  return (
    <main className="login_page">
      <Navbar LoginOrSignup="Signup" />

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
            <label htmlfor="passwordInput">Password</label>
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
              <a href="#">
                <span>Forgot your Password?</span>
              </a>
            </div>
            <button type="submit" className="primary_btn btn">
              Login
            </button>
            <a
              href="/Authentication/signup/signup.html"
              className="createAccount login_signup_link"
            >
              Create New Account
            </a>
          </div>
        </form>
      </section>
    </main>
  )
}
