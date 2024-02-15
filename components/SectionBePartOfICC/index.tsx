import { Barlow_Condensed } from "next/font/google";

import RightContent from "./RightContent";
import LeftContent from "./LeftContent";

const barlowCondensed = Barlow_Condensed({ subsets: ["latin"], weight: "900" });

const BePart = () => {
  return (
    <div className="px-5 lg:px-32 mt-24">
      <h2
        className={
          barlowCondensed.className +
          " font-heading uppercase flex flex-col items-center text-center !leading-[0.9] text-[18vw] xs:text-[16vw] md:text-[14vw] lg:text-[8vw] xl:text-[8vw] 2xl:text-[8vw]"
        }
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/40 via-white/100 to-white/40">
          BE PART OF
        </span>
        <span className="text-red-500">INDONESIA COMIC CON</span>
        <span className="text-yellow-500">2023</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-16 lg:mt-20">
        <LeftContent />
        <RightContent />
      </div>
    </div>
  );
};

export default BePart;
