const page = [1, 2, 3, 4]

function PageNavigation({ setSearchParams, onPage, bgcolor }) {
  const handleClick = (page) => {
    setSearchParams({ page })
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div
      className={`flex justify-center py-4 items-center ${
        bgcolor || 'bg-gray-900'
      }`}
    >
      <div className="flex justify-around gap-2 p-2 px-6 rounded-lg">
        {page.map((p, i) => (
          <p
            key={i}
            className={`flex items-center justify-center  font-semibold px-3 py-1 bg-gray-300 ${
              p === onPage
                ? 'bg-gray-950 text-white border border-white'
                : 'text-gray-950'
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

export default PageNavigation
