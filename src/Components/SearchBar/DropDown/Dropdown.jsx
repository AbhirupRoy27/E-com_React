import React from 'react'
import { useSelected } from '../../../Contexts/SelectContext'
import { useNavigate } from 'react-router-dom'
import navLinks from '../../../Db/navLinks.json'

export default function Dropdown() {
  const { vehicle, setVehicle } = useSelected()

  const Map = useNavigate()

  const handleSelect = (e) => {
    setVehicle(e.target.value)
    Map(e.target.value)
  }

  return (
    <>
      <select value={vehicle} onChange={handleSelect}>
        {navLinks.map((links) => (
          <option value={links.name} key={links.id}>
            {links.name}
          </option>
        ))}
      </select>
    </>
  )
}
