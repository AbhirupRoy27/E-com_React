export const handleLogin = (e, navigate, cred, isLogin, setIsLogin) => {
  e.preventDefault()
  try {
    if (cred && cred.email.length > 0) {
      if (cred.pass.length > 0) {
        setTimeout(() => {
          setIsLogin(!isLogin)
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
