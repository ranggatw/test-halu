"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import { Barlow_Condensed, Plus_Jakarta_Sans } from "next/font/google";

import { SliderProps } from "./index.type";

import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { HiArrowUpRight } from "react-icons/hi2";

import "swiper/css";
import "swiper/css/pagination";

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: "700",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: "200",
});

const Slider = ({
  data,
  labelAction,
  maxSlide,
  hasContent = true,
  spaceBetween = 30,
}: SliderProps) => {
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

  return (
    <div>
      <Swiper
        navigation={{ prevEl, nextEl }}
        slidesPerView={maxSlide}
        spaceBetween={spaceBetween}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper cursor-grab"
      >
        {data.map((item, index) => (
          <div key={index}>
            <SwiperSlide>
              <Image
                src={item.src}
                alt={item.title}
                width={600}
                height={600}
                className="w-full"
              />
              {hasContent && (
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
              )}
            </SwiperSlide>
          </div>
        ))}
      </Swiper>
      <div className="relative flex flex-col items-center gap-6 mt-5 lg:mt-10">
        <div className="flex gap-3 justify-center items-center">
          <button
            ref={(node) => setPrevEl(node)}
            className="  text-white bg-custom-blue-primary p-6 font-thin rounded-full "
          >
            <SlArrowLeft size={10} />
          </button>
          <button
            ref={(node) => setNextEl(node)}
            className="  text-white bg-custom-blue-primary p-6 rounded-full"
          >
            <SlArrowRight size={10} />
          </button>
        </div>
        <Link
          href="/"
          className="py-4 pl-4 pr-3 rounded-full hover:bg-gray-900 text-white flex items-center justify-center gap-x-1 transition-colors duration-300 cursor-pointer"
        >
          <span className="tracking-tight text-xs sm:text-sm">
            {labelAction}
          </span>
          <HiArrowUpRight size={15} />
        </Link>
      </div>
    </div>
  );
};

export default Slider;
