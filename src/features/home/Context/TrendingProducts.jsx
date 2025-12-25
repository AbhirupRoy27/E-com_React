/* eslint-disable react-refresh/only-export-components */
import axios from 'axios'
import { createContext, useContext, useEffect, useState } from 'react'

const TrendingProductsContext = createContext()

export default function TrendingProductsProvider({ children }) {
  const [list, setList] = useState([1, 2, 3, 4, 5, 6, 7, 8])

  useEffect(() => {
    getData(setList)
  }, [])

  return (
    <TrendingProductsContext.Provider value={{ list }}>
      {children}
    </TrendingProductsContext.Provider>
  )
}

export const useTrending = () => {
  return useContext(TrendingProductsContext)
}

const getData = async (setList) => {
  try {
    const res = await axios.get(
      'https://apiproducts-service-nu.vercel.app/api/products/all-product?page=1&limit=10'
      // 'http://localhost:4000/api/products/all-product?page=1&limit=10'
    )

    if (res.status == 200) {
      return setList(res.data.response)
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.log('Server error:', error.response.status, error.response.data)
      } else if (error.request) {
        console.log('No response received:', error.request)
      } else {
        console.log('Axios config error:', error.message)
      }
    } else {
      console.log('Unknown error:', error)
    }
  }
}
