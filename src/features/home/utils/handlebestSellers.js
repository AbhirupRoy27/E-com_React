export const handleHomeBestSellerClick = (navigate, img) => {
  navigate(`/Best%20Sellers/${img.title}?product-id=${img._id}`)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
