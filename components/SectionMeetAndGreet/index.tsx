import CardArtist from "./CardArtist";

import { Barlow_Condensed } from "next/font/google";

import { artists } from "./data";

const barlowCondensed = Barlow_Condensed({ subsets: ["latin"], weight: "900" });

const MeetnGreet = () => {
  return (
    <div className="grid grid-cols-1 gap-10 px-5 lg:px-32 mt-24">
      <div className="max-w-4xl mx-auto text-white">
        <h2
          className={
            barlowCondensed.className +
            " font-heading uppercase text-transparent bg-clip-text bg-gradient-to-r from-white/40 via-white/100 to-white/40 !leading-[0.9] text-[18vw] xs:text-[16vw] md:text-[14vw] lg:text-[6vw] xl:text-[6vw] 2xl:text-[6vw]"
          }
        >
          Meet and Greet
        </h2>
        <p className="mt-5 text-center">
          Sign up now for an exclusive meet and greet with your favorite VTuber!
          <br />
          <br />
          <span className="text-xs sm:text-sm text-center">
            The registration will be closed on Nov 2, 17:00.
          </span>
        </p>
      </div>
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-x-4 gap-y-8 mt-10">
        {artists.map((item, index) => (
          <CardArtist
            key={index}
            src={item.src}
            title={item.title}
            attend={item.attend}
          />
        ))}
      </div>
    </div>
  );
};

export default MeetnGreet;
