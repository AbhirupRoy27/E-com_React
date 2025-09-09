import { useSelected } from '../../../Contexts/SelectContext'
import { useNavigate } from 'react-router-dom'
import navLinks from '../../../Db/navLinks.json'

export default function Dropdown() {
  const { page, setPage } = useSelected()

  const Map = useNavigate()

  const handleSelect = (e) => {
    setPage(e.target.value)
    Map(e.target.value)
  }

  return (
    <>
      <select value={page} onChange={handleSelect}>
        {navLinks.map((links) => (
          <option value={links.name} key={links.id}>
            {links.name}
          </option>
        ))}
      </select>
    </>
  )
}
