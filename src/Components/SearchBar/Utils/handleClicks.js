export const handleDropDown = (navigate, item, setIsLogout, setOpen) => {
  if (item === 'Logout') {
    setIsLogout(true)
    setOpen(false)
    // handleLogout(navigate, setIsLogout)
  } else {
    navigate(item)
    setOpen(false)
  }
}

export const handleLogout = (setIsLogout, navigate) => {
  // if (window.confirm('Are you sure you want to log out?')) {
  setIsLogout(false)
  navigate('/login')
  // }
}
