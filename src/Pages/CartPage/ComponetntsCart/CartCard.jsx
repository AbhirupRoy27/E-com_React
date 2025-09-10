import './CartCard.css'

function CartCard({ item }) {
  return (
    <div className="cart-card">
      <div className="item-heading">
        <h2>
          {item.name} {item.sex} {item.producttype}
        </h2>
      </div>

      <div style={{ display: 'flex', gap: '1rem' }}>
        <div className="cart-image">
          <img src={item.imageurl} />
        </div>

        <div className="cart-desc">
          <div
            className="cart-desc-box1"
            style={{ marginTop: item.lessStock ? 0 : 18.5 }}
          >
            <h3>{item.name}</h3>
            <p>{item.Model}</p>
          </div>
          <h2>{item.Cost}/-</h2>
        </div>
      </div>
    </div>
  )
}

export default CartCard
