import './Card.css'
import data from '../../Db/Products.json'

const size = ['S', 'M', 'L', 'XL', 'XXL']

function Card() {
  // console.log(data)
  return (
    <>
      {data.map((p) => (
        <div className="card-container" key={p.id}>
          <div className="product-name">
            <h2>
              {p.name} {p.sex} T-shirt
            </h2>
          </div>
          <div className="product-image"></div>
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
              <p style={{ color: 'gray', textDecoration: 'line-through' }}>
                {p['original-price']}/-
              </p>
            </div>
          </div>
          <div className="product-size">
            <div className="size-items">
              {size.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
          <div className="product-buttons"></div>
        </div>
      ))}
    </>
  )
}

export default Card
