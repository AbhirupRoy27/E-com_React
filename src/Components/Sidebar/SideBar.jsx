import { useSideBar } from '../../Contexts/SideBarContext'
import { useNavigate } from 'react-router-dom'
import navLinkss from '../../Db/NavLinks.json'
import { X } from 'lucide-react'

export default function SideBar() {
  const navigate = useNavigate()
  const { sideBar, setSideBar } = useSideBar()

  const handleClick = (link) => {
    setSideBar(false)
    navigate(`/${link}`)
  }

  return (
    <div
      className={`fixed top-0 right-0 h-full w-[60%] bg-gray-100 shadow-2xl transform transition-transform duration-500 ease-in-out ${
        sideBar ? 'translate-x-0' : 'translate-x-full'
      } z-50 `}
    >
      <div className="flex py-4 px-2 bg-gray-300 text-black justify-between items-center">
        <p className="text-lg font-bold" onClick={() => navigate('/')}>
          Categories
        </p>

        <button onClick={() => setSideBar(false)}>
          <X size={30} />
        </button>
      </div>

      {navLinkss.map((links) => (
        <div
          key={links.id}
          className="py-4 pl-3 border-b-[0.01rem] border-gary-100 text-gray-950"
          onClick={() => handleClick(links.name)}
        >
          <p>{links.name}</p>
        </div>
      ))}
    </div>
  )
}
