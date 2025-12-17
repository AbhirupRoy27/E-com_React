const handleGoToItemPage = (p, navigate) => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
  navigate(`/product-item/${p._id}`)
}

export default handleGoToItemPage
