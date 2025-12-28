/* eslint-disable react-refresh/only-export-components */

import React, { useContext, useState } from 'react'
import { createContext } from 'react'

const WishlistContext = createContext()

function WishlistContexProvider({ children }) {
  const [wishlistItems, setWishlistItems] = useState([])
  return (
    <WishlistContext.Provider value={{ wishlistItems, setWishlistItems }}>
      {children}
    </WishlistContext.Provider>
  )
}

export default WishlistContexProvider

export const useWishlist = () => {
  return useContext(WishlistContext)
}
