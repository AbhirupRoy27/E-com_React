/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react'

const SideBarContext = createContext()

export const SideBarProvider = ({ children }) => {
  const [sideBar, setSideBar] = useState(false)

  return (
    <SideBarContext.Provider value={{ sideBar, setSideBar }}>
      {children}
    </SideBarContext.Provider>
  )
}

// Custom Hook
export const useSideBar = () => {
  const context = useContext(SideBarContext)
  if (!context) {
    throw new Error('useSideBar must be used within a SideBarProvider')
  }
  return context
}
