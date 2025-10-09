export const handleAddToCart = (d, cart, setCart, setTotal, total) => {
  setCart([...cart, d])
  setTotal(total + d.Cost)
}

export const handleGoToCart = (navigate) => {
  navigate('/cart')
}
