import { Users, Languages, Award, Mountain } from 'lucide-react';

export const countries = [
  { name: "France", flag: "/images/flags/france.png" },
  { name: "Spain", flag: "/images/flags/spain.png" },
  { name: "Germany", flag: "/images/flags/germany.png" },
  { name: "Italy", flag: "/images/flags/italy.png" },
  { name: "United Kingdom", flag: "/images/flags/united kingdom.png" },
  { name: "Netherlands", flag: "/images/flags/netherlands.png" },
  { name: "Belgium", flag: "/images/flags/belgium.png" },
  { name: "Switzerland", flag: "/images/flags/switzerland.png" },
  { name: "Portugal", flag: "/images/flags/portugal.png" },
  { name: "Austria", flag: "/images/flags/austria.png" },
  { name: "Poland", flag: "/images/flags/poland.png" },
  { name: "Czech Republic", flag: "/images/flags/czech republic.png" }
];

export const carousel_flags_settings = {
  dots: false,
  infinite: true,
  speed: 3000,
  slidesToShow: 8,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: "linear",
  arrows: false,
  pauseOnHover: false,
  swipe: false,
  touchMove: false,
  draggable: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
      }
    }
  ]
};

export const features = [
  {
    icon: Users,
    title: "International Networking",
    description: "Connect with ambitious students and diplomatic experts from across Europe in an intimate mountain setting."
  },
  {
    icon: Languages,
    title: "Multilingual Experience", 
    description: "Practice diplomacy in multiple languages while developing your cross-cultural communication skills."
  },
  {
    icon: Award,
    title: "Leadership Development",
    description: "Build confidence in public speaking, negotiation, and strategic thinking through immersive simulations."
  },
  {
    icon: Mountain,
    title: "Unique Venue",
    description: "Experience MUN like never before in the breathtaking Pyrenees mountains, combining diplomacy with adventure."
  }
]; 