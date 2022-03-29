import './App.css'
import {Routes, Route} from 'react-router-dom'
import { Cart, Home, Login, ProductList, Signup, Wishlist } from './pages'
import MockmanEs from "mockman-js";

function App() {
  return (
    <div className="App">
    <Routes>
      <Route path="/mock" element={<MockmanEs />} />
      <Route path='/' element={<Home />}/>
      <Route path='/product-list' element={<ProductList />} />
      <Route path='/login-page' element= {<Login />}/>
      <Route path='/wishlist-page' element={<Wishlist />}/>
      <Route path='/cart-page' element={<Cart />} />
      <Route path='/signup-page' element={<Signup />}/>
    </Routes>
    </div>
  )
}

export default App
