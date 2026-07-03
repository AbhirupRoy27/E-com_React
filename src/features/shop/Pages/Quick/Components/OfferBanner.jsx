import React from 'react'

const link =
  'https://www.thegreenmeat.com/shop/wp-content/uploads/2025/07/Greenmeat-Tikka-RTE-Mockup-pack-of-2-1024x1024.jpg'

function OfferBanner(props) {
  return (
    <div className="h-auto sm:h-100 overflow-hidden bg-white">
      <img
        src={props.img || link}
        className="object-cover sm:object-contain w-full"
      />
    </div>
  )
}

export default OfferBanner
