// const handleDropDown = (navigate, item, setIsLogout, setOpen) => {
//   if (item === 'Logout') {
//     setIsLogout(true)
//     setOpen(false)
//     // handleLogout(navigate, setIsLogout)
//   } else {
//     navigate(`/auth/${item}`)
//     setOpen(false)
//   }
// }

const handleDropDown = (e, navigate, setOpen) => {
  setOpen(false)
  if (e.target.innerHTML == 'Login') {
    return navigate(`/auth/${e.target.innerHTML}`)
  }
  return navigate(`/${e.target.innerHTML}`)
}

export default handleDropDown
