import { handleFilter } from '../../Utils/BestSellers/handleFilter'
import { useState } from 'react'

function FilterItem({ filter }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <p
        className={`${
          !isOpen &&
          'rounded-lg shadow-md shadow-black/15 bg-gray-400 transition-color duration-300'
        } w-full bg-gray-300 flex justify-between items-center p-2 border-t border-gray-400`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <b className="tracking-wide">{filter}</b>
        <b
          className={`${
            isOpen ? 'rotate-180' : 'rotate-270'
          } font-thin transition-transform duration-300 flex items-center justify-center`}
          style={{ transformOrigin: 'center center' }}
        >
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 16 35"
            xmlns="http://www.w3.org/2000/svg"
            style={{ pointerEvents: 'none' }}
          >
            <g transform="translate(2, 0)">
              <path
                d="M12 23.207L4.5 13.161 12 3.093 10.5 0 0 13.161 10.5 26.322z"
                fill="black"
              />
            </g>
          </svg>
        </b>
      </p>
      {isOpen ? (
        <div className="relative w-full top-0 left-0 shadow-lg shadow-black/10">
          {['Programming', 'Fiction', 'History', 'Self-Help'].map((type, i) => (
            <p
              className="w-full bg-white p-2 border-b border-gray-400 text-sm"
              key={i}
              role="button"
              onClick={(e) => handleFilter(e, setIsOpen)}
            >
              {type}
            </p>
          ))}
        </div>
      ) : (
        <></>
      )}
    </>
  )
}

export default FilterItem
