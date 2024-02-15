import Link from "next/link";

import MyMarquee from "../ui/Marquee";

import { HiArrowUpRight } from "react-icons/hi2";
import { Barlow_Condensed } from "next/font/google";

import { tenants } from "./data";

const barlowCondensed = Barlow_Condensed({ subsets: ["latin"], weight: "900" });

const SectionTenants = () => {
  return (
    <div className="relative isolate">
      <h1 className="flex items-center justify-center relative z-20 gap-x-6 text-center text-white uppercase">
        <span
          className={
            barlowCondensed.className +
            " text-[15vw] text-transparent bg-clip-text bg-gradient-to-r from-white/40 to-white/100"
          }
        >
          Tenants
        </span>
      </h1>
      <MyMarquee data={tenants} hasText />
      <div className="flex justify-center items-center mt-10">
        <Link
          href="/"
          className="py-4 pl-4 pr-3 rounded-full hover:bg-gray-900 text-white flex items-center justify-center gap-x-1 transition-colors duration-300 cursor-pointer"
        >
          <span className="tracking-tight text-xs sm:text-sm">
            View all tenants
          </span>
          <HiArrowUpRight size={15} />
        </Link>
      </div>
    </div>
  );
};

export default SectionTenants;
