import { rand } from "../Pages/utils";

export const timelineHeader = {
  sectionName: "Career",
  id: "Career",
  description: "It's not that I have [many careers], it's that all the careers [I have were real jobs]."
}

export const timelineStyles = {
  "center": false,
  "theme": rand({"HorizontalTimeline":0.5, "LongtidunalTimeline":0.5}),
}

export const timelineData = [
  {
    id: 0,
    role: "Professional Nap Taker",
    company: "Dreamland Inc.",
    date: "Jan 2020-Dec 2023",
    description: [
      "Achieved expert level in the art of napping.",
      "Participated in numerous nap-related research studies.",
    ],
    buttonText: "View Nap Achievements ▶",
    buttonLink: "https://example.com/naps",
  },
  {
    id: 1,
    role: "Chief Emoji Consultant",
    company: "Emoji Enterprises",
    date: "Mar 2021-Feb 2024",
    description: [
      "Provided expert advice on appropriate emoji usage in various contexts.",
      "Conducted extensive research on the evolution of emojis.",
    ],
    buttonText: "Explore Emoji Universe ▶",
    buttonLink: "https://example.com/emojis",
  },
  {
    id: 2,
    role: "Master of Procrastination",
    company: "Delay Dynamics",
    date: "Jan 2019-Present",
    description: [
      "Specialized in delaying tasks until the last possible moment.",
      "Developed innovative procrastination techniques.",
    ],
    buttonText: "Learn Procrastination Secrets ▶",
    buttonLink: "https://example.com/procrastination",
  },
  {
    id: 3,
    role: "Director of Coffee Consumption",
    company: "Java Junction",
    date: "Jun 2022-May 2025",
    description: [
      "Led strategic initiatives to maximize coffee intake efficiency.",
      "Organized company-wide coffee tasting events.",
    ],
    buttonText: "Join Coffee Club ▶",
    buttonLink: "https://example.com/coffee",
  },
  {
    id: 4,
    role: "Senior Cat Video Analyst",
    company: "Purrfect Media",
    date: "Apr 2023-Present",
    description: [
      "Analyzed thousands of cat videos for entertainment value.",
      "Published groundbreaking research on the correlation between cat video length and viewer engagement.",
    ],
    buttonText: "Watch Cat Videos ▶",
    buttonLink: "https://example.com/cats",
  },
]