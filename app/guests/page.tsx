import React from "react";
import Image from "next/image";
import Navbar from "@/components/Navbar";

import { Barlow_Condensed, Plus_Jakarta_Sans } from "next/font/google";
import { guestData } from "./data";
import Footer from "@/components/Footer";
import TitlePage from "@/components/ui/TitlePage";

const barlowCondensed = Barlow_Condensed({ subsets: ["latin"], weight: "900" });

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: "200",
});

const Guest = () => {
  return (
    <div className="bg-custom-black-primary">
      <Navbar />
      <div className="px-1 lg:px-32 pt-32">
        <TitlePage title="Guest Stars" />
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-2 sm:gap-x-4 gap-y-12 mt-10 lg:mt-16">
          {guestData.map((item, index) => (
            <div
              key={index}
              className="relative rounded-xl overflow-hidden hover:ring ring-accent-yellow-base ring-offset-4 ring-offset-gray-950 duration-200 active:scale-95 transition flex justify-center"
            >
              <Image
                src={item.src}
                width={320}
                height={400}
                alt="banner"
                className="w-full"
              />
              <div
                className={
                  barlowCondensed.className +
                  " absolute z-10 inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 flex flex-col items-center justify-end px-2 lg:px-2 pb-4 lg:pb-6"
                }
              >
                <h1 className="font-heading text-white text-2xl sm:text-4xl 2xl:text-5xl !leading-[1.1] drop-shadow text-center">
                  {item.title}
                </h1>
                <p
                  className={
                    plusJakartaSans.className +
                    " text-xs sm:text-sm text-white mt-2 flex items-center gap-x-2"
                  }
                >
                  <span>
                    {item.sub} &apos; {item.attend}
                  </span>
                </p>
              </div>
            </div>
          ))}
          T
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Guest;
