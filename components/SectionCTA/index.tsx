import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

import { Plus_Jakarta_Sans } from "next/font/google";

import Logo from "../ui/Logo";

import { HiArrowUpRight } from "react-icons/hi2";

const akiraFont = localFont({
  src: "../../font/Akira.otf",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: "300",
});

const CTA = () => {
  return (
    <div className="px-5 mt-24">
      <div className="flex flex-col items-center justify-center text-center">
        <h2
          className={
            akiraFont.className +
            " mt-6 text-4xl sm:text-5xl lg:text-6xl font-display uppercase !leading-[1.1] max-w-4xl mx-auto relative overflow-hidden text-transparent bg-clip-text bg-gradient-to-r from-white/40 via-white/100 to-white/40"
          }
        >
          Interested to visit Indonesia Comic Con x DG Con 2023?
        </h2>
        <Image
          src="https://indonesiacomiccon.com/_nuxt/img/icc-wristband-mockup.d0e6cff.webp"
          className="w-full max-w-2xl mt-16 hover:scale-110 transition-transform duration-1000 ease-in-out select-none pointer-events-none"
          width={500}
          height={250}
          alt="accessories"
        />
        <p className="max-w-2xl mx-auto mt-6 text-white text-lg lg:text-xl tracking-tight !leading-normal">
          Come and join us at Indonesia Comic Con x DG Con 2023, where
          you&apos;ll experience a celebration of pop culture like never before.
        </p>
        <div className="mt-8 flex items-center gap-x-4">
          <Link
            href="/"
            className="rounded-full flex items-center gap-x-2 text-base sm:text-lg tracking-tight px-8 py-6 font-semibold bg-white text-black"
          >
            Get your ticket
            <HiArrowUpRight size={15} />
          </Link>
        </div>
        <div className="flex flex-col items-center mt-16 lg:mt-20">
          <Image
            src="https://indonesiacomiccon.com/_nuxt/img/captain-icc-2023-pose-4.a33ab79.webp"
            alt="maskot"
            width={128}
            height={181}
            className="w-32"
          />
          <Logo />
          <span className="w-0.5 h-20 bg-gradient-to-b from-transparent to-yellow-500 my-8" />
          <p
            className={
              plusJakartaSans.className +
              " flex flex-col items-center gap-y-3 text-white"
            }
          >
            <span className="text-base lg:text-lg">
              Jakarta Convention Center (JCC) Senayan, Assembly, Cendrawasih,
              and Plenary Hall
            </span>
            <span className="font-semibold tracking-tight text-2xl lg:text-3xl">
              Nov 4-5, 2023
            </span>
            <span>10 AM - 9 PM</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTA;
