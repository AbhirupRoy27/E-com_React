import './Card.css'
import data from '../../Db/Products.json'
import { useCart } from '../../Contexts/CartContext'
import { useNavigate } from 'react-router-dom'

const size = ['S', 'M', 'L', 'XL', 'XXL']

const carticon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="20"
    height="28"
    fill="currentColor"
  >
    <path
      d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 
           0c-1.1 0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7.16 
           14l.84-2h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49A.996.996 
           0 0019 3H6.21l-.94-2H1v2h2l3.6 
           7.59-1.35 2.44C4.52 14.37 5.48 
           16 7 16h12v-2H7.42c-.14 0-.25-.11-.26-.24z"
    />
  </svg>
)

const wishlist = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="20"
    height="28"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path
      d="M12.1 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5
           2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 
           4.5 2.09C13.09 3.81 14.76 3 16.5 
           3 19.58 3 22 5.42 22 8.5c0 
           3.78-3.4 6.86-8.65 11.54l-1.25 
           1.31z"
    />
  </svg>
)

function Card() {
  const { cart, setCart, total, setTotal } = useCart()
  const navigate = useNavigate()

  const handleAddToCart = (d) => {
    setCart([...cart, d])
    setTotal(total + d.Cost)
  }

  const handleGoToCart = () => {
    navigate('/cart')
  }
  return (
    <>
      {data.map((p) => (
        <div className="card-container" key={p.id}>
          <div className="product-name">
            <h2 className="text-2xl font-semibold">
              {p.name} {p.sex} {p.producttype}
            </h2>
          </div>
          <div className="product-image">
            <img src={p.imageurl} />
          </div>
          <div className="product-info">
            <div className="panic-text">
              {p.lessStock && <p>!! only few remaining</p>}
            </div>
            <div
              className="product-text"
              style={{ marginTop: p.lessStock ? 0 : 18.5 }}
            >
              <h3>{p.name}</h3>
              <p>{p.Model}</p>
            </div>
            <div className="amount-text">
              <h2>{p.Cost}</h2>
              <p>{p.discount}</p>
              <p
                style={{
                  color: 'gray',
                  textDecoration: 'line-through',
                  fontSize: 14,
                }}
              >
                {p['original-price']}/-
              </p>
            </div>
          </div>
          <div className="product-buttons">
            {cart.includes(p, 0) ? (
              <button onClick={() => handleGoToCart()}>
                Go to Cart {carticon}
              </button>
            ) : (
              <button onClick={() => handleAddToCart(p)}>
                Add to Cart {carticon}
              </button>
            )}

            <button>Wishlist Item {wishlist}</button>
          </div>
        </div>
      ))}
    </>
  )
}

export default Card

function SizeChart() {
  return (
    <div className="product-size">
      <div className="size-items">
        {size.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </div>
  )
}
