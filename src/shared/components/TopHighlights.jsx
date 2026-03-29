function TopHighlights() {
  const products = [
    {
      id: 1,
      image:
        "https://images.unsplash.com/photo-1562704480-bacc35380666?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGZhc2hvbnxlbnwwfHwwfHx8MA%3D%3D",
      alt: "Featured Product 1",
      label: "Limited Edition",
      description: "Premium Collection",
    },
    {
      id: 2,
      image:
        "https://images.unsplash.com/photo-1770191954591-952ab5c63e68?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Featured Product 2",
      label: "New Arrival",
      description: "Summer Collection",
    },
    {
      id: 3,
      image:
        "https://images.unsplash.com/photo-1769708638741-172a56153eef?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3Mnx8fGVufDB8fHx8fA%3D%3D",
      alt: "Featured Product 3",
      label: "Best Seller",
      description: "Classic Design",
    },
    {
      id: 4,
      image:
        "https://plus.unsplash.com/premium_photo-1761929642510-be8d4bb29b06?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxNzF8fHxlbnwwfHx8fHw%3D",
      alt: "Featured Product 4",
      label: "Exclusive",
      description: "Designer Pick",
    },
  ];

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Text Section */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            TOP <br className="hidden sm:block" />
            HIGHLIGHTS
          </h1>
          <p className="text-base sm:text-lg font-semibold text-gray-400 mb-4">
            Wear Your Statement.
          </p>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-light">
            We believe style should feel as effortless as it looks. Our pieces
            are designed for those quiet, powerful moments — the entrance that
            turns heads, the detail that doesn’t shout but never goes unnoticed.
          </p>
        </div>

        {/* Products Carousel Section */}
        <section className="w-full lg:w-1/2">
          <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 no-scrollbar scroll-smooth">
            {products.map((product) => (
              <div
                key={product.id}
                className="min-w-[280px] sm:min-w-[320px] flex-shrink-0 group"
              >
                {/* Image Container */}
                <div className="relative overflow-hidden bg-gray-100 rounded-lg mb-3 h-80 sm:h-96">
                  <img
                    src={product.image}
                    alt={product.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Product Info */}
                <div className="space-y-2">
                  <span className="inline-block text-xs sm:text-sm font-semibold border border-amber-100/60 px-3 py-1 rounded-full text-amber-500 hover:bg-amber-50/20 transition-colors duration-300 cursor-alias">
                    {product.label}
                  </span>
                  <p className="text-sm sm:text-base font-medium text-gray-300">
                    {product.description}
                  </p>
                  <button
                    className="text-center mt-2 w-full border border-amber-50/10 rounded-4xl py-3 hover:bg-amber-50/10 uppercase text-sm tracking-wide cursor-pointer active:scale-97 
              active:bg-amber-50/25 transition-all duration-300"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default TopHighlights;
