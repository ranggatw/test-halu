import { Barlow_Condensed } from "next/font/google";

import Slider from "../Slider";

import { rundowns } from "./data";

const barlowCondensed = Barlow_Condensed({ subsets: ["latin"], weight: "900" });

const SectionRundown = () => {
  return (
    <div className="relative isolate px-5">
      <h1 className="flex relative z-20 items-center justify-center gap-x-6 text-center text-white uppercase">
        <span
          className={
            barlowCondensed.className +
            " text-[15vw] text-transparent bg-clip-text bg-gradient-to-r from-white/40 to-white/100"
          }
        >
          Rundown
        </span>
      </h1>
      <Slider
        data={rundowns}
        labelAction="View rundown"
        maxSlide={3}
        hasContent={false}
        spaceBetween={10}
      />
    </div>
  );
};

export default SectionRundown;
