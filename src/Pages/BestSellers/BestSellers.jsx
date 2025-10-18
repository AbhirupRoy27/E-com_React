import React, { useState, useEffect } from 'react'
import BsCard from './Components/BsCard'
import { useSearchParams } from 'react-router-dom'
import NoBooks from './Components/NoBooks'
import Page from './Components/Page'
import FilterItem from './Components/FilterItem'

function BestSellers() {
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
    <>
      <div className="flex w-full">
        <div className="hidden min-w-[15%] min-h-full lg:flex flex-col px-2 py-3 items-center bg-slate-200 ">
          {['Category', 'Price'].map((c, i) => (
            <div className="w-full mb-3" key={i}>
              <FilterItem filter={c} />
            </div>
          ))}
        </div>
        <div className="w-full">
          {loading ? (
            <p className="flex justify-center items-center text-2xl min-h-[85vh] tracking-[1px]">
              Loading....
            </p>
          ) : (
            <div className="w-full min-h-max">
              {books.length > 0 ? (
                <>
                  <div className="flex justify-between sm:justify-start sm:p-0 px-0 md:px-10 lg-px-15 flex-wrap">
                    {books.map((p) => (
                      <BsCard key={p._id} books={p} />
                    ))}
                  </div>
                </>
              ) : (
                <NoBooks />
              )}
            </div>
          )}
        </div>
      </div>

      <Page setSearchParams={setSearchParams} onPage={currentPage} />
    </>
  )
}

export default BestSellers
