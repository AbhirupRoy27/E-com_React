import { Link } from 'react-router-dom'
import { useSideBar } from '../../Contexts/SideBarContext'
import { useNavLinks } from '../../Contexts/NaclinkContext/NavLinksContext'

export default function NavBar() {
  const { isSideBar } = useSideBar()

  const { navLinkss, loading } = useNavLinks()

  return (
    <div className="flex bg-[#222F3D]">
      <div className="flex items-center w-[10%] pl-[2%] pr-[2%] pb-[3%] pt-[3%] sm:hidden ">
        <div
          className="flex flex-col justify-center gap-[0.1rem] ml-[10px]"
          role="button"
          onClick={() => isSideBar(true)}
        >
          <span className="bg-[#f0f8ff] w-[30px] h-[5px]"></span>
          <span className="bg-[#f0f8ff] w-[30px] h-[5px]"></span>
          <span className="bg-[#f0f8ff] w-[30px] h-[5px]"></span>
        </div>
        <div className="font-bold ml-[10px] nav-button-text text-[#f0f8ff] tracking-widest">
          All
        </div>
      </div>
      <div className="hidden sm:p-[0.7%] sm:w-full sm:flex sm:justify-between font-bold ">
        {loading ? (
          <p className="text-[#f0f8ff] tracking-widest text-center w-full">
            Loading...
          </p>
        ) : (
          <>
            {navLinkss.map((links) => (
              <div
                key={links.id}
                className="text-[#f0f8ff] tracking-widest active:scale-103"
              >
                <Link to={`${links.name}`}>{links.name}</Link>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  )
}
