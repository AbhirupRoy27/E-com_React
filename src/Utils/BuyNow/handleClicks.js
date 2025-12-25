export const handleBuy = (navigate, books, setItem) => {
  setItem([books])
  navigate('/app/buy-Now')
}

export const handlePayment = (setIsOpen, setIsDisabled) => {
  setIsOpen(true)
  setIsDisabled(false)
}
