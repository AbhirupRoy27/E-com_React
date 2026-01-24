import React from 'react'
import { TbMarquee } from 'react-icons/tb'
import ScrollBar from '../Components/ScrollBar'
import OfferBanner from '../Components/OfferBanner'

const marqueeTaglines = [
  {
    id: 'a1f3c9e2-8c1b-4c2e-9f01-1a7d4c9a0011',
    text: '🔥 Limited Time Offer – Grab the Deal Before It’s Gone!',
  },
  {
    id: 'b2e7a4d1-91f4-4f0b-8c2a-3d8f6a0022aa',
    text: '⚡ Flash Sale Live – Up to 50% Off!',
  },
  {
    id: 'c3d8f9b4-0a7e-42bc-9f51-4e9c7b0033bb',
    text: '🎉 Special Offers You Don’t Want to Miss!',
  },
  {
    id: 'd4f1a2e9-6b8c-4e77-8a21-5b1d8c0044cc',
    text: '🛍️ Shop More, Save More – Deals Inside!',
  },
  {
    id: 'e5c9d8a7-1f42-4c9a-9b73-6a2e9d0055dd',
    text: '🚀 New Arrivals Just Dropped!',
  },
  {
    id: 'f6a2b9d3-3e91-4b6f-8c41-7d3a1e0066ee',
    text: '💥 Big Savings on Top Products!',
  },
  {
    id: 'a7b4e1c9-7d8f-45a2-9e14-8f2c3a0077ff',
    text: '🆓 Free Shipping on Selected Orders!',
  },
  {
    id: 'b8c1f9a4-2e6d-4f91-8a7b-9a1d4b0088aa',
    text: '⏰ Hurry! Offers Ending Soon!',
  },
  {
    id: 'c9d7a1e8-5b4f-4d2c-9e81-a2b3c40099bb',
    text: '🌟 Premium Quality at Unbeatable Prices!',
  },
  {
    id: 'd0e9b4c2-8a1f-4b7d-9c32-b1e4a500aacc',
    text: '😊 Thank You for Choosing Us – Happy Shopping!',
  },
]

function QuickLayout() {
  return (
    <div className=" py-6">
      <h1 className="text-4xl tracking-wider font-extralight w-full border-b border-white/30 pb-4">
        Quick
      </h1>

      <marquee
        direction="left"
        className="bg-white text-black py-1 whitespace-nowrap"
        scrollamount="20"
        scrolldelay="50"
      >
        {marqueeTaglines.map((item) => (
          <span key={item.id} className="text-2xl font-bold mx-8">
            {item.text}
          </span>
        ))}
      </marquee>

      <ScrollBar />

      <OfferBanner
        img={
          'https://media.licdn.com/dms/image/v2/D4D12AQE5gMgqUjiEFg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1701778399122?e=2147483647&v=beta&t=5srl6YaNxbai6kQNMgjaIiTst1GEew5EUuaopAVsMuI'
        }
      />
    </div>
  )
}

export default QuickLayout
