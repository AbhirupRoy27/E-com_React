import TopDealsDesktopPage from '../Pages/TopDealsDesktopPage'
import TopDealsMoblePage from '../Pages/TopDealsMoblePage'

function TopDealsLayout() {
  return (
    <div className="min-w-[350px] lg:min-w-[768px] overflow-hidden">
      {window.innerWidth > 768 ? (
        <TopDealsDesktopPage />
      ) : (
        <TopDealsMoblePage />
      )}
    </div>
  )
}

export default TopDealsLayout
