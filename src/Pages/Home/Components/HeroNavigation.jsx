const filters = [
  {
    _id: 1,
    name: 'All',
    image:
      'https://rukminim2.flixcart.com/fk-p-flap/128/128/image/e00302d428f5c7be.png?q=100',
  },
  {
    _id: 2,
    name: 'Mobile',
    image:
      'https://rukminim2.flixcart.com/fk-p-flap/128/128/image/5f2ee7f883cdb774.png?q=100',
  },
  {
    _id: 3,
    name: 'Fashon',
    image:
      'https://rukminim2.flixcart.com/fk-p-flap/128/128/image/ff559cb9d803d424.png?q=100',
  },
  {
    _id: 4,
    name: 'Home & Furniture',
    image:
      'https://rukminim2.flixcart.com/fk-p-flap/128/128/image/1788f177649e6991.png?q=100',
  },
]

function HeroNavigation() {
  return (
    <div className="flex gap-5 sm:gap-10 overflow-auto px-5 sm:px-10 sm:mx-2 xl:mx-25 py-1 bg-amber-50 sm:my-4">
      {filters.map((item) => (
        <div className="text-black py-2 shrink-0" key={item._id}>
          <div className="overflow-hidden flex justify-center mb-1 min-w-[70] min-h-[70px]">
            <img
              src={item.image}
              alt="item"
              className="object-center object-cover sm:object-contain"
              width={70}
            />
          </div>
          <p className="text-center font-semibold pt-1">{item.name}</p>
        </div>
      ))}
    </div>
  )
}

export default HeroNavigation
