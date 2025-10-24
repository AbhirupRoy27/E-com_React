/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react'
const BuyContext = createContext()

export const BuyContextProvider = ({ children }) => {
  const [item, setItem] = useState([])
  const [isDisabled, setIsDisabled] = useState(false)

  return (
    <BuyContext.Provider value={{ item, setItem, isDisabled, setIsDisabled }}>
      {children}
    </BuyContext.Provider>
  )
}

export const useBuy = () => {
  return useContext(BuyContext)
}
