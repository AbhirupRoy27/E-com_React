import './NavBar.css'
import { Link } from 'react-router-dom'
import navLinks from '../../Db/navLinks.json'
import { useSideBar } from '../../Contexts/SideBarContext'

export default function NavBar() {
  const { sideBar, isSideBar } = useSideBar()
  const hanfleBurger = () => {
    isSideBar(!sideBar)
  }

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
        {navLinks.map((links) => (
          <div key={links.id} className="nav-links">
            <Link to={`${links.name}`}>{links.name}</Link>
          </div>
        ))}
      </div>
    </div>
  )
}
