/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react'

const SideBarContext = createContext()

export const SideBarProvider = ({ children }) => {
  const [sideBar, isSideBar] = useState(false)

  return (
    <SideBarContext.Provider value={{ sideBar, isSideBar }}>
      {children}
    </SideBarContext.Provider>
  )
}

// Custom Hook
export const useSideBar = () => {
  return useContext(SideBarContext)
}
