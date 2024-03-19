import { HiShieldCheck } from "react-icons/hi";
import { FaHandHoldingWater } from "react-icons/fa";
import { MdOutlineDirtyLens } from "react-icons/md";
import { MdDry } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { AiOutlineSound } from "react-icons/ai";
import { MdCancel, MdAnalytics } from "react-icons/md";
import { AiOutlineFileProtect } from "react-icons/ai";

import { FaBirthdayCake } from "react-icons/fa";
import { GiJourney } from "react-icons/gi";
import { FaEye } from "react-icons/fa";


const data = [
  {
    icon: <FaHandHoldingWater />,
    heading: "Water-repellent",
    detail:
      "Fabrics treated to resist water penetration, ensuring that moisture beads up and rolls off the surface rather than soaking into the fabric. Ideal for outdoor wear and protective gear, keeping you dry and comfortable in light rain or drizzle.",
  },
  {
    icon: <MdOutlineDirtyLens />,
    heading: "Stainless",
    detail:
      "Fabrics engineered to resist staining and discoloration, maintaining their pristine appearance even after exposure to spills, dirt, or other contaminants. Perfect for everyday use, offering long-lasting beauty and durability.",
  },
  {
    icon: <MdDry />,
    heading: "Quick-drying",
    detail:
      "Fabrics designed to dry rapidly after becoming wet, allowing moisture to evaporate quickly. Ideal for sports and outdoor activities, ensuring you stay comfortable and dry even in damp conditions.",
  },
];

const curtainsData = [
  {
    icon: <CiLight />,
    heading: "Light-blocking",
    detail:
      "Curtains designed to block out light, providing privacy and creating a darkened environment ideal for bedrooms or home theaters.",
  },
  {
    icon: <AiOutlineSound />,
    heading: "Sound-absorbing: ",
    detail:
      "Curtains engineered to dampen sound, reducing noise pollution from outside sources and creating a quieter, more peaceful indoor environment.",
  },
  {
    icon: <AiOutlineFileProtect />,
    heading: "Insulating",
    detail:
      "Curtains with thermal insulation properties, helping to regulate indoor temperature by trapping heat in the winter and blocking out heat in the summer, resulting in energy savings and increased comfort.",
  },
];

const aboutusData = [
  {
    icon: <FaBirthdayCake />,
    heading: "Since 2003",
    detail:
      "Bringing 20 years of fabric expertise from Dubai to India, renowned for premium quality and dedication.",
  },
  {
    icon: <GiJourney />,
    heading: "Journey",
    detail:
      "With over 20 years in the fabric industry, Dolphin Furnishing has earned trust and loyalty, dominating Dubai's fabric scene with luxury and quality.",
  },
  {
    icon: <FaEye />,
    heading: "Our Vision",
    detail:
      "Our vision is to inspire creativity and elevate living spaces by providing the finest tailored fabrics, empowering individuals to express their unique style with confidence.",
  },
];

export { data, curtainsData, aboutusData };