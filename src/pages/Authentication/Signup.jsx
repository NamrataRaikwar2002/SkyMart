import React from 'react'
import { Navbar } from '../../components'
// import './Home.css'

export const Signup = () => {
  return (
    <main className="login_page">
      <Navbar LoginOrSignup="Login" />

      <section className="login_box content">
        <form>
          <div className="login_div">
            <h2 className="createAccount">Signup</h2>
            <label for="login_input">First Name</label>
            <input
              type="text"
              className="login_input"
              placeholder="Enter you first name"
              required
            />
            <label for="login_input">Last Name</label>
            <input
              type="text"
              className="login_input"
              placeholder="Enter your last name"
              required
            />
            <label for="login_input">Email address</label>
            <input
              type="email"
              className="login_input"
              placeholder="username"
              required
            />
            <label for="login_input">Password</label>
            <input
              type="text"
              className="login_input"
              placeholder="Enter Password"
              required
            />
            <label for="login_input">Confirm Password</label>
            <input
              type="text"
              className="login_input"
              placeholder="Reenter Password"
              required
            />
            <div className="forgot_password_div">
              <input type="checkbox" name="1" className="rememberme" required />
              <label for="rememberme">I accept all Terms & Conditions</label>
            </div>
            <button type="submit" className="primary_btn btn">
              Create New Account
            </button>
            <a
              href="/Authentication/login/login.html"
              className="createAccount login_signup_link"
            >
              Already have an account
            </a>
          </div>
        </form>
      </section>
    </main>
  )
}
