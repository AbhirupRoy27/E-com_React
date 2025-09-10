import './rc.css'
import { Link } from 'react-router-dom'

function RecomentationCard({ text }) {
  return (
    <div className="rc-container">
      <h2>Keep Shoping For</h2>
      <div className="rc-items">
        <div className="rc-item">
          <img
            alt="shoe"
            src="https://res.cloudinary.com/ddu1fpkrw/image/upload/v1752359370/samples/shoe.jpg"
          />
          <p>Sports Shoes</p>
        </div>
        <div className="rc-item">
          <img
            alt="whey protein"
            src="https://m.media-amazon.com/images/I/41IDcCxfaTL._MCnd_AC_.jpg"
          />
          <p>whey Protein</p>
        </div>
      </div>

      <div className="rc-items">
        <div className="rc-item">
          <img
            alt="wallpaper's"
            src="https://m.media-amazon.com/images/I/810mEqhxRFL._AC_SY220_AIweblab1228328%2CT1_.jpg"
          />
          <p>Wallpaper's</p>
        </div>
        <div className="rc-item">
          <img
            alt="whey protein"
            src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/MSO5/Boat_PC_CC_758x608_2x._SY608_CB564383870_.jpg"
          />
          <p>whey Protein</p>
        </div>
      </div>
      <Link to="buy-again"> {text} </Link>
    </div>
  )
}

export default RecomentationCard
