import { useEffect, useCallback } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { X } from 'lucide-react'
import { useSideBar } from '../../Layouts/Context/SideBarContext'
import navLinks from '../mock/NavLinks.json'

export default function SideBar() {
  const navigate = useNavigate()
  const location = useLocation()
  const { sideBar, setSideBar } = useSideBar()

  const closeSideBar = useCallback(() => setSideBar(false), [setSideBar])

  const handleNavigation = useCallback(
    (name) => {
      closeSideBar()
      navigate(`/${name}`)
    },
    [closeSideBar, navigate]
  )

  // Close on route change
  useEffect(() => {
    closeSideBar()
  }, [location.pathname])

  // Close on Escape key
  useEffect(() => {
    if (!sideBar) return
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeSideBar()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [sideBar, closeSideBar])

  const isActive = (name) => location.pathname === `/${name}`

  return (
    <>
      {/* Backdrop */}
      {sideBar && (
        <div
          aria-hidden="true"
          className="fixed inset-0 bg-black/40 z-40 transition-opacity duration-300"
          onClick={closeSideBar}
        />
      )}

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
        className={`fixed top-0 right-0 h-full w-[60%] max-w-[320px] bg-gray-100 shadow-2xl
          transform transition-transform duration-500 ease-in-out z-50
          ${sideBar ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {/* Header */}
        <div className="flex py-4 px-3 bg-gray-300 text-black justify-between items-center">
          <button
            onClick={() => handleNavigation('')}
            className="text-lg font-bold bg-transparent border-none cursor-pointer p-0 hover:opacity-70 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black rounded"
          >
            Categories
          </button>
          <button
            onClick={closeSideBar}
            aria-label="Close navigation menu"
            className="p-1 rounded hover:bg-gray-400/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black"
          >
            <X size={26} />
          </button>
        </div>

        {/* Nav links */}
        <nav aria-label="Sidebar navigation">
          <ul className="list-none m-0 p-0">
            {navLinks.map(({ id, name }) => (
              <li key={id}>
                <button
                  onClick={() => handleNavigation(name)}
                  className={`w-full text-left py-4 pl-4 pr-3 border-b border-gray-200
                    text-gray-950 bg-transparent cursor-pointer transition-colors duration-150
                    hover:bg-gray-200 focus-visible:outline-none focus-visible:bg-gray-200
                    ${isActive(name) ? 'font-semibold bg-gray-200' : ''}
                  `}
                >
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  )
}