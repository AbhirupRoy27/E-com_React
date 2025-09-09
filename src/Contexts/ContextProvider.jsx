/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react'

const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
  const [num, setNum] = useState(false)

  return (
    <AuthContext.Provider value={{ num, setNum }}>
      {children}
    </AuthContext.Provider>
  )
}

// Custom Hook
export const useAuth = () => {
  return useContext(AuthContext)
}
