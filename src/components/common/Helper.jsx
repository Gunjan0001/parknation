import Bloglaptop from "../../assests/images/png/blogCard_laptop.png";
import BlogCard_ManWithTruck from "../../assests/images/png/BlogCard_ManWithTruck.png";
import BlogCard_TruckHighway from "../../assests/images/png/BlogCard_TruckHighway.png";
import camera from "../../assests/images/webp/securityCameraIcon.webp";
import SecurityProtectionIcon from "../../assests/images/webp/SecurityProtectionIcon.webp";
import securityPayment from "../../assests/images/webp/securityPayment.webp";
import truckIcon from "../../assests/images/webp/truckIcon.webp";
import SecurityDataIcon from "../../assests/images/webp/SecurityDataIcon.webp";
import paymentMethodIcon from "../../assests/images/webp/paymentMethodIcon.webp";
import privacyIcon from "../../assests/images/webp/privacyIcon.webp";
import SecurityGuardIcon from "../../assests/images/webp/SecurityGuardIcon.webp";
import {
  PaymentCard,
  ParkingIcon,
  RestbreakIcon,
  RentalIcons,
  RoutePlanningIcons,
  CargoSafetyIcon,
  CostControl,
} from "./Icon";
//  team image
import teamMember1 from "../../assests/images/png/team_member1.png";
import teamMember2 from "../../assests/images/png/team_member2.png";
import teamMember3 from "../../assests/images/png/team_member3.png";
// blog cards map data
export const BlogCardData = [
  {
    BlogImg: Bloglaptop,
    date: "26/03.2023",
    BlogHead: "Esther Howard",
    BlogPara:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
    ReadMore: "Read More...",
  },
  {
    BlogImg: BlogCard_TruckHighway,
    date: "26/03.2023",
    BlogHead: "Esther Howard",
    BlogPara:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
    ReadMore: "Read More...",
  },
  {
    BlogImg: BlogCard_ManWithTruck,
    date: "26/03.2023",
    BlogHead: "Esther Howard",
    BlogPara:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
    ReadMore: "Read More...",
  },
  {
    BlogImg: Bloglaptop,
    date: "26/03.2023",
    BlogHead: "Esther Howard",
    BlogPara:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
    ReadMore: "Read More...",
  },
  {
    BlogImg: BlogCard_TruckHighway,
    date: "26/03.2023",
    BlogHead: "Esther Howard",
    BlogPara:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
    ReadMore: "Read More...",
  },
  {
    BlogImg: BlogCard_ManWithTruck,
    date: "26/03.2023",
    BlogHead: "Esther Howard",
    BlogPara:
      "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
    ReadMore: "Read More...",
  },
];

export const SecurityCardData = [
  {
    icon: camera,
    title: "24/7 Camera In all Direction",
    para: "Nisl leo et eget vel orci vel nibh. Id et ipsum etiam in vitae amet vitae.",
  },
  {
    icon: securityPayment,
    title: "Secure payment",
    para: "Nisl leo et eget vel orci vel nibh. Id et ipsum etiam in vitae amet vitae.",
  },
  {
    icon: truckIcon,
    title: "Shades For all Trucks",
    para: "Nisl leo et eget vel orci vel nibh. Id et ipsum etiam in vitae amet vitae.",
  },
  {
    icon: paymentMethodIcon,
    title: "All payment method available",
    para: "Nisl leo et eget vel orci vel nibh. Id et ipsum etiam in vitae amet vitae.",
  },
  {
    icon: privacyIcon,
    title: "Privacy",
    para: "Nisl leo et eget vel orci vel nibh. Id et ipsum etiam in vitae amet vitae.",
  },
  {
    icon: SecurityGuardIcon,
    title: "Security guard for all gates",
    para: "Nisl leo et eget vel orci vel nibh. Id et ipsum etiam in vitae amet vitae.",
  },
  {
    icon: SecurityDataIcon,
    title: "All Activities Data Record",
    para: "Nisl leo et eget vel orci vel nibh. Id et ipsum etiam in vitae amet vitae.",
  },
  {
    icon: SecurityProtectionIcon,
    title: "Full protection To All Trucks",
    para: "Nisl leo et eget vel orci vel nibh. Id et ipsum etiam in vitae amet vitae.",
  },
];

export const TeamCardsData = [
  {
    teamImg: teamMember1,
    position: "CEO",
    name: "Esther Howard",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
  },
  {
    teamImg: teamMember2,
    position: "CEO",
    name: "Esther Howard",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
  },
  {
    teamImg: teamMember3,
    position: "CEO",
    name: "Esther Howard",
    desc: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. ",
  },
];

export const BenifitsData = [
  {
    head: "flexible payment",
    benefitImg: <PaymentCard />,
  },
  {
    head: "Convenient parking",
    benefitImg: <ParkingIcon />,
  },
  {
    head: "Rest breaks",
    benefitImg: <RestbreakIcon />,
  },
  {
    head: "App-based online rentals",
    benefitImg: <RentalIcons />,
  },
  {
    head: "Effective route planning",
    benefitImg: <RoutePlanningIcons />,
  },
  {
    head: "Cargo safety",
    benefitImg: <CargoSafetyIcon />,
  },
  {
    head: "Cost control",
    benefitImg: <CostControl />,
  },
];
