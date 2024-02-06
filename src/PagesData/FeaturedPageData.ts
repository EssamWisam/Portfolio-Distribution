import { rand } from "../Pages/utils";

export const featuredHeader = {
    sectionName: "Featured Work",
    id: "Featured",
    description: "[Juggling balls] to share fun wasn't enough. I also have a [featured work]:",
    featuredComment: "",
    buttonText: "View Fun Scene"
  }
  
  export const featuredStyles = {
    center: false,
    theme: rand({"FeaturedCardsGroup":0.5, "FeaturedCarousel":0.5}),
    direction: 'left'
  }
  
  export const featuredData = [
      {
        extraFact: "Funny Clown",
        title: "Waterproof Liquid",
        description: "A liquid that can be used to fill up your water bottles.",
        image: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2023/07/top-20-small-dog-breeds.jpeg.jpg",
        link: "https://www.youtube.com/",
      },
      {
        extraFact: "Cute Doggo",
        title: "Floating Ice",
        description: "In this article, I will show you why doggo is such a cute animal.",
        image: "https://www.hartz.com/wp-content/uploads/2022/04/small-dog-owners-1.jpg",
        link: "https://www.youtube.com/",
      },
      {
        extraFact: "Funny Clown",
        title: "Pure Gold Silver",
        description: "Maybe alchemists are right and with the gold and silver, you can make gold and silver.",
        image: "https://media.cnn.com/api/v1/images/stellar/prod/191006152638-01-pets-and-our-health.jpg?q=w_2000,h_1125,x_0,y_0,c_fill/h_618",
        link: "https://www.youtube.com/",
      },
      
    ]
    