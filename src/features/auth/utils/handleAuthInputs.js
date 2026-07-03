export const handleAuthInputs = (e, setCred) => {
  const { name, value } = e.target
  setCred((prev) => ({ ...prev, [name]: value }))
}
