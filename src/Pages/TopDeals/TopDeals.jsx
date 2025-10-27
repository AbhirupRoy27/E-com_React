import Desktop from './Desktop'
import Mobile from './Mobile'

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
]

function TopDeals() {
  return (
    <div className="min-w-[350px] lg:min-w-[768px] overflow-hidden">
      {window.innerWidth > 768 ? <Desktop /> : <Mobile />}
    </div>
  )
}

export default TopDeals
