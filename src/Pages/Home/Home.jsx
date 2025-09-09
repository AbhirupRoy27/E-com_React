import RecomentationCard from './Cards/RC/RecomentationCard'
import './home.css'

const Rc = () => {
  return (
    <div className="rc-cards">
      <RecomentationCard text={'View your browsing history'} />
      <RecomentationCard text={'See more'} />
      <RecomentationCard text={'Explore All'} />
      <RecomentationCard text={'Keep Shopping'} />
    </div>
  )
}

const MobileCards = () => {
  return (
    <div className="mobile-cards">
      <div className="card-tems">
        <div>
          <img alt="a-pay" style={{ background: 'black' }} />
          <p>A-pay</p>
          <img alt="a-pay" />
          <p>Send Money</p>
        </div>
        <div>
          <img alt="a-pay" />
          <p>Sacn any QR</p>
          <img alt="a-pay" />
          <p>Recharge</p>
        </div>
      </div>
      <div className="second-box">
        <h2>Keep Shopping for Audio</h2>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img24/MSO5/Boat_PC_CC_758x608_2x._SY608_CB564383870_.jpg" />
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <div className="home">
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/IN/Prime/GIF/1/Jupiter25_H1_Prime_PC_2x_1._CB801695360_.jpg" />
      </div>
      <Rc />
      <MobileCards />
    </>
  )
}
