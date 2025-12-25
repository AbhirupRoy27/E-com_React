export const handleLogout = (setIsLogout, navigate) => {
  setIsLogout(false)
  navigate('/auth/login')
}
