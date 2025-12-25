export const handleDropDown = (navigate, item, setIsLogout, setOpen) => {
  if (item === 'Logout') {
    setIsLogout(true)
    setOpen(false)
    // handleLogout(navigate, setIsLogout)
  } else {
    navigate(`/${item}`)
    setOpen(false)
  }
}

export const handleLogout = (setIsLogout, navigate) => {
  setIsLogout(false)
  navigate('/login')
}
