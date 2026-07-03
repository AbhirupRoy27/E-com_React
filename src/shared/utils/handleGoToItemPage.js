const handleGoToItemPage = (p, navigate) => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
  navigate(`/product/${p.category}?product-id=${p._id}`)
}

export default handleGoToItemPage
