import { TbWorldCode } from "react-icons/tb";
import { SiMaterialdesignicons } from "react-icons/si";
import { TbDeviceMobileVibration } from "react-icons/tb";
import nurse from "@/assets/Frame 23.png";
import doctor from "@/assets/Frame 24.png";
import lawyer from "@/assets/Frame 25.png";
import judge from "@/assets/Frame 26.png";
import Image from "next/image";

export const ServiceTools = [
  {
    icon: <TbWorldCode/>,
    title: "Web Development",
    description:
      "Transform your digital footprint with our cutting-edge web design and development services. We craft visually stunning, user-friendly websites that leave a lasting impression.",
  },
  {
    icon: <SiMaterialdesignicons/>,
    title: "UI/UX Design",
    description:
      "Crafting seamless and enjoyable user experiences is at the core of what we do. Our UX design ensures that every interaction with your digital presence is intuitive and engaging.",
  },
  {
    icon: <TbDeviceMobileVibration/>,
    title: "Mobile App Development",
    description:
      "From concept to deployment, we bring your app ideas to life. Our mobile app development services combine functionality with a sleek design, ensuring a seamless user experience",
  },
];
export const AboutUsTools = [
  { id: 1, image: nurse },
  { id: 2, image: doctor },
  { id: 3, image: lawyer },
  { id: 4, image: judge },
];
