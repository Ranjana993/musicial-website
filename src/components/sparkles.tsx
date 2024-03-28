"use client";
import React from "react";
import { SparklesCore } from "./ui/sparkles";
import { AnimatedTooltipPreview } from "./Tooltip";

export function SparklesPreview() {
  return (
    <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden rounded-md">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>
      <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
        Our Testimonial
      </h1>
      <p className="md:text-4xl mt-2 text-2xl lg:text-2xl text-center text-white relative z-20">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur ea impedit quod.
      </p>
      <div>
        <AnimatedTooltipPreview />
      </div>
    </div>
  );
}
