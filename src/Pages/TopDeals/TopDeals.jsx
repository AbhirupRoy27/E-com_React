import DealCard from './DealCard'

const topDeals = [
  {
    id: 1,
    name: 'Addids Softmax',
    price: 220,
    discount: 20,
    link: 'https://res.cloudinary.com/ddu1fpkrw/image/upload/v1758906325/ChatGPT_Image_Sep_26_2025_10_34_49_PM_aweoma.png',
  },
  {
    id: 2,
    name: 'Nike Pro',
    price: 220,
    discount: 20,
    link: 'https://res.cloudinary.com/ddu1fpkrw/image/upload/v1758906400/ChatGPT_Image_Sep_26_2025_10_35_56_PM_pow4j6.png',
  },
  {
    id: 3,
    name: 'Addids Softmax',
    price: 220,
    discount: 20,
    link: 'https://res.cloudinary.com/ddu1fpkrw/image/upload/v1758906218/ChatGPT_Image_Sep_26_2025_10_32_55_PM_gnasly.png',
  },
  {
    id: 4,
    name: 'Addids Softmax',
    price: 220,
    discount: 20,
    link: 'https://res.cloudinary.com/ddu1fpkrw/image/upload/v1758906325/ChatGPT_Image_Sep_26_2025_10_34_49_PM_aweoma.png',
  },
  {
    id: 5,
    name: 'Addids Softmax',
    price: 220,
    discount: 20,
    link: 'https://res.cloudinary.com/ddu1fpkrw/image/upload/v1758906416/Screenshot_2025-09-26_at_10.35.52_PM_jytcwp.png',
  },
  {
    id: 6,
    name: 'Nike Pro',
    price: 220,
    discount: 20,
    link: 'https://res.cloudinary.com/ddu1fpkrw/image/upload/v1758906218/ChatGPT_Image_Sep_26_2025_10_32_55_PM_gnasly.png',
  },
  {
    id: 7,
    name: 'Addids Softmax',
    price: 220,
    discount: 20,
    link: 'https://res.cloudinary.com/ddu1fpkrw/image/upload/v1758906400/ChatGPT_Image_Sep_26_2025_10_35_56_PM_pow4j6.png',
  },
  {
    id: 8,
    name: 'Addids Softmax',
    price: 220,
    discount: 20,
    link: 'https://res.cloudinary.com/ddu1fpkrw/image/upload/v1758906416/Screenshot_2025-09-26_at_10.35.52_PM_jytcwp.png',
  },
]

function TopDeals() {
  return (
    <div className="bg-gradient-to-br from-slate-200 to-gray-700 p-3 sm:p-6 min-w-[576px] sm:min-w-[1100px]">
      <p className="text-2xl font-semibold mb-4">Today's Top Deals</p>
      <div className="flex gap-[1rem] overflow-x-auto overflow-y-hidden no-scrollbar scroll-smooth md:scroll-auto bg-gradient-to-br from-slate-200 to-gray-700">
        {topDeals.map((deals) => (
          <DealCard deals={deals} key={deals.id} />
        ))}
      </div>
    </div>
  )
}

export default TopDeals
