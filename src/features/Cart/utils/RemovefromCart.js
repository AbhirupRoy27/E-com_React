export const RemoveFromCart = ({
  id,
  cart,
  setCart,
  total,
  setTotal,
  cost,
}) => {
  setCart(cart.filter((i) => i._id !== id))
  setTotal(total - cost)
}
