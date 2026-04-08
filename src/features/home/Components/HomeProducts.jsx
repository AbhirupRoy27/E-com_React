import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useTrending } from "../Context/TrendingProducts";

const scrollToTopAndNavigate = (navigate, path) => {
  window.scrollTo({ top: 0, behavior: "smooth" });
  navigate(path);
};

const productPath = (p) => `/product/${p.title}?product-id=${p._id}`;

function SectionHeading({ heading }) {
  return (
    <h2 className="text-3xl font-extralight text-white/90 px-3 border-b border-gray-500/70 mb-5 pb-2">
      {heading}
    </h2>
  );
}

function SkeletonCard({ id }) {
  return (
    <div className="text-white animate-pulse space-x-4" key={id}>
      <div className="bg-white/5 min-w-[250px] h-[300px] border-0 cursor-not-allowed shrink-0 active:scale-97 transition-all duration-300" />
      <div className="mt-2 p-1">
        <h3 className="text-gray-400 capitalize underline-offset-2 mb-2 line-clamp-2">
          Loading...
        </h3>
        <p className="text-[12px] text-white/15 capitalize mb-2 line-clamp-3">
          Loading...
        </p>
        <button className="text-white/15 text-center mt-2 w-full border border-amber-50/10 rounded-4xl py-2 uppercase text-sm tracking-wide cursor-not-allowed active:scale-97 active:bg-amber-50/25 transition-all duration-300">
          Loading
        </button>
      </div>
    </div>
  );
}

function ProductCard({ p, navigate }) {
  const handleNavigate = () => scrollToTopAndNavigate(navigate, productPath(p));

  return (
    <div className="text-white" key={p._id}>
      <img
        src={p.coverImage}
        className="bg-white/10 min-w-[250px] h-[300px] border-0 cursor-pointer shrink-0 active:scale-97 transition-all duration-300 rounded"
        title={p.title}
        alt="product name"
        onClick={handleNavigate}
      />
      <div className="p-1">
        <span
          className={`text-sm ${
            p.stock <= 10 ? "text-red-700" : "text-gray-500/10"
          } min-h-[16px]`}
        >
          {p.stock <= 10 ? "Only Few Left" : "Best Price"}
        </span>
        <h3
          className="mt-2 capitalize hover:underline underline-offset-2 mb-2 cursor-pointer line-clamp-2"
          title={p.title}
          onClick={handleNavigate}
        >
          {p.title}
        </h3>
        <p
          className="text-[12px] text-gray-400 capitalize mb-2 line-clamp-2"
          title={p.description}
        >
          {p.description}
        </p>
        <button
          className="text-center mt-2 w-full border border-amber-50/10 rounded-4xl py-2 hover:bg-amber-50/10 uppercase text-sm tracking-wide cursor-pointer active:scale-97 active:bg-amber-50/25 transition-all duration-300"
          onClick={handleNavigate}
        >
          View Product
        </button>
      </div>
    </div>
  );
}

function SeeMoreCard({ navigate }) {
  return (
    <div
      className="bg-white/10 border-0 cursor-pointer shrink-0 flex justify-center flex-col rounded-tr-2xl rounded-br-2xl px-4"
      onClick={() => scrollToTopAndNavigate(navigate, "/products")}
    >
      <div className="flex justify-center">
        <ChevronRight size={80} />
      </div>
      <b className="text-2xl">See More</b>
    </div>
  );
}

function HomeProducts({ heading }) {
  const { list } = useTrending();
  const navigate = useNavigate();
  const isLoading = list[0] === 1;

  return (
    <div className="bg-gray-950 py-4">
      {heading && <SectionHeading heading={heading} />}
      <div className="flex overflow-scroll gap-3 no-scrollbar mt-2 shrink-0">
        {isLoading
          ? list.map((id) => <SkeletonCard key={id} id={id} />)
          : list.map((p) => (
              <ProductCard key={p._id} p={p} navigate={navigate} />
            ))}
        {!isLoading && <SeeMoreCard navigate={navigate} />}
      </div>
    </div>
  );
}

export default HomeProducts;
