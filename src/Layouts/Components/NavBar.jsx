import { useNavigate, useLocation } from 'react-router-dom'
import { useSideBar } from '../Context/SideBarContext'
import navlinks from '../mock/NavLinks.json'

const HamburgerIcon = ({ onClick }) => (
  <button
    aria-label="Open navigation menu"
    onClick={onClick}
    className="flex flex-col justify-center gap-[0.3rem] ml-[10px] cursor-pointer bg-transparent border-none p-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
  >
    {Array.from({ length: 3 }).map((_, i) => (
      <span key={i} className="bg-[#f0f8ff] w-[26px] h-[3px] rounded-full block" />
    ))}
  </button>
)

export default function NavBar() {
  const { setSideBar } = useSideBar()
  const navigate = useNavigate()
  const location = useLocation()

  const handleNavigate = (name) => navigate(`/${name}`)
  const isActive = (name) => location.pathname === `/${name}`

  return (
    <nav
      aria-label="Main navigation"
      className="flex bg-[#222F3D] w-full h-[45px] "
    >
      {/* Mobile: hamburger + "All" label */}
      <div className="flex items-center px-3 md:hidden">
        <HamburgerIcon onClick={() => setSideBar(true)} />
        <span className="font-bold ml-2 text-sm text-[#f0f8ff] tracking-widest select-none">
          All
        </span>
      </div>

      {/* Desktop: nav links */}
      <ul className="hidden md:flex items-center justify-between w-full px-2 font-bold list-none m-0 p-0">
        {navlinks.map(({ id, name }) => (
          <li key={id}>
            <button
              onClick={() => handleNavigate(name)}
              className={`
                text-[#f0f8ff] tracking-widest py-1 px-2 rounded
                border transition-all duration-150 cursor-pointer
                bg-transparent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white
                ${isActive(name)
                  ? 'border-white'
                  : 'border-transparent hover:border-white active:scale-95'}
              `}
            >
              {name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}