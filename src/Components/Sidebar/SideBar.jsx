import './Sidebar.css'
import { useSideBar } from '../../Contexts/SideBarContext'
import navLinks from '../../Db/navLinks.json'
import { Link } from 'react-router-dom'

export default function SideBar() {
  const { sideBar, isSideBar } = useSideBar()

  const handleExit = () => {
    isSideBar(!sideBar)
  }
  return (
    <div className={`sidebar`}>
      <span className="exit" role="button" onClick={handleExit}>
        X
      </span>

      {navLinks.map((links) => (
        <div key={links.id} className="sidebar-links" onClick={handleExit}>
          <Link to={`${links.name}`}>{links.name}</Link>
        </div>
      ))}
    </div>
  )
}
