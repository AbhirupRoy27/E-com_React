const page = [1, 2, 3]

function Page({ setSearchParams, onPage }) {
  const handleClick = (page) => {
    setSearchParams({ page })
  }

  return (
    <div className="flex justify-center py-4 mt-4 items-center bg-gray-100">
      <div className="flex justify-around gap-2 p-2 px-6 rounded-lg">
        {page.map((p, i) => (
          <p
            key={i}
            className={`flex items-center justify-center px-3 py-1 bg-gray-300 ${
              p === onPage ? 'bg-gray-800 text-white' : ''
            } rounded-full`}
            onClick={() => handleClick(p)}
          >
            {p}
          </p>
        ))}
      </div>
    </div>
  )
}

export default Page
