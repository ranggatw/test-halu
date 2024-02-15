import { Barlow_Condensed } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { portfolios } from "./data";

const barlowCondensed = Barlow_Condensed({ subsets: ["latin"], weight: "900" });

const Portfolio = () => {
  return (
    <div className="grid grid-cols-1 gap-10 px-5 mt-24">
      <div className="max-w-4xl mx-auto text-white">
        <h2
          className={
            barlowCondensed.className +
            " font-heading uppercase text-transparent bg-clip-text bg-gradient-to-r from-white/40 via-white/100 to-white/40 !leading-[0.9] text-[18vw] xs:text-[16vw] md:text-[14vw] lg:text-[8vw] xl:text-[8vw] 2xl:text-[8vw]"
          }
        >
          Portfolio Review
        </h2>
        <p className="mt-5">
          Calling all artists, content creators, and art enthusiasts! Get your
          art portfolio reviewed by industry professionals who are passionate
          about supporting and nurturing artistic talent.
        </p>
        <div className="mt-10 text-xs sm:text-sm">
          <span className="font-bold tracking-tight">Notes :</span>
          <ul className="list-disc pl-5 flex flex-col gap-y-2 mt-2">
            <li>
              Portfolio Review will be held on Indonesia Comic Con, Nov 4-5,
              2023, in Jakarta Convention Center.
            </li>
            <li>
              You may sign up for more than one category or more than one
              studio.
            </li>
            <li>
              The chosen participants will get a free entry ticket to Indonesia
              Comic Con (no need to buy the ticket).
            </li>
            <li>The registration will be closed on October 19, 2023.</li>
          </ul>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-4 w-full">
        {portfolios.map((item, index) => (
          <div
            key={index}
            className="w-full rounded-2xl bg-gray-900 flex flex-col items-center text-center px-4 sm:px-8 py-5 sm:py-8"
          >
            <Link
              href="/"
              className="rounded-full bg-gradient-to-tr from-yellow-500 to-rose-600 p-0.5 aspect-square flex items-center justify-center active:scale-95 transition"
            >
              <div className="aspect-square w-16 flex-shrink-0 overflow-hidden border-[3px] border-gray-900 rounded-full">
                <Image
                  src={item.src}
                  alt={item.title}
                  width={100}
                  height={100}
                  className="w-full h-full object-contain"
                />
              </div>
            </Link>
            <div className="flex flex-col items-center mt-3 text-white">
              <h6 className="font-bold tracking-tight text-base sm:text-lg !leading-[1.4]">
                {item.title}
              </h6>
              <p className="text-xs sm:text-sm !leading-normal mt-2">
                {item.sub}
              </p>
              <Link
                href={item.link}
                className="px-4 py-2 !leading-none rounded-lg bg-sky-600 hover:bg-sky-700 mt-6 font-bold tracking-tight transition-colors duration-300"
              >
                Join
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
