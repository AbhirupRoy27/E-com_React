export const handleInput = (e, setFeedBack) => {
  const { name, value } = e.target
  setFeedBack((prev) => ({ ...prev, [name]: value.trim() }))
}

export const handleSubmit = (e, feedback, setFeedBack) => {
  e.preventDefault()
  if (!feedback.Email || !feedback.Feedback) {
    alert('Error: Empty Fields')
    return
  }

  console.log(feedback)
  setFeedBack({
    Feedback: '',
    Email: '',
  })
}
