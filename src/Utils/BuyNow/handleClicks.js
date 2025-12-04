export const handleBuy = (navigate, books, setItem) => {
  setItem([books])
  navigate('/buy-Now')
}

export const handlePayment = (setIsOpen, setIsDisabled) => {
  setIsOpen(true)
  setIsDisabled(false)
}
