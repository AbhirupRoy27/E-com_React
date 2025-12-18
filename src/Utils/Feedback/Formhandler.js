export const handleInput = (e, setFeedBack) => {
  const { name, value } = e.target
  setFeedBack((prev) => ({ ...prev, [name]: value.trim() }))
}
