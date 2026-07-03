import { Minus, Plus } from "lucide-react";
import FandQList from "./listFandQ.json";
import { useState, useRef, useEffect } from "react";

const Answer = ({ ans, isOpen }) => {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) setHeight(ref.current.scrollHeight);
  }, [ans]);

  return (
    <div
      style={{
        maxHeight: isOpen ? height : 0,
        transition: "max-height 0.35s ease",
      }}
      className="overflow-hidden bg-gray-900/60 px-3"
    >
      <p ref={ref} className="py-3 pb-5 font-light tracking-widest">
        {ans}
      </p>
    </div>
  );
};

function FandQ() {
  const [openId, setOpenId] = useState(null);

  const handleAns = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <div className="min-w-[354px] px-1 sm:px-6 md:px-10 xl:px-30 py-5 min-h-[90vh]">
      <h1 className="ml-3 capitalize text-4xl pb-5 tracking-wider font-light">
        F&Q
      </h1>
      {FandQList.map((q) => {
        const isOpen = openId === q.id;
        return (
          <div key={q.id}>
            <div
              className="flex items-center justify-between py-5 px-3 sm:px-10 bg-gray-800/80 hover:bg-gray-900 mt-2 cursor-pointer"
              onClick={() => handleAns(q.id)}
            >
              <h1 className="tracking-wider font-bold">{q.question}</h1>
              <button
                className="cursor-pointer hover:scale-115"
                aria-label={isOpen ? "Collapse answer" : "Expand answer"}
              >
                {isOpen ? <Minus /> : <Plus />}
              </button>
            </div>
            <Answer ans={q.answer} isOpen={isOpen} />
          </div>
        );
      })}
    </div>
  );
}

export default FandQ;
