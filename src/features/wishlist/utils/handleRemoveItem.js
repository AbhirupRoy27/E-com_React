export default function handleRemoveItem(setWishlistItems, wishlistItems, id) {
  const filteredItems = wishlistItems.filter((p) => p._id != id)
  return setWishlistItems(filteredItems)
}
