import React from "react";
import Link from "next/link";
import clsx from "clsx";
import UnderLine from "@/components/icons/UnderLine";

interface MenuItemProps {
  label: string;
  href: string;
  active?: boolean;
}

const MenuItem = ({ label, href, active }: MenuItemProps) => {
  const { textWhite, textWhite60 } = {
    textWhite: active,
    textWhite60: !active,
  };
  return (
    <>
      <Link
        href={href}
        passHref
        className="hover:bg-custom-black-secondary px-6 py-5 rounded-full text-sm relative"
      >
        <p
          className={clsx("flex items-center gap-2", {
            textWhite,
            "text-white/60": textWhite60,
            "font-light": true,
          })}
        >
          {label}
        </p>
        <div className="block absolute z-50 top-12 left-8 w-6 h-2">
          {active && <UnderLine />}
        </div>
      </Link>
    </>
  );
};

export default MenuItem;
