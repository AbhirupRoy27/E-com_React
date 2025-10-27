import Desktop from './Desktop'
import Mobile from './Mobile'

function TopDeals() {
  return (
    <div className="min-w-[350px] lg:min-w-[768px] overflow-hidden">
      {window.innerWidth > 768 ? <Desktop /> : <Mobile />}
    </div>
  )
}

export default TopDeals
