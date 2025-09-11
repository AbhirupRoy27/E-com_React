export const RemoveFromCart = ({
  id,
  cart,
  setCart,
  total,
  setTotal,
  cost,
}) => {
  setCart(cart.filter((i) => i.id !== id))
  setTotal(total - cost)
}
