import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  framer,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  notion,
  photoshop,
  plusSquare,
  protopie,
  raindrop,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  slack,
  sliders04,
  telegram,
  twitter,
  yourlogo,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "About Us",
    url: "/about",
  },
  {
    id: "2",
    title: "Services",
    url: "#how-to-use",
  },
  {
    id: "1",
    title: "Pricing",
    url: "#pricing",
  },

  {
    id: "3",
    title: "How we do it",
    url: "#roadmap",
  },
  {
    id: "4",
    title: "Contact Us",
    url: "#signup",
    onlyMobile: true,
  },
  {
    id: "5",
    title: "Sign in",
    url: "#login",
    onlyMobile: true,
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [notification4, notification3, notification2];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Ideal for architects.",
  "Customizable models.",
  "Animated walkthroughs.",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Understanding Your Needs",
    text: "Every project begins with a conversation. We listen carefully to your goals, whether it's creating an engaging virtual tour, capturing stunning photos, or designing a 3D concept of your property.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Leveraging Advanced Tools and Expertise",
    text: "We use the latest technology and techniques to ensure exceptional quality.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Crafting and Delivering Your Vision",
    text: "Our team brings your project to life, combining creativity and precision to produce stunning results.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Ensuring Post-Delivery Support",
    text: "Our work doesn’t end at delivery. We provide ongoing support to ensure you get the most out of our services.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "Step into your future home without leaving your current one. Our state-of-the-art virtual tours provide 360-degree walkthroughs, allowing you to explore every corner of the property as if you were there in person";

export const collabContent = [
  {
    id: "0",
    title: "Find Your Ideal Property",
    text: "Our intuitive search platform makes finding your dream property a breeze",
  },
  {
    id: "1",
    title: "Take a Virtual Tour from Anywhere",
  },
  {
    id: "2",
    title: "Connect with the Property Manager for Details",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Notion",
    icon: notion,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "Slack",
    icon: slack,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Photoshop",
    icon: photoshop,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Protopie",
    icon: protopie,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "Framer",
    icon: framer,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Raindrop",
    icon: raindrop,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Basic",
    description: "Perfect for individuals or small businesses",
    price: "199",
    features: [
      "One virtual tour per property",
      "10 high-quality interior and exterior images",
      " A 1-minute property walkthrough video",
    ],
  },
  {
    id: "1",
    title: "Premium",
    description: "Ideal for real estate agencies and property managers",
    price: "499",
    features: [
      "Up to 3 virtual tours per property,",
      "20 professional images, including aerial views",
      "A 3-minute video with cinematic transitions and background music.",
    ],
  },
  {
    id: "2",
    title: "Enterprise",
    description: "Designed for property developers and architects",
    price: null,
    features: [
      "Fully customized Blender models and animations",
      "Unlimited virtual tours with added features",
      "Includes photography, videography, and social media-ready promotional materials.",
    ],
  },
];

export const benefits = [
  {
    id: "0",
    title: "Explore at Your Own Pace",
    text: "With virtual tours, you're in control. Pause, zoom in on details, and revisit your favorite spaces anytime you want. Whether you're analyzing the kitchen layout or admiring the view from the balcony, you can take all the time you need without feeling rushed.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Access Properties Anytime, Anywhere",
    text: "No matter where you are, virtual tours make it possible to explore properties from across the globe. Whether you’re house-hunting locally or looking for a rental abroad, you have unlimited access to listings from your phone, tablet, or desktop.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "No Need for Physical Visits",
    text: "Say goodbye to traffic and packed schedules. Virtual tours eliminate the hassle of physical visits, saving you time and money. Get a full understanding of a property before deciding whether it’s worth visiting in person.",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Enhanced Property Insights",
    text: "See properties in a way photos alone can’t convey. With virtual tours, you get a better understanding of room dimensions, flow, and natural lighting. It's like walking through the property without stepping a foot outside your door.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Perfect for Busy Schedules",
    text: "Can’t make time during business hours? Virtual tours are available 24/7, letting you explore properties at your convenience. Whether it’s early morning or late at night, property hunting works around your schedule.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Make Confident Decisions",
    text: "Virtual tours empower you to make informed decisions with clarity. By fully exploring a property’s layout, design, and condition, you can narrow down your options and confidently choose a home or space that feels right. No surprises, just transparency and convenience.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
  },
];

export const socials = [

  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "3",
    title: "LinkedIn",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "4",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];
