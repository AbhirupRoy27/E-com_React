const handleSubmitFeedback = (e, feedback, setFeedBack) => {
  e.preventDefault()
  if (!feedback.Feedback) {
    alert('Error: Empty Fields')
    return
  }

  console.log(feedback)
  setFeedBack({
    Feedback: '',
    // Email: '',
  })
}

export default handleSubmitFeedback
