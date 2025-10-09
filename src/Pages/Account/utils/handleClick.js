export const handleLogin = (e, navigate, cred) => {
  e.preventDefault()
  try {
    if (cred && cred.email.length > 0) {
      if (cred.pass.length > 0) {
        setTimeout(() => {
          navigate('/')
        }, 1000)
      } else {
        throw new Error('Password is empty')
      }
    } else {
      throw new Error('Name Field empty')
    }
  } catch (err) {
    alert(err.message)
  }
}

export const handleSignup = (e, navigate, cred) => {
  e.preventDefault()
  try {
    if (cred && cred.email.length > 0) {
      if (cred.pass.length > 0) {
        if (cred.rePass.length > 0) {
          setTimeout(() => {
            navigate('/login')
          }, 1000)
        } else {
          throw new Error('Re-Entered Password is empty')
        }
      } else {
        throw new Error('Password is empty')
      }
    } else {
      throw new Error('Name empty')
    }
  } catch (err) {
    console.error(err.message)
  }
}

export const handleEmail = (e, setCred) => {
  const { name, value } = e.target
  setCred((prev) => ({ ...prev, [name]: value }))
}
