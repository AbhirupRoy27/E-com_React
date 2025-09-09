import './SideBar.css'
import { useAuth } from '../../Contexts/ContextProvider'
import navLinks from '../../Db/navLinks.json'
import { Link } from 'react-router-dom'

export default function SideBar() {
  const { num, setNum } = useAuth()

  const handleExit = () => {
    setNum(!num)
  }
  return (
    <div className={`sidebar`}>
      <span className="exit" role="button" onClick={handleExit}>
        X
      </span>

      {navLinks.map((links) => (
        <div key={links.id} className="sidebar-links">
          <Link to={`${links.name}`}>{links.name}</Link>
        </div>
      ))}
    </div>
  )
}
