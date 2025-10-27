import React from 'react'

const topLinks = [
  {
    id: 1,
    link: 'https://m.media-amazon.com/images/G/31/NAB/Add-a-Gift-Card_Jup25._CB801413398_.png',
    name: 'Add Gift Card',
  },
  {
    id: 2,
    link: 'https://m.media-amazon.com/images/G/31/NAB/Add-a-Voucher_Jup25._CB801413398_.png',
    name: 'Add NextGen Voucher',
  },
  {
    id: 3,
    link: 'https://m.media-amazon.com/images/G/31/NAB/Amazon-Pay-Gift-Cards_Jup25._CB801413398_.png',
    name: 'Gift Cards',
  },
  {
    id: 4,
    link: 'https://m.media-amazon.com/images/G/31/NAB/Brand-Gift-Cards_Jup25._CB801413398_.png',
    name: 'Brand Gift Cards',
  },
  {
    id: 5,
    link: 'https://m.media-amazon.com/images/G/31/NAB/Lifestyle_AllGC_Nov24._CB541466294_.png',
    name: 'Flat 4% off',
  },
  {
    id: 6,
    link: 'https://m.media-amazon.com/images/G/31/NAB/MMT_AllGC_Nov24._CB541466294_.png',
    name: 'Flat 5% off',
  },
  {
    id: 7,
    link: 'https://m.media-amazon.com/images/G/31/Priyanka/Tanishq_AllGC_May25._CB795593580_.png',
    name: 'Add Gold',
  },
  {
    id: 8,
    link: 'https://m.media-amazon.com/images/G/31/NAB/Bulk-Orders-inquiry_Jup25._CB801413398_.png',
    name: 'Add Gift Card',
  },
  {
    id: 9,
    link: 'https://m.media-amazon.com/images/G/31/NAB/Amazon-Shopping-Vouchers_Jup25._CB801413398_.png',
    name: 'Shopping Vouchers',
  },
  {
    id: 10,
    link: 'https://m.media-amazon.com/images/G/31/NAB/Amazon-Fresh-Vouchers_Jup25._CB801413398_.png',
    name: 'Fresh Vouchers',
  },
]

function Logo() {
  return (
    <div className="flex xl:px-[10%] justify-between mt-4 overflow-scroll no-scrollbar">
      {topLinks.map((p) => (
        <div key={p.id} className="h-max">
          <Element text={p.name} link={p.link} />
        </div>
      ))}
    </div>
  )
}

const Element = ({ text, link }) => {
  return (
    <>
      <div className="w-[80px] h-[80px]  overflow-hidden">
        <img src={link} alt="img" />
      </div>
      <p className="max-w-[80px] text-[12px] text-center text-wrap">{text}</p>
    </>
  )
}

export default Logo
