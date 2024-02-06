import { rand } from "../Pages/utils";

export const recommendationsHeader = {
    sectionName: "Recommendations",
    id: "Recommendations",
    description:
      "See what others think about my expertise in procrastination",
    recommendationsComment:
      "You can see more by heading to my [<a href='https://www.linkedin.com/in/jerrycrunc/'>LinkedIn profile</a>]",
  };
  

  export const recommendationsStyles = {
    "center": false,
    "theme": rand({"BasicRecommendation":0.5, "FancyRecommendation":0.5}),
  }

  export const recommendationsData = [
    {
      "name": "Sleepy Sloth",
      "role": "Chief Coffee Drinker @ Snooze Enterprises",
      "date": "February 2024",
      "quote": "Jerry's dedication to coffee consumption is unparalleled! As a fellow procrastinator, I can attest to his expertise in brewing the perfect cup of coffee to accompany our endless procrastination marathons. ",
      "link": "https://www.linkedin.com/in/jerrycruncher/details/recommendations/?detailScreenTabIndex=0",
      "img": "https://live.staticflickr.com/790/40264652874_56c9e06c7a_b.jpg"
    },
    {
      "name": "Mr. Bean",
      "role": "Chief Procrastination Officer @ Lazy Corp",
      "date": "January 2024",
      "quote": "Jerry is the epitome of procrastination excellence! His ability to delay tasks until the last possible moment is truly inspiring. .",
      "link": "https://www.linkedin.com/in/jerrycruncher/details/recommendations/?detailScreenTabIndex=0",
      "img": "https://upload.wikimedia.org/wikipedia/commons/f/f1/Atkinson_Rowan.jpg"
    },
    {
      "name": "Captain Snooze",
      "role": "CEO @ Naptime Co.",
      "date": "March 2024",
      "quote": "Working with Jerry has been an absolute pleasure...when he's awake, that is! His talent for procrastination is matched only by his love for coffee. Despite his tendency to put things off until tomorrow!",
      "link": "https://www.linkedin.com/in/jerrycruncher/details/recommendations/?detailScreenTabIndex=0",
      "img": "https://www.alexrossart.com/cdn/shop/products/ca_1024x1024.jpg?v=1623778327"
    }
  ]
  
  