import HeroNavigation from "../Components/HeroNavigation";
import HomeProducts from "../Components/HomeProducts";
import BooksHomeCard from "../Components/BooksHomeCard";
import DesktopFlex from "../Components/DesktopFlex";
import TopHighlights from "../../../shared/components/TopHighlights";
import { MobileTopCards } from "../Components/MobileTopCards";

function HomePage() {
  return (
    <div className="sm:bg-gray-950">
      <HeroNavigation />
      <MobileTopCards />
      <HomeProducts heading={"Trending"} />

      <BooksHomeCard />
      {window.innerWidth >= 450 && <DesktopFlex />}

      <TopHighlights />
    </div>
  );
}

export default HomePage;
