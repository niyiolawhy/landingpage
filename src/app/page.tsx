import AboutUs from "@/components/aboutUs";
import ContactUs from "@/components/contactUs";
import Services from "@/components/services";
import Button from "@/components/utils/btn";
import Link from "next/link";

export default function Home() {
  return (
    <div className=" py-12 sm:6 h-full mx-auto px-8 sm:px-16 md:px-24 bg-[#201E07]">
      <div className="text-center items-center">
        <h2 className="text-[#FFFFFF] max-w-[711px] mx-auto text-4xl sm:text-5xl font-semibold leading-[48px] sm:leading-[64px]">
          Crafting Digital Journeys{" "}
          <span className="text-[#FDE547]">seamlessly</span> and Transforming
          ideas into online <span className="text-[#FDE547]">excellence</span>
        </h2>
        <p className="text-[#FFFFFF] max-w-[849px] mx-auto text-lg sm:text-2xl py-8 leading-[28px] sm:leading-[32px]">
          Join us on a journey beyond the ordinary. Boltzshift pioneers digital
          solutions that transcend expectations, creating connections that
          resonate and inspire.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6">
          <Button
            color=" text-[#07070A] bg-[#FDE547]"
            textSize="py-2 px-4 rounded-3xl"
          >View Demo</Button>
          <Link href="/contact-us">
          <Button
            color="text-[#FFFFFF] border-[#FDE547]"
            textSize="py-2 px-4 rounded-3xl"
            border="border"
            >Contact Us</Button>
            </Link>
        </div>
      </div>
      <div id="services" className="py-12 sm:py-6">
        <Services />
      </div>
      <div id="aboutUs" className="py-12 sm:py-6">
        <AboutUs />
      </div>
      <div id="contactUs" className="pt-12 sm:pt-6">
        <ContactUs />
      </div>
    </div>
  );
}
