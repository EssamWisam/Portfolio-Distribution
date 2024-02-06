import { rand } from "../Pages/utils";

export const navbarData = {
  logo: "ESSAM WISAM",
  
  pages: [
    "Home",
    "Roles",
    "Skills",
    "Projects",
    "Education",
    "Blogs",
    "YouTube",
    "Recommendations",
  ],

  icons: [
    "MdHome",
    "MdWork",
    "MdBuild",
    "MdExtension",
    "MdSchool",
    "MdAssignment",
    "MdPlayCircle",
    "MdPeople",
  ],
};

export const navbarStyles = {

  showIcons: rand({"true":0.3, "false":0.7} ), 

  rounded: rand({"true":0.35, "false":0.65} ),
};
