import './CartCard.css'

function CartCard({ item }) {
  return (
    <div className="cart-card">
      <div className="item-left">
        <h2 className="item-heading">
          {item.name} {item.sex} {item.producttype}
        </h2>
        <div className="cart-image">
          <img src={item.imageurl} />
        </div>
      </div>

      <div className="cart-desc">
        <div className="cart-desc-box1">
          <h3>{item.name}</h3>
          <p>{item.Model}</p>
        </div>
        <h2>₹ {item.Cost}.00 </h2>
        <button>Remove from Cart</button>
        <button id="wish-button">Move to Wishlist</button>
      </div>
    </div>
  )
}

export default CartCard
