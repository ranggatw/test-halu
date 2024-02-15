"use client";

import { useState } from "react";

import { FaYoutube, FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

import { SosmedProps } from "./index.type";

const Sosmed = ({ icon, link }: SosmedProps) => {
  const [isHovered, setIsHovered] = useState<boolean>(false);

  const renderIcon = () => {
    switch (icon) {
      case "facebook":
        return <FaFacebookF />;
      case "twitter":
        return <FaTwitter />;
      case "instagram":
        return <FaInstagram />;
      case "youtube":
        return <FaYoutube />;
      default:
        break;
    }
  };

  const renderColor = () => {
    switch (icon) {
      case "facebook":
        return "#3b5998";
      case "twitter":
        return "#1da1f2";
      case "instagram":
        return "#c13584";
      case "youtube":
        return "#ff0000";
      default:
        break;
    }
  };

  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="p-4 rounded-full text-white text-2xl transition-all hover:bg-white"
      style={{ color: isHovered ? renderColor() : "white" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {renderIcon()}
    </a>
  );
};

export default Sosmed;
