export default function handlePayment(isOpen, setIsOpen, setIsDisabled) {
  if (isOpen) {
    return setIsOpen(false)
  }
  setIsOpen(true)
  setIsDisabled(false)
}
