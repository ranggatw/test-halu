import Image from "next/image";
import Marquee from "react-fast-marquee";

import { MarqueeProps } from "./index.type";

const MyMarquee = ({ data, hasText = true }: MarqueeProps) => {
  return (
    <Marquee>
      {data.map((item, index) => (
        <div key={index} className="flex flex-col items-center mx-2 max-w-40">
          <Image
            src={item.src}
            alt="marquee-item"
            width={100}
            height={100}
            className="w-40 h-40 object-contain bg-white rounded-[50px] smooth-corners sc-3"
          />
          {hasText && (
            <p className="text-center mt-2 h-10 font-thin text-white text-xs sm:text-sm line-clamp-2 uppercase">
              {item.title}
            </p>
          )}
        </div>
      ))}
    </Marquee>
  );
};

export default MyMarquee;
