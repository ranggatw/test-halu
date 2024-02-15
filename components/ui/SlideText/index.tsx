"use client";

import React, { useState, useEffect } from "react";
import localFont from "next/font/local";

import "./styles.css";

const akiraFont = localFont({
  src: "../../../font/Akira.otf",
});

const buildAnimationStyle = (type: AnimationType, duration: string): object => {
  return {
    display: "inline-block",
    animation: `${type} ${duration}`,
    "animation-fill-mode": "forwards",
  };
};

type AnimationType = "slideUp";

type SlideTextProps = {
  strings: string[];
  interval?: number;
  animationType?: AnimationType;
  animationDuration?: string;
};

export const SlideText = ({
  strings,
  interval = 2000,
  animationType = "slideUp",
  animationDuration = "2s",
}: SlideTextProps) => {
  const defaultStyle = buildAnimationStyle(animationType, animationDuration);
  const [currString, setCurrString] = useState(strings[0]);
  const [animationStyle, setAnimationStyle] = useState(defaultStyle);

  useEffect(() => {
    const timer = setInterval(() => {
      const currIndex: number = strings.indexOf(currString);
      const nextIndex: number =
        currIndex < strings.length - 1 ? currIndex + 1 : 0;
      setCurrString(strings[nextIndex]);
    }, interval);

    return () => {
      setAnimationStyle({});
      clearInterval(timer);
      setAnimationStyle(animationStyle);
    };
  }, [currString, strings, interval, animationStyle]);

  return (
    <div key={currString} style={animationStyle}>
      <p
        style={{ WebkitTextStroke: "1px black" }}
        className={
          akiraFont.className + " text-4xl mt-5 stroke-black text-white"
        }
      >
        {currString}
      </p>
    </div>
  );
};
