import { rand } from "../Pages/utils";

export const educationHeader = {
    sectionName: "Education",
    id: "Education",
    description: "I studied procrastination for [20 years of doing nothing]:",
    educationComment: "",
    sliderTitle: "Certificates",
  }
  
  export const educationStyles = {
    "center": false,
    "scrollDirection": rand({"rtl":0.2, "ltr":0.8}),
  }
  
  export const educationData = {
    journey: [
        {
            degree: "Bacherlors of Sleep Engineering",
            img: "https://images.globalhighlights.com/allpicture/2021/06/bdd9119e11ef437389da5b13_cut_600x800_56.jpg",
            university: "Pyramids of Gaza",
            universityLink: "https://pyramid.giza/Home",
            year: "2018 - 2023",
            gpa: "9.0",
            bonus: ["Top of the Class", "Perfectly Slept in All Courses"]
        },
    ],
    certificates:  [
        {
          img: "https://i0.wp.com/www.excelsupersite.com/wp-content/uploads/2017/02/AwardCertificates_1.png?fit=1002%2C752&ssl=1",
          link: "https://www.linkedin.com/in/jerrycruncher/details/certifications/",
          name: "Certified Nap Specialist",
          provider: "The Dreamland Institute",
          date: "Jan. 2024"
        },
        {
          img: "https://i.pinimg.com/originals/fc/55/19/fc551974435939a0dfea6b17090c8016.png",
          link: "https://www.linkedin.com/in/jerrycruncher/details/certifications/",
          name: "Certified Coffee Addict",
          provider: "Caffeine Connoisseurs Association",
          date: "Sep. 2022"
        },
        {
          img: "https://i0.wp.com/www.excelsupersite.com/wp-content/uploads/2017/02/AwardCertificates_1.png?fit=1002%2C752&ssl=1",
          link: "https://www.linkedin.com/in/jerrycruncher/details/certifications/",
          name: "Master of Staring at Walls",
          provider: "Institute of Contemplative Sciences",
          date: "Sep. 2022"
        },
        {
          img: "https://i.pinimg.com/originals/fc/55/19/fc551974435939a0dfea6b17090c8016.png",
          link: "https://www.linkedin.com/in/jerrycruncher/details/certifications/",
          name: "Certified Procrastinator",
          provider: "Procrastination Academy",
          date: "Sep. 2022"
        },
        {
          img: "https://live.staticflickr.com/2113/1952121129_5f952e74a4_z.jpg",
          link: "https://www.linkedin.com/in/jerrycruncher/details/certifications/",
          name: "Certified Daydreamer",
          provider: "Fantasy Realms University",
          date: "Aug. 2022"
        },
        {
          img: "https://i0.wp.com/www.excelsupersite.com/wp-content/uploads/2017/02/AwardCertificates_1.png?fit=1002%2C752&ssl=1",
          link: "https://www.linkedin.com/in/jerrycruncher/details/certifications/",
          name: "Certified Professional Pillow Fluffer",
          provider: "Pillow Puffing Institute",
          date: "2020"
        }
      ]
      
}
    