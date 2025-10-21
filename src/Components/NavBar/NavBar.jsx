import navlinks from '../../Db/NavLinks.json'
import { useNavigate } from 'react-router-dom'
import { useSideBar } from '../../Contexts/SideBarContext'

export default function NavBar() {
  const { isSideBar } = useSideBar()
  const navigate = useNavigate()

  return (
    <div className="flex bg-[#222F3D]">
      <div className="flex items-center w-[10%] pl-[2%] pr-[2%] pb-[3%] pt-[3%] sm:hidden ">
        <div
          className="flex flex-col justify-center gap-[0.1rem] ml-[10px]"
          role="button"
          onClick={() => isSideBar(true)}
        >
          {[1, 2, 3].map((s, i) => (
            <span className="bg-[#f0f8ff] w-[30px] h-[5px]" key={i}></span>
          ))}
        </div>
        <div className="font-bold ml-[10px] nav-button-text text-[#f0f8ff] tracking-widest">
          All
        </div>
      </div>
      <div className="hidden sm:p-[0.7%] sm:w-full sm:flex sm:justify-between font-bold ">
        {navlinks.map((links) => (
          <div
            key={links.id}
            className="text-[#f0f8ff] tracking-widest active:scale-103"
            onClick={() => navigate(`${links.name}`)}
          >
            <p>{links.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
