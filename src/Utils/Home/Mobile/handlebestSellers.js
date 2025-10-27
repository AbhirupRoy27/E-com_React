export const handleCardClick = (navigate, img) => {
  navigate(`/Best%20Sellers/${img.title}?book-id=${img._id}`)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
