"use client";
import React from "react";
import MenuItem from "../ui/MenuItem";
import Button from "../ui/Button";
import Logo from "../ui/Logo";
import { usePathname } from "next/navigation";

const MENU = [
  { label: "Home", href: "/" },
  { label: "Guests", href: "/guests" },
  { label: "Tenants", href: "/tenants" },
  { label: "Promo", href: "/promo" },
  { label: "Gallery", href: "/gallery" },
  { label: "More", href: "/more" },
];

const Navbar = () => {
  const pathname = usePathname();

  return (
    <header className="flex fixed z-50 w-full h-16 lg:h-24 justify-between items-center bg-black/80 backdrop-blur text-white px-4 lg:px-32">
      <Logo />
      <div className="hidden md:flex gap-2 relative">
        {MENU.map((item) => (
          <MenuItem
            key={item.label}
            label={item.label}
            href={item.href}
            active={pathname === item.href}
          />
        ))}
      </div>
      <Button label="Get Your Ticket" onClick={() => {}} variant="contained" />
    </header>
  );
};

export default Navbar;
