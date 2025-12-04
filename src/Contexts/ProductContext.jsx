import data from '../Db/Products.json'

/* eslint-disable react-refresh/only-export-components */

import { createContext, useState, useContext } from 'react'
const ProductContext = createContext()

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState(data)
  const [filteredProducts, setFilteredProducts] = useState(data)

  return (
    <ProductContext.Provider
      value={{
        products,
        setProducts,
        filteredProducts,
        setFilteredProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  )
}

export const useProducts = () => {
  const context = useContext(ProductContext)
  if (!context) {
    throw new Error('useProducts must be used within a ProductProvider')
  }
  return context
}
