import React from "react";
import { Barlow_Condensed, Plus_Jakarta_Sans } from "next/font/google";

const barlowCondensed = Barlow_Condensed({ subsets: ["latin"], weight: "900" });

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: "200",
});

interface TitlePageProps {
  title: string;
  subTitle?: string;
}

const TitlePage = ({ title, subTitle }: TitlePageProps) => {
  return (
    <div className="flex flex-col text-center">
      <h1
        className={
          barlowCondensed.className +
          " font-heading uppercase bg-clip-text text-white font-display text-4x sm:text-5xl lg:text-8xl 2xl:text-7xl text-center"
        }
      >
        {title}
      </h1>
      <p
        className={
          plusJakartaSans.className + " mt-3 text-gray-300 max-w-lg mx-auto"
        }
      >
        {subTitle}
      </p>
    </div>
  );
};

export default TitlePage;
