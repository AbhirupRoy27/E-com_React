import './Sidebar.css'
import { useSideBar } from '../../Contexts/SideBarContext'
import { Link } from 'react-router-dom'
import { useNavLinks } from '../../Contexts/NaclinkContext/NavLinksContext'

export default function SideBar() {
  const { sideBar, isSideBar } = useSideBar()

  const { navLinkss } = useNavLinks()

  const handleExit = () => {
    isSideBar(!sideBar)
  }

  return (
    <div className={`sidebar`}>
      <span className="exit" role="button" onClick={handleExit}>
        X
      </span>

      {navLinkss.map((links) => (
        <div key={links.id} className="sidebar-links" onClick={handleExit}>
          <Link to={`${links.name}`}>{links.name}</Link>
        </div>
      ))}
    </div>
  )
}
