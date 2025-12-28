export default function handleWishlist(
  setIsClicked,
  isClicked,
  product,
  wishlistItems
) {
  if (isClicked) {
    // const item =
    wishlistItems.pop(product)
    // console.log(wishlistItems)
    return setIsClicked(false)
  }
  setIsClicked(true)
  wishlistItems.push(product)
  // console.log(wishlistItems)
  return
}
