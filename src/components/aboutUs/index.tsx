import React from "react";
import { AboutUsTools } from "../utils/statics";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="py-6">
      <div className="text-center py-6">
        <h2 className="text-[#FDE547] text-xl py-4">About Us</h2>
        <p className="text-4xl font-semibold max-w-[543px] mx-auto text-[#FFFFFF]">
          Meet the Visionaries Behind Boltzshift&apos;s Digital Odyssey
        </p>
        <p className="text-[#FFFFFF] max-w-[691px] mx-auto text-xl py-8 leading-[34px]">
          Get the most talented candidates and bring them to the top of your
          hiring funnel with Boltzshift.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {AboutUsTools.map((tool) => (
          <div
            className="flex justify-center items-center rounded-lg border border-[#FFFFFF] p-6 backdrop-blur-md opacity-50 hover:opacity-100 transition-all duration-300 ease-in-out"
            key={tool.id}
          >
            <Image
              src={tool.image}
              alt="About Us Image"
              className="rounded-lg"
              layout="intrinsic"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
