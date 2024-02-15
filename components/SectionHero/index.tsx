"use client";
import React from "react";
import localFont from "next/font/local";
import { Plus_Jakarta_Sans, Barlow_Condensed } from "next/font/google";

import { images, links } from "./data";
import Image from "next/image";
import Button from "../ui/Button";
import { SlideText } from "../ui/SlideText";
import CardLink from "../ui/Card/CardLink";
import Link from "next/link";
import { GoArrowRight } from "react-icons/go";

const akiraFont = localFont({
  src: "../../font/Akira.otf",
  display: "swap",
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: "800",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

const SectionHero = () => {
  return (
    <>
      {/* Desktop */}
      <div className="lg:px-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-center pt-28 px-5 gap-4">
          <div className="relative isolate row-span-2 h-full">
            <div className="flex flex-col justify-end items-start h-full py-20 ">
              <span className="bg-clip-text bg-gradient-to-r from-white/50 to-white/100 text-transparent">
                INDONESIA COMIC CON 2023 ⚡️
              </span>
              <p
                className={
                  akiraFont.className +
                  " relative z-10 text-white font-display tracking-tight text-[9vw] xs:text-[9vw] sm:text-[8vw] md:text-[7vw] lg:text-[4vw] xl:text-[2.75vw] 2xl:text-[2.8vw] 3xl:text-[2.6vw] !leading-[1.1] uppercase"
                }
              >
                BRINGING <br /> THE BEST
                <br />
                <span className="text-red-500">POP</span>{" "}
                <span className="text-custom-yellow">CULTURE</span>
                <br />
                EXPERIENCE
              </p>
              <div className="absolute z-30 -right-2 bottom-[45%] hover:scale-[1.1] transition-transform duration-300">
                <Image
                  className="pointer-events-none select-none drop-shadow-xl"
                  src="https://indonesiacomiccon.com/_nuxt/img/captain-icc-2023-pose-3.83d6c0d.svg"
                  alt="maskot"
                  width={144}
                  height={171}
                />
              </div>
              <div className="flex flex-wrap gap-x-2 items-center mt-4">
                <Button
                  variant="contained"
                  label="Get your ticket"
                  onClick={() => {}}
                />
                <Button
                  onClick={() => {}}
                  variant="outlined"
                  label="Be part of ICC"
                />
              </div>
              <div className="absolute z-0 bottom-0 translate-y-1/2 left-1/2 -translate-x-1/2 h-1 w-[80%] rounded-b-full overflow-hidden grid grid-cols-3">
                <span className="h-full bg-red-600"></span>
                <span className="h-full bg-yellow-500"></span>
                <span className="h-full bg-blue-500"></span>
              </div>
            </div>
            <div></div>
            <div></div>
          </div>
          <div className="relative h-full">
            <div className="group bg-gradient-to-b from-red-600 to-red-700 rounded-2xl overflow-hidden relative isolate px-6 py-6 3xl:py-8 h-full">
              <div className="flex flex-col items-center justify-center text-center h-full text-white">
                <span className={barlowCondensed.className + " text-4xl"}>
                  Nov 4-5, 2023
                </span>
                <br />{" "}
                <span className={plusJakartaSans.className + " z-40"}>
                  Jakarta Convention Center (JCC) Senayan, Assembly, <br />
                  Cendrawasih, and Plenary Hall
                </span>{" "}
                <span className={plusJakartaSans.className + " mt-3"}>
                  10 AM - 9 PM
                </span>
              </div>
              <Image
                alt="maskot"
                width={100}
                height={100}
                className="absolute top-0 rotate-[-30deg] right-0 translate-x-[30%] w-28 lg:w-32 2xl:w-36 3xl:w-40 pointer-events-none select-none group-hover:scale-[1.2] transition-transform duration-300"
                src="https://indonesiacomiccon.com/_nuxt/img/captain-icc-2023-pose-4.a33ab79.webp"
              />
            </div>
          </div>
          <div className="relative h-full">
            <div className="group bg-yellow-500 rounded-2xl overflow-hidden relative isolate px-10 py-10 h-full">
              <div className="relative z-10 flex flex-col items-center justify-center text-center h-full">
                <span className={plusJakartaSans.className}>
                  The biggest event in the year to celebrate
                </span>
                <span
                  className={
                    barlowCondensed.className +
                    " font-heading text-4xl lg:text-5xl !leading-none uppercase mt-1"
                  }
                >
                  5 Pop Culture Pillars
                </span>
                <SlideText
                  strings={["LIFESTYLE", "COMICS", "TOYS", "MOVIE", "GAMES"]}
                  animationType="slideUp"
                />
              </div>
              <Image
                alt="maskot"
                width={100}
                height={100}
                className="absolute z-0 bottom-0 translate-y-[20%] scale-x-[-1] 2xl:translate-y-[30%] left-0 -translate-x-[30%] w-20 lg:w-24 2xl:w-32 rotate-12 pointer-events-none select-none group-hover:scale-y-110 group-hover:scale-x-[-1] group-hover:rotate-[24deg] transition-transform duration-300"
                src="https://indonesiacomiccon.com/_nuxt/img/captain-icc-2023-pose-1.df3ac13.svg"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-3 lg:order-last">
            {links.map((item, index) => (
              <CardLink
                key={index}
                header={item.header}
                sub={item.sub}
                color={item.color}
                p="p-5"
              />
            ))}
          </div>
          <div className="flex flex-col items-center relative isolate">
            <div className="relative z-10 flex flex-col -space-y-[50%]">
              {images.map((item, index) => (
                <Image
                  src={item.src}
                  alt={item.alt}
                  key={index}
                  className={item.className}
                  width={478}
                  height={269}
                />
              ))}
            </div>
            <Link
              href="/"
              className="relative z-20 flex items-center gap-x-1 text-white text-xs sm:text-sm tracking-tight hover:underline"
            >
              <span>View the last edition of ICC&apos;s excitement</span>
              <GoArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div></div>
    </>
  );
};

export default SectionHero;
