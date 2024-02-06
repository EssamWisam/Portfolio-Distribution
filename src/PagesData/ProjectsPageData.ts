import { rand } from "../Pages/utils";

export const projectHeader = {
  sectionName: "The Epic Chronicles of My Projects",
  id: "Projects",
  tabs: ["Featured", "Magic Potions", "Procrastination", "Deep Sleep", "Coffee Drinking", "Staring at Wall",],
  activeTab: 'Featured',
  description: "Prepare to embark on a journey through the mystical lands of code where I wielded my coding spells to conjure up [a multitude of magnificent projects], with my brain as the main ingredient:",
  projectExtraLinkIcon: "FaGithub",
  projectsComment: "Behold, the fruit of my digital adventures!",
  buttonText: "Behold the Wonders"
}


export const projectStyles = {
  "center": false,
  "tabUI": rand({"true":0.5, "false":0.5}),
  "showBottom": rand({"true": 0.05, "false": 0.95}),
  "theme": rand({"ClassicGrid":0.5, "ModernGrid":0.5}),
}

export const projectData = [
  {
    title: "Selfie Drone",
    description: "A drone that automatically takes flattering selfies.",
    image: "https://http.cat/100",
    link: "https://selfiedrone.io",
    github_link: "https://github.com/selfiedrone",
    categories: ["Featured", "Magic Potions"],
    skills: ["Drone Piloting", "Photography"]
  },
  {
    title: "Pizza Delivery Robot",
    description: "A robot that delivers pizza with style!",
    image: "https://http.cat/101",
    link: "https://pizzarobot.com",
    github_link: "https://github.com/pizzarobot",
    categories: ["Featured"],
    skills: ["Robotics", "Pizza Making"]
  },
  {
    title: "Unicorn Translator",
    description: "Translate human speech into unicorn language.",
    image: "https://http.cat/102",
    link: "https://unicorntranslator.net",
    github_link: "https://github.com/unicorntranslator",
    categories: ["Featured", "Magic Potions"],
    skills: ["Linguistics", "Mythical Creatures"]
  },
  {
    title: "Bubble Wrap Simulator",
    description: "Virtual bubble wrap popping experience.",
    image: "https://http.cat/103",
    link: "https://bubblewrap.io",
    github_link: "https://github.com/bubblewrap",
    categories: ["Featured", "Procrastination"],
    skills: ["Bubbleology", "Procrastination"]
  },
  {
    title: "Nap Time Alarm",
    description: "An alarm clock that only wakes you up for important events...like nap time!",
    image: "https://http.cat/104",
    link: "https://naptimealarm.com",
    github_link: "https://github.com/naptimealarm",
    categories: ["Featured", "Deep Sleep"],
    skills: ["Sleep Engineering", "Time Management"]
  },
  {
    title: "Automatic Toothbrush",
    description: "A toothbrush that brushes your teeth while you sleep!",
    image: "https://http.cat/105",
    link: "https://automatedtoothbrush.com",
    github_link: "https://github.com/automatedtoothbrush",
    categories: ["Featured", "Deep Sleep"],
    skills: ["Dental Hygiene", "Automation"]
  },
  {
    title: "Dancing Cactus Bot",
    description: "A robot that dances to the rhythm of cactus music.",
    image: "https://http.cat/106",
    link: "https://dancingcactusbot.com",
    github_link: "https://github.com/dancingcactusbot",
    categories: [ "Deep Sleep"],
    skills: ["Robotics", "Music"]
  },
  {
    title: "Instant Ice Cream Maker",
    description: "Make ice cream appear out ice and cream",
    image: "https://http.cat/107",
    link: "https://instanticecream.com",
    github_link: "https://github.com/instanticecream",
    categories: [ "Staring at Wall"],
    skills: ["Culinary Magic", "Ice Creamology"]
  },
  {
    title: "Superhero Costume Generator",
    description: "Create unique superhero costumes with just a few clicks.",
    image: "https://http.cat/108",
    link: "https://superherocostumes.com",
    github_link: "https://github.com/superherocostumes",
    categories: [ "Coffee Drinking", "Staring at Wall"],
    skills: ["Fashion Design", "Comic Book Knowledge"]
  },
  {
    title: "Alien Communication Device",
    description: "Talk to extraterrestrial beings with ease.",
    image: "https://http.cat/109",
    link: "https://alienspeak.com",
    github_link: "https://github.com/alienspeak",
    categories: [ "Coffee Drinking"],
    skills: ["Extraterrestrial Linguistics", "Interstellar Communication"]
  }
];