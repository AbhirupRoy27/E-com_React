import { Link } from 'react-router-dom'

const images = [
  {
    id: 1,
    link: 'https://res.cloudinary.com/ddu1fpkrw/image/upload/v1752359370/samples/shoe.jpg',
  },
  {
    id: 2,
    link: 'https://m.media-amazon.com/images/I/41IDcCxfaTL._MCnd_AC_.jpg',
  },
]

function RecomentationCard({ text }) {
  return (
    <div className="flex flex-col w-[340px] p-[1%] bg-[rgba(211,211,211,0.79)] gap-[0.4rem] flex-wrap mt-4">
      <h2 className="mb-[2%] font-semibold">Keep Shoping For</h2>
      <div className="flex gap-[0.5rem]">
        <div className="w-[48%] h-[200px]">
          <img src={images[0].link} className="w-full h-[90%] rounded-md" />
          <p className="mt-1 ml-1 font-semibold"> Item 1</p>
        </div>
        <div className="w-[48%] h-[200px]">
          <img src={images[1].link} className="w-full h-[90%] rounded-md" />
          <p className="mt-1 ml-1 font-semibold">Item 2</p>
        </div>
      </div>
      <div className="flex gap-[0.5rem] mt-2 mb-2">
        <div className="w-[48%] h-[200px]">
          <img src={images[1].link} className="w-full h-[90%] rounded-md" />
          <p className="mt-1 ml-1 font-semibold"> Item 1</p>
        </div>
        <div className="w-[48%] h-[200px]">
          <img src={images[0].link} className="w-full h-[90%] rounded-md" />
          <p className="mt-1 ml-1 font-semibold">Item 2</p>
        </div>
      </div>

      <div>
        <Link to="buy-again"> {text} </Link>
      </div>
    </div>
  )
}

export default RecomentationCard
