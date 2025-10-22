import React from 'react'

const FourBox = ({ obj }) => {
  return (
    <>
      <img
        src={obj.link}
        alt="Loading.."
        className="min-w-[217px] min-h-[160px] max-h-[160px] rounded-tl-3xl rounded-tr-3xl object-contain"
      />
      <p className="w-full max-w-[300px] h-full bg-yellow-400 rounded-bl-3xl rounded-br-3xl py-2 px-1 text-center">
        {obj.text}
      </p>
    </>
  )
}

const BigCard = () => {
  const cards = [
    {
      id: 1,
      link: 'https://m.media-amazon.com/images/I/61ya47tYrDL._AC_UL640_QL65_.jpg',
      text: 'Birthday',
    },
    {
      id: 2,
      link: 'https://m.media-amazon.com/images/I/61W9MQ+wuCL._AC_UL640_QL65_.jpg',
      text: 'Wedding',
    },
    {
      id: 3,
      link: 'https://res.cloudinary.com/ddu1fpkrw/image/upload/v1760790678/Pl_ST_1_hpbwjq.jpg',
      text: 'Game',
    },
    {
      id: 4,
      link: 'https://m.media-amazon.com/images/I/61s36Yg8kuL._AC_UL640_FMwebp_QL65_.jpg',
      text: 'Holiday',
    },
    {
      id: 5,
      link: 'https://res.cloudinary.com/ddu1fpkrw/image/upload/v1761050973/Screenshot_2025-10-21_at_6.18.09_PM_cqb4kv.png',
      text: 'Donation',
    },
  ]

  return (
    <div className="flex-1 w-full max-h-max p-1 sm:p-2 flex flex-nowrap mt-4 gap-[1%] sm:gap-[0.5%] overflow-scroll overflow-y-hidden no-scrollbar">
      {cards.map((p, i) => (
        <div
          key={i}
          className="bg-gray-100 flex flex-col border text-sm font-semibold rounded-3xl w-full h-[200px]"
        >
          <FourBox obj={p} />
        </div>
      ))}
    </div>
  )
}

export default BigCard
