import React from "react";
import { ServiceTools } from "../utils/statics";

export default function Services() {
  return (
    <div className=" py-6">
      <div className="text-center py-6">
        <h2 className="text-[#FDE547] text-xl py-4">Service</h2>
        <p className="text-4xl font-semibold max-w-[543px] mx-auto text-[#FFFFFF]">
          We help your business grow
        </p>
        <p className="text-[#FFFFFF] max-w-[691px] mx-auto text-xl py-8 leading-[34px]">
          At Boltzshift, we offer a spectrum of digital services tailored to
          elevate your online presence
        </p>
      </div>

      <div className="grid grid-cols-1  lg:grid-cols-3 gap-8">
        {ServiceTools.map((tool) => (
          <div
            className="flex gap-4 rounded-lg border border-[#FFFFFF] p-4  hover:opacity-100 opacity-50 transition-all duration-300 ease-in-out flex-col"
            key={tool.title}
          >
            <p className="text-[#FEFBC3]">{tool.icon}</p>
            <h3 className="text-[#FFFFFF] text-xl font-semibold">
              {tool.title}
            </h3>
            <p className="text-[#FFFFFF] leading-[]">{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
