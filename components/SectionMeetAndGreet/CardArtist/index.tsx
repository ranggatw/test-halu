import Image from "next/image";
import Link from "next/link";

import { Barlow_Condensed } from "next/font/google";
import { CardArtistProps } from "./index.type";

const barlowCondensed = Barlow_Condensed({ subsets: ["latin"], weight: "700" });

const CardArtist = ({ src, title, attend }: CardArtistProps) => {
  return (
    <div className="relative">
      <div className="z-10">
        <Image
          src={src}
          alt={title}
          width={500}
          height={500}
          className="aspect-[4/5] w-full"
        />
        <div className="absolute inset-x-0 bottom-16 h-1/2 bg-gradient-to-t from-black" />
      </div>
      <div className="relative z-20 flex flex-col items-center text-center -mt-10 text-white">
        <h1
          className={
            barlowCondensed.className +
            " font-heading text-2xl !leading-[1.1] mt-3"
          }
        >
          {title}
        </h1>
        <p className="text-xs sm:text-sm mt-2">{attend}</p>
        <Link
          className="px-3 py-1.5 font-bold tracking-tight bg-blue-600 hover:bg-blue-700 transition-colors duration-300 rounded-lg mt-3"
          href="/"
        >
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default CardArtist;
