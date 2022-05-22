import { createContext, useContext, useReducer } from 'react'
import { productReducer } from '../reducer/productReducer'

const productContext = createContext(null)
const useProduct = () => useContext(productContext)

const ProductProvider = ({ children }) => {
  const [productState, productDispatch] = useReducer(productReducer, {
    cart: [],
    wishList: [],
  })
  return (
    <productContext.Provider value={{ productState, productDispatch }}>
      {children}
    </productContext.Provider>
  )
}

export { useProduct, ProductProvider }
