import CardLink from "@/components/ui/Card/CardLink";
import { links } from "../data";
import Link from "next/link";

const RightContent = () => {
  return (
    <div className="flex flex-col gap-y-4">
      {links.map((item, index) => (
        <CardLink
          header={item.header}
          sub={item.sub}
          label={item.label}
          color={item.color}
          key={index}
          p="p-7"
        />
      ))}
      <div className="mt-4 max-w-xl flex flex-col items-start text-white">
        <p>
          Do you have any ideas on how we can work together to build a better
          Indonesia Comic Con? Please share your thoughts and suggestions.
        </p>
        <Link
          href="/"
          className="mt-4 px-4 py-3 rounded-lg bg-gray-900 font-bold tracking-tight !leading-none transition-colors duration-300 hover:bg-white hover:text-black"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
};

export default RightContent;
