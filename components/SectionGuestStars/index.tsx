"use client";

import Lottie from "lottie-react";
import { Barlow_Condensed } from "next/font/google";

// import Slider from "../Slider";

import { guestStars } from "./data";

import anim from "../../public/assets/star.json";
import Slider from "../Slider";

const barlowCondensed = Barlow_Condensed({ subsets: ["latin"], weight: "900" });

const SectionGuestStar = () => {
  return (
    <div className="relative isolate px-5 mt-6">
      <h1 className="flex relative z-20 items-center justify-between gap-x-6 text-center text-white uppercase">
        <span
          className={
            barlowCondensed.className +
            " text-[15vw] text-transparent bg-clip-text bg-gradient-to-r from-white/40 to-white/100"
          }
        >
          Guest
        </span>
        <span
          className={
            barlowCondensed.className +
            " text-[15vw] text-transparent bg-clip-text bg-gradient-to-l from-white/40 to-white/100"
          }
        >
          Stars
        </span>
      </h1>
      <div className="absolute z-10 top-40 -translate-y-1/2 left-1/2 -translate-x-1/2 select-none pointer-events-none">
        <div className="w-[100px] sm:w-[400px]">
          <Lottie animationData={anim} loop autoPlay />
        </div>
      </div>
      <Slider
        data={guestStars}
        labelAction="View all guest"
        maxSlide={4}
        hasContent
      />
    </div>
  );
};

export default SectionGuestStar;
