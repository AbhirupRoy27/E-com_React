const handleAddToCart = (d, cart, setCart, setTotal, total, navigate) => {
  setCart([...cart, d])
  setTotal(total + d.price)
  navigate('/cart')
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

export default handleAddToCart
