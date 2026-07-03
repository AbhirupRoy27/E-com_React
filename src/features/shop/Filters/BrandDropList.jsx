import { useEffect, useState } from 'react'
import { useProducts } from '../Context/ProductContext'

const Brands = ['All', 'Zudio', 'Puma', 'Nike', 'Addidas', 'Zara', 'Campus']

export const BrandDropList = () => {
  const { setFilteredProducts, products } = useProducts()
  const [currentBrand, setCurrentBrand] = useState('All')

  useEffect(() => {
    // console.log(currentBrand)
    const getBrands = () => {
      return setFilteredProducts(
        currentBrand === 'All'
          ? products
          : products.filter((i) => i.brand === currentBrand)
      )
    }

    getBrands()
  }, [currentBrand])

  return (
    <div className="flex items-center gap-1 py-3 text-white">
      <p className="font-semibold font-mono text-md sm:text-lg mr-2">
        Select Brand:
      </p>
      <div className="hidden sm:flex gap-2 overflow-x-scroll no-scrollbar">
        {Brands.map((b, idx) => (
          <button
            key={idx}
            onClick={(e) =>
              setCurrentBrand(
                e.target.innerText.charAt(0) +
                  e.target.innerText.slice(1).toLowerCase()
              )
            }
            className={`${
              currentBrand == b
                ? 'bg-white/10'
                : 'bg-gray-900/20 hover:bg-gray-900/30'
            }  min-w-[100px] font-semibold py-2 rounded-2xl border-dashed border-2 border-white/40 uppercase active:scale-95`}
            disabled={currentBrand == b}
          >
            {b}
          </button>
        ))}
      </div>
      <select
        className="sm:hidden p-[0.4rem] min-w-[100px] font-semibold focus:outline-none focus:ring-0 focus:border-transparent bg-white/70 text-gray-950 rounded-md"
        onChange={(e) => setCurrentBrand(e.target.value)}
      >
        <option defaultValue={'All'}>All</option>
        <option>Zudio</option>
        <option>Puma</option>
        <option>Nike</option>
        <option>Addidas</option>
      </select>
    </div>
  )
}
