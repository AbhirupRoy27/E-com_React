export default function handleItem(navigate, books) {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
  navigate(`${books.title}?book-id=${books._id}`)
}
