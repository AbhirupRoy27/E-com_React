/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react'
const BuyContext = createContext()

export const BuyContextProvider = ({ children }) => {
  const [item, setItem] = useState([])
  const [isPaymentMethodSelected, setIsPaymentMethodSelected] = useState(false)

  return (
    <BuyContext.Provider
      value={{
        item,
        setItem,
        isPaymentMethodSelected,
        setIsPaymentMethodSelected,
        // Keep legacy name for backward compatibility during migration
        isDisabled: isPaymentMethodSelected,
        setIsDisabled: setIsPaymentMethodSelected,
      }}
    >
      {children}
    </BuyContext.Provider>
  )
}

export const useBuy = () => {
  const context = useContext(BuyContext)
  if (!context) {
    throw new Error('useBuy must be used within a BuyContextProvider')
  }
  return context
}
