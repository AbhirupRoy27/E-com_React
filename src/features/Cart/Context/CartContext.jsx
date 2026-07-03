/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useMemo } from 'react'

export const CartContext = createContext()

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  // Auto-calculate total from cart items to prevent sync issues
  const total = useMemo(() => {
    return cart.reduce((sum, item) => {
      const price = item.price || item.Cost || 0
      return sum + price
    }, 0)
  }, [cart])

  // setTotal is kept for backward compatibility but is now a no-op
  // Total is automatically calculated from cart items
  const setTotal = () => {
    if (process.env.NODE_ENV === 'development') {
      console.warn(
        'setTotal is deprecated. Total is now automatically calculated from cart items.'
      )
    }
  }

  return (
    <CartContext.Provider value={{ cart, setCart, total, setTotal }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within a CartProvider')
  }
  return context
}

export { CartProvider }
