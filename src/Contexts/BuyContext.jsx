/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react'
const BuyContext = createContext()

export const BuyContextProvider = ({ children }) => {
  const [item, setItem] = useState([])

  return (
    <BuyContext.Provider value={{ item, setItem }}>
      {children}
    </BuyContext.Provider>
  )
}

export const useBuy = () => {
  return useContext(BuyContext)
}
