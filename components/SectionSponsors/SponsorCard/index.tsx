import Image from "next/image";
import { SponsorCardProps } from "./index.type";

const SponsorCard = ({ label, data, h }: SponsorCardProps) => {
  return (
    <div className="flex flex-col items-center text-center mt-3 gap-8 w-full">
      <h4 className=" font-light">{label}</h4>
      <div className="flex flex-wrap justify-center items-center gap-8 gap-x-3 sm:gap-x-8 mt-2">
        {data.map((item, index) => (
          <div key={index} className={`${h}`}>
            <Image
              key={index}
              src={item.src}
              width={200}
              height={100}
              alt={`images-${index}`}
              className="h-full w-full object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SponsorCard;
