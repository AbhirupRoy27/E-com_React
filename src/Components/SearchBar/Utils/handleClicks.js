export const handleDropDown = (navigate, item, setIsLogout) => {
  if (item === 'Logout') {
    setIsLogout(true)
    // handleLogout(navigate, setIsLogout)
  } else {
    navigate(item)
  }
}

export const handleLogout = (setIsLogout, navigate) => {
  // if (window.confirm('Are you sure you want to log out?')) {
  setIsLogout(false)
  navigate('/login')
  // }
}
