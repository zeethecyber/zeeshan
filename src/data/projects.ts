import dcImage from "./../../public/assets/images/delivery_champs.png";
import wanterImage from "./../../public/assets/images/wanter_market.png";
import shoppingBuddy from "./../../public/assets/images/shopping-buddy.webp";
export const PROJECTS = [
  {
    id: 1,
    title: "DC Manager",
    imgSrc: dcImage,
    slug: "dc-manager",
    short_description: "An android app used to manage food orders.",
    long_description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo velit
    ipsa modi, explicabo sed perferendis nam corporis in repudiandae at
    culpa voluptate eos similique animi rerum numquam soluta sapiente
    molestiae nulla. Accusamus, omnis ex! Eligendi maxime accusamus quas
    cupiditate mollitia!`,
    tags: ["React Native", "Javascript", "PHP"],
    googlePlay:
      "https://play.google.com/store/apps/details?id=com.waantech.deliverychampsmanager&pcampaignid=web_share",
  },
  {
    id: 1,
    title: "DC Customer",
    imgSrc: dcImage,
    slug: "dc-customer",
    short_description: "A cross platform app for customers to order food.",
    long_description: "",
    tags: ["React Native", "Javascript", "PHP"],
    googlePlay:
      "https://play.google.com/store/apps/details?id=com.waantech.deliverychamps&pcampaignid=web_share",
  },
  {
    id: 1,
    title: "Shopping Buddy",
    imgSrc: shoppingBuddy,
    slug: "shopping-buddy",
    short_description: "Cross-platform E-commerce solution, made in Flutter.",
    long_description: "",
    tags: ["Flutter", "Dart", "Firebase", "Laravel"],
    github: "",
    liveLink: "",
    googlePlay:
      "https://play.google.com/store/apps/details?id=com.shoppingbuddy.customer_app&pcampaignid=web_share",
  },
];
