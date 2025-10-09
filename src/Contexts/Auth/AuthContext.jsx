/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react'
const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <AuthContext.Provider value={{ isLogin, setIsLogin }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  return useContext(AuthContext)
}
