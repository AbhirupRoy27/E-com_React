import navlinks from '../../Db/NavLinks.json'
import { useNavigate } from 'react-router-dom'
import { useSideBar } from '../../Contexts/SideBarContext'

export default function NavBar() {
  const { isSideBar } = useSideBar()
  const navigate = useNavigate()

  return (
    <div className="flex bg-[#222F3D] min-w-[344px] sm:min-w-[1100px] h-[45px]">
      <div className="flex items-center w-[10%] pl-[2%] pr-[2%] pb-[3%] pt-[3%] md:hidden ">
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
      <div className="hidden sm:px-[0.7%] sm:w-full md:flex sm:justify-between items-center font-bold ">
        {navlinks.map((links) => (
          <div
            key={links.id}
            className="text-[#f0f8ff] tracking-widest sm:py-[0.7%] sm:px-[0.4%] active:scale-103 hover:border border-white rounded cursor-pointer"
            onClick={() => navigate(`${links.name}`)}
          >
            <p>{links.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
