/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState, useEffect } from 'react'
import { useSearchParams } from 'react-router-dom'

const bookContext = createContext()

export const BooksProvider = ({ children }) => {
  const [books, setBooks] = useState([])
  const [loading, isLoading] = useState(true)

  const [searchParams, setSearchParams] = useSearchParams()
  const currentPage = Number(searchParams.get('page')) || 1

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        if (loading === false) {
          isLoading(true)
        }
        const res = await fetch(
          `https://abhi-ecomserver.vercel.app/api/books?page=${currentPage}&limit=10`
        )
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        const data = await res.json()
        setBooks(data.allBooks) // store data in state
        isLoading(false)
      } catch (err) {
        console.error('Custom Error', err)
      }
    }

    fetchBooks()
  }, [currentPage])

  return (
    <bookContext.Provider
      value={{
        loading,
        books,
        currentPage,
        setSearchParams,
      }}
    >
      {children}
    </bookContext.Provider>
  )
}

export const useBestSellers = () => {
  return useContext(bookContext)
}
