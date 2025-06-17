import { Users, Languages, Award, Mountain, Globe, BookOpen, Computer } from 'lucide-react';

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
  speed: 5000,
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
  variableWidth: true,
  adaptiveHeight: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        variableWidth: true,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
        variableWidth: true,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        variableWidth: true,
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

export const allTopics = [
  {
    category: "Environment",
    icon: Globe,
    topics: [
      {
        title: "Climate Crisis",
        description: "Strategies for reducing greenhouse gas emissions and adapting to climate change",
        committee: "General Assembly",
        difficulty: "Advanced"
      },
      {
        title: "Biodiversity",
        description: "Protection of ecosystems and global biological diversity",
        committee: "Economic and Social Council",
        difficulty: "Intermediate"
      }
    ]
  },
  {
    category: "Development",
    icon: BookOpen,
    topics: [
      {
        title: "Food Security",
        description: "Ensuring access to sufficient and nutritious food for all",
        committee: "FAO",
        difficulty: "Intermediate"
      },
      {
        title: "Education for All",
        description: "Promoting access to quality education in developing countries",
        committee: "UNESCO",
        difficulty: "Beginner"
      }
    ]
  },
  {
    category: "Human Rights",
    icon: Users,
    topics: [
      {
        title: "Migration and Refugees",
        description: "Managing migration flows and protecting refugee rights",
        committee: "Human Rights Council",
        difficulty: "Advanced"
      },
      {
        title: "Freedom of Expression",
        description: "Balancing freedom of expression with combating disinformation",
        committee: "Human Rights Council",
        difficulty: "Intermediate"
      }
    ]
  },
  {
    category: "Technology",
    icon: Computer,
    topics: [
      {
        title: "Cyber Security",
        description: "Protection of computer systems against cyber attacks",
        committee: "UN",
        difficulty: "Intermediate"
      },
      {
        title: "Artificial Intelligence",
        description: "Responsible use of artificial intelligence",
        committee: "UN",
        difficulty: "Intermediate"
      }
    ]
  }
];
