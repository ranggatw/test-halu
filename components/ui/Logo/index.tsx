"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      className="cursor-pointer"
      onClick={() => router.push("/")}
      src="/assets/logo.png"
      alt="Indonesia Comic Con"
      width={188}
      height={48}
    />
  );
};

export default Logo;
