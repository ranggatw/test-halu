import Link from "next/link";
import React from "react";
import { GoArrowDownRight } from "react-icons/go";
import { Barlow_Condensed } from "next/font/google";

interface CardLinkProps {
  color: string;
  header: string;
  sub: string;
  label?: string | null;
  p: string;
}

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: "900",
});

const CardLink = ({ color, header, sub, label = null, p }: CardLinkProps) => {
  return (
    <div className={`p-px rounded-2xl bg-gradient-to-r ${color}`}>
      <div
        className={`bg-gradient-to-r from-gray-900 to-gray-950 flex justify-between items-center rounded-2xl h-full ${p} gap-7`}
      >
        <div className="text-white">
          <h1 className={barlowCondensed.className + " text-3xl"}>{header}</h1>
          <p className="text-sm line-clamp-2 mt-2">{sub}</p>
        </div>
        <Link href={"#"}>
          <div className="bg-white h-20 w-20 hover:scale-105 transition-all text-black flex items-center justify-center rounded-full">
            {label !== null ? (
              <p className="text-sm">{label}</p>
            ) : (
              <GoArrowDownRight size={25} />
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CardLink;
