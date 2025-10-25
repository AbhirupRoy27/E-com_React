import { useSideBar } from '../../Contexts/SideBarContext'
import { useNavigate } from 'react-router-dom'
import { useNavLinks } from '../../Contexts/NaclinkContext/NavLinksContext'

export default function SideBar() {
  const navigate = useNavigate()
  const { sideBar, isSideBar } = useSideBar()
  const { navLinkss } = useNavLinks()

  const handleClick = (link) => {
    isSideBar(false)
    navigate(`${link}`)
  }

  return (
    <div
      className={`fixed top-0 right-0 h-full w-[60%] bg-gray-100 shadow-2xl transform transition-transform duration-500 ease-in-out ${
        sideBar ? 'translate-x-0' : 'translate-x-full'
      } z-[9999]`}
    >
      <div
        className="flex py-4 bg-gray-300 text-black justify-between items-center"
        onClick={() => navigate('/')}
      >
        <p className="text-lg ml-3 font-light">Categories</p>
        <span
          className="mr-3 text-3xl font-light"
          role="button"
          onClick={() => isSideBar(false)}
        >
          X
        </span>
      </div>

      {navLinkss.map((links) => (
        <div
          key={links.id}
          className="py-4 pl-3 border-b-[0.01rem] border-gary-100"
          onClick={() => handleClick(links.name)}
        >
          <p>{links.name}</p>
        </div>
      ))}
    </div>
  )
}
