import './NavBar.css'
import { Link } from 'react-router-dom'
import { useSideBar } from '../../Contexts/SideBarContext'
import { useNavLinks } from '../../Contexts/NaclinkContext/NavLinksContext'

export default function NavBar() {
  const { sideBar, isSideBar } = useSideBar()
  const hanfleBurger = () => {
    isSideBar(!sideBar)
  }

  const { navLinkss } = useNavLinks()

  return (
    <div className="nav-bar">
      <div className="nav-left">
        <div className="my-nav-button" role="button" onClick={hanfleBurger}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="nav-button-text"> All</div>
      </div>
      <div className="nav-right">
        {navLinkss.map((links) => (
          <div key={links.id} className="nav-links">
            <Link to={`${links.name}`}>{links.name}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
