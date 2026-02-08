import ScrollBar from '../Components/ScrollBar'
import OfferBanner from '../Components/OfferBanner'
import HomeProducts from '../../../../home/Components/HomeProducts'

function QuickLayout() {
  return (
    <div className=" py-6">
      <h1 className="text-4xl tracking-wider font-extralight w-full border-b border-white/30 pb-4">
        Quick
      </h1>

      <ScrollBar />

      <OfferBanner
        img={
          'https://media.licdn.com/dms/image/v2/D4D12AQE5gMgqUjiEFg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1701778399122?e=2147483647&v=beta&t=5srl6YaNxbai6kQNMgjaIiTst1GEew5EUuaopAVsMuI'
        }
      />
      <h2 className="mt-10 border-b border-white/30 pb-5 text-3xl font-extralight">
        Latest Views
      </h2>
      <HomeProducts />
    </div>
  )
}

export default QuickLayout
