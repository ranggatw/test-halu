import React from "react";
import Link from "next/link";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TitlePage from "@/components/ui/TitlePage";
import { tenantsData } from "./data";

const TenantsPage = () => {
  return (
    <div className="bg-custom-black-primary">
      <Navbar />
      <div className="px-1 lg:px-32 pt-32">
        <TitlePage
          title="Tenants"
          subTitle=" Here you can find the full list of brands that join Indonesia Comic Con
        2023"
        />
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-2 sm:gap-x-4 gap-y-12 mt-10 lg:mt-16">
          {tenantsData.map((item, index) => (
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
                  className="px-4 py-2 !leading-none rounded-lg bg-sky-600 hover:bg-sky-700 mt-6 font-bold tracking-tight transition-colors duration-300 flex"
                >
                  View Profile
                  <GoArrowUpRight className="ml-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TenantsPage;
