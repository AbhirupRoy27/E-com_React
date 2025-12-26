import { useNavigate } from 'react-router-dom'
import filters from '../mock/filters.json'

function HeroNavigation() {
  const navigate = useNavigate()

  return (
    <div className="flex gap-5 sm:gap-5 overflow-auto px-3 sm:px-10 py-1 bg-amber-50/5 rounded-2xl sm:my-4">
      {filters.map((item) => (
        <div
          className="text-black py-2 shrink-0"
          key={item._id}
          onClick={() => navigate(item.link || '/')}
        >
          <div className="overflow-hidden flex justify-center mb-1  h-[70px]">
            <img
              src={item.image}
              alt="item"
              className="object-center object-contain"
              width={70}
            />
          </div>
          <p className="text-center font-semibold pt-1 text-white">
            {item.name}
          </p>
        </div>
      ))}
    </div>
  )
}

export default HeroNavigation
