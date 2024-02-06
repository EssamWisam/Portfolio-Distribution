import { rand } from "../Pages/utils";

export const navbarData = {
  logo: "Jerry Cruncher",
  
  pages: [
    "Home",
    "Career",
    "Skills",
    "Projects",
    "Education",
    "Tasks",
    "Featured",
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
