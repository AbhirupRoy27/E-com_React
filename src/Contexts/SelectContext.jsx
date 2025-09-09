/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from 'react'

const SelectContext = createContext()

export const SelectContextProvider = ({ children }) => {
  const [vehicle, setVehicle] = useState('Bike')

  return (
    <SelectContext.Provider value={{ vehicle, setVehicle }}>
      {children}
    </SelectContext.Provider>
  )
}

export const useSelected = () => {
  return useContext(SelectContext)
}
