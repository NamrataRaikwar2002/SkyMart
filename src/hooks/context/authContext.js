import { createContext, useContext, useReducer } from 'react'
const authContext = createContext(null)
const useAuth = () => useContext(authContext)
import { authReducer } from '../reducer/authReducer'

const AuthProvider = ({ children }) => {
  const [userDetail, userDispatch] = useReducer(authReducer, {
    user: JSON.parse(localStorage.getItem('user')) || {},
    token: localStorage.getItem('token') || '',
  })

  return (
    <authContext.Provider value={{ userDetail, userDispatch }}>
      {children}
    </authContext.Provider>
  )
}

export { AuthProvider, useAuth }
