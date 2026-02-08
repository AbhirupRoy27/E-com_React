function TopHighlights() {
  return (
    <div className="flex flex-col md:flex-row gap-10 py-10">
      <div className="md:w-[500px] ">
        <h1 className="text-6xl">
          TOP <br />
          HIGHLIGHTS
        </h1>
        <p className="my-2">
          <b>Wear Your Statement.</b>
        </p>
        <p>
          We believe style should feel as effortless as it looks. Our pieces are
          designed for those quiet, powerful moments — the entrance that turns
          heads, the detail that doesn’t shout but never goes unnoticed.
        </p>
      </div>
      <section className="p-4 bg-amber-50/10 w-full flex gap-3 overflow-scroll no-scrollbar">
        <div className="min-w-[300px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1562704480-bacc35380666?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZhc2hvbnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Product Image"
            className="max-h-[400px] min-w-[300px] bg-amber-50 mb-3 object-cover"
          />
          <span className="text-sm">Offer</span>
          <p>Prodyct description</p>
          <button className="bg-gray-50/30 px-6 py-3 my-3">Buy Now</button>
        </div>

        <div className="min-w-[300px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1770191954591-952ab5c63e68?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Product Image"
            className="max-h-[400px] min-w-[300px] bg-amber-50 mb-3 object-cover"
          />
          <span className="text-sm">Offer</span>
          <p>Prodyct description</p>
          <button className="bg-gray-50/30 px-6 py-3 my-3">Buy Now</button>
        </div>

        <div className="min-w-[300px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1769708638741-172a56153eef?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3Mnx8fGVufDB8fHx8fA%3D%3D"
            alt="Product Image"
            className="max-h-[400px] min-w-[300px] bg-amber-50 mb-3"
          />
          <span className="text-sm">Offer</span>
          <p>Prodyct description</p>
          <button className="bg-gray-50/30 px-6 py-3 my-3">Buy Now</button>
        </div>

        <div className="min-w-[300px] overflow-hidden">
          <img
            src="https://plus.unsplash.com/premium_photo-1761929642510-be8d4bb29b06?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNzF8fHxlbnwwfHx8fHw%3D"
            alt="Product Image"
            className="max-h-[400px] min-h-[400px] min-w-[300px] bg-amber-50 mb-3"
          />
          <span className="text-sm">Offer</span>
          <p>Prodyct description</p>
          <button className="bg-gray-50/30 px-6 py-3 my-3">Buy Now</button>
        </div>
      </section>
    </div>
  )
}

export default TopHighlights
