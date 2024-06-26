import React from "react";
import { Spotlight } from "./ui/Spotlight";
import Link from "next/link";
import { Button } from "./ui/moving-border";

export function HeroSection() {
  return (
    <div className="h-[52.5rem] w-full rounded-md flex md:items-center md:justify-center py-[2rem] lg:py-0 bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-60 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="p-12 max-w-7xl  mx-auto relative z-10  w-full pt-24 md:pt-0">
        <h1 className="text-5xl mt-12  md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
          Spotlight <br /> is the new trend.
        </h1>
        <p className="mt-6 font-normal text-md  text-neutral-300 max-w-lg text-center mx-auto">
          Spotlight effect is a great way to draw attention to a specific part
          of the page. Here, we are drawing the attention towards the text
          section of the page. I don&apos;t know why but I&apos;m running out of
          copy.
        </p>
        <div className="mt-12 flex justify-center items-center ">
          <Link href={"/courses"}>
            <Button
              borderRadius="1.5rem"
              className="bg-white w-full dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 "
            >
              Explore courses
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
