import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import { makeServer } from './server'
import { BrowserRouter } from 'react-router-dom'
import { FilterProvider } from './hooks/context/filterContext'
import { ProductProvider } from './hooks/context/productContext'
import { AuthProvider } from './hooks/context/authContext'

// Call make Server
makeServer()

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <FilterProvider>
          <ProductProvider>
            <App />
          </ProductProvider>
        </FilterProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
)
