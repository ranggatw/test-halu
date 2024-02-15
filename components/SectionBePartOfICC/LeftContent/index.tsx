import Image from "next/image";
import Link from "next/link";

import { Barlow_Condensed } from "next/font/google";

const barlowCondensed = Barlow_Condensed({ subsets: ["latin"], weight: "900" });

const LeftContent = () => {
  return (
    <div className="rounded-3xl bg-gradient-to-b py-16 lg:py-24 px-6 sm:px-10 from-gray-900 flex flex-col items-center text-center relative isolate">
      <div className="absolute top-0 -translate-y-1/2 inset-x-0  flex items-center justify-center w-full">
        <div className="px-3 py-3 bg-gradient-to-l from-orange-500 to-red-700 font-bold text-white uppercase rounded-full text-xs sm:text-sm flex items-center gap-x-1">
          <p className="!leading-none flex-shrink-0">Tenant Application</p>
        </div>
      </div>
      <div className="flex flex-col items-center text-center group text-white">
        <Image
          src="https://indonesiacomiccon.com/_nuxt/img/captain-icc-2023-pose-2.13a8502.svg"
          width={400}
          height={600}
          alt="maskot"
          className="select-none pointer-events-none w-28 sm:w-32 2xl:w-36 group-hover:scale-[1.1] transition-transform duration-300"
        />
        <h3
          className={
            barlowCondensed.className +
            " uppercase !leading-none -mt-10 drop-shadow-md font-heading text-5xl sm:text-6xl xl:text-7xl"
          }
        >
          Showcase Your Brand
        </h3>
        <p className="mt-6 max-w-xl mx-auto">
          Be part of something big by becoming a tenant at Indonesia Comic Con,
          one of the largest pop culture event in Indonesia.
        </p>
        <div className="w-full max-w-sm mx-auto mt-8">
          <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
            <div className="w-[100%] bg-gradient-to-r from-green-500 to-green-600 h-full rounded-full" />
          </div>
          <p className="block text-gray-400 text-xs sm:text-sm tracking-tight mt-3">
            100% space has been occupied.
          </p>
        </div>
        <Link
          className="px-8 py-5 rounded-xl bg-white text-black font-bold tracking-tight mt-10 hover:bg-yellow-500 transition-colors duration-300"
          href="/"
        >
          Book your space
        </Link>
      </div>
    </div>
  );
};

export default LeftContent;
