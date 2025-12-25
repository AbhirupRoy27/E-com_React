export default function handleNavigateTo(navigate, linkTo) {
  navigate(`${linkTo}`)
  window.scrollTo({ top: 0, behavior: 'smooth' })
}
