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
    let isCancelled = false
    const fetchBooks = async () => {
      isLoading(true)
      try {
        const res = await fetch(
          `https://apimain-service.vercel.app/api/books?page=${currentPage}&limit=10 `
        )
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`)
        }
        const data = await res.json()
        if (!isCancelled) {
          setBooks(data.allBooks || [])
        }
      } catch (err) {
        console.error('Custom Error', err)
      } finally {
        if (!isCancelled) {
          isLoading(false)
        }
      }
    }
    fetchBooks()
    return () => {
      isCancelled = true
    }
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
