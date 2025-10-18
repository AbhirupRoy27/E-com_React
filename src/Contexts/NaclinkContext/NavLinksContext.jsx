/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react'

const navLinksContext = createContext()

export const NavLinksProvider = ({ children }) => {
  const [navLinkss, setNavLinkss] = useState([])
  const [loading, isLoading] = useState(true)

  useEffect(() => {
    const test = async () => {
      const res = await fetch('https://abhiruptempdata.vercel.app/api/navlinks')
      setNavLinkss(await res.json())
      isLoading(!loading)
    }
    test()
  }, [])

  return (
    <navLinksContext.Provider value={{ navLinkss, loading }}>
      {children}
    </navLinksContext.Provider>
  )
}

export const useNavLinks = () => useContext(navLinksContext)
