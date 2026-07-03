export default function handleBuy(navigate, product, updatorFun) {
  if (!product || !updatorFun) return

  updatorFun((prev) => [...prev, product])
  navigate('/app/buy-now')
}
