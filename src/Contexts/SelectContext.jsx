/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react'

const SelectContext = createContext()

export const SelectContextProvider = ({ children }) => {
  const [page, setPage] = useState('home')

  return (
    <SelectContext.Provider value={{ page, setPage }}>
      {children}
    </SelectContext.Provider>
  )
}

export const useSelected = () => {
  return useContext(SelectContext)
}
