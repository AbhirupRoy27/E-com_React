export const handleSubmit = (e, setIsDisabled, setIsOpen, isOpen) => {
  e.preventDefault()
  console.log(e.target)
  setIsOpen(!isOpen)
  setIsDisabled(true)
}

export const handleCheckout = (navigate, setIsDisabled, isDisabled) => {
  if (isDisabled === false) {
    return alert('Choose a Payment method.')
  }
  setIsDisabled(false)
  navigate('/Payment complete')
}
