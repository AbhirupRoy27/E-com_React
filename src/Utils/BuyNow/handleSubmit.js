export const handleSubmit = (e, setIsDisabled) => {
  e.preventDefault()
  setIsDisabled(true)
}

export const handleCheckout = (navigate, setIsDisabled, isDisabled) => {
  if (isDisabled === false) {
    return alert('Choose a Payment method.')
  }
  setIsDisabled(false)
  navigate('/Payment complete')
}
