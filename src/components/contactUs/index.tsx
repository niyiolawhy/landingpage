import React from "react";
import Button from "../utils/btn";
import Link from "next/link";

export default function ContactUs() {
  return (
    <div className="py-6">
      <div className="text-center py-6">
        <p className="text-4xl font-semibold max-w-[543px] mx-auto text-[#FFFFFF]">
          Are you still confused?
        </p>
        <p className="text-[#FFFFFF] max-w-[691px] mx-auto text-xl py-8 leading-[34px]">
          At Boltzshift, we are more than creators; we are digital architects
          with a passion for innovation.
        </p>
        <Link href={"/contact-us"}>
        <Button
          color="text-[#FFFFFF]"
          border="border border-[#FDE547]"
          textSize="px-6 py-3 rounded-3xl"
          children={"Contact Us Now!"}
          />
        </Link>
      </div>
    </div>
  );
}
