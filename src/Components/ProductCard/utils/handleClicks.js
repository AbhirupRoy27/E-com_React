export const handleAddToCart = (
  d,
  cart,
  setCart,
  setTotal,
  total,
  navigate
) => {
  setCart([...cart, d])
  setTotal(total + d.price)
  navigate('/cart')
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
}

export const handleGoToCart = (navigate) => {
  navigate('/cart')
}

export const handleItemPage = (p, navigate) => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
  navigate(`/product-item/${p.id}`)
}
