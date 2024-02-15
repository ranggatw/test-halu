"use client";
import React from "react";
import MenuItem from "../ui/MenuItem";
import Button from "../ui/Button";
import Logo from "../ui/Logo";

const Navbar = () => {
  return (
    <header className="flex fixed z-50 w-full h-16 lg:h-24 justify-between items-center bg-black/80 backdrop-blur text-white px-4 lg:px-32">
      <Logo />
      <nav className="hidden md:flex gap-2 relative">
        <MenuItem label="Home" href="/" active />
        <MenuItem label="Guests" href="/" />
        <MenuItem label="Rundown" href="/" />
        <MenuItem label="Tenants" href="/" />
        <MenuItem label="Promo" href="/" />
        <MenuItem label="Gallery" href="/" />
        <MenuItem label="More" href="/" />
      </nav>
      <Button label="Get Your Ticket" onClick={() => {}} variant="contained" />
    </header>
  );
};

export default Navbar;
