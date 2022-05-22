import './App.css'
import { Routes, Route } from 'react-router-dom'
import { Cart, Home, Login, ProductList, Signup, Wishlist } from './pages'
import MockmanEs from 'mockman-js'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { RequiresAuth } from './RequireAuth'

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        theme="dark"
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Routes>
        <Route path="/mock" element={<MockmanEs />} />
        <Route path="/" element={<Home />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/login-page" element={<Login />} />
        <Route
          path="/wishlist-page"
          element={
            <RequiresAuth>
              <Wishlist />
            </RequiresAuth>
          }
        />
        <Route
          path="/cart-page"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route path="/signup-page" element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App
