import { rand } from "../Pages/utils";

export const heroData = {
    id: "Home",

    images: ["https://static.vecteezy.com/system/resources/previews/026/480/450/original/cute-halloween-ghost-png.png", "https://files.cults3d.com/uploaders/19196355/illustration-file/d521cca9-e7f8-42e2-aa91-e63cc2c350bf/16zzgq.jpg", "https://pbs.twimg.com/profile_images/941030389266579458/DUihl_ix_400x400.jpg"],

    title: rand({"Hey, I am Jerry Cruncher":0.5, "Welcome to Jerry's Profile":0.3, "Hello! Cruncher is Here": 0.2}),

    roles: [
      "Chief Procrastination Officer",
      "Senior Coffee Drinker",
      "Director of Emoji Usage",
      "Master of Debugging",
      "Code Ninja Warrior"
    ],

    roleDuration: 1600,

    about: "Meet Jerry, the [epitome of inefficiency] and yet somehow the [unsung hero of mediocrity]. Born with a natural talent for [finding the path of least resistance], Jerry has mastered the art of [doing everything and nothing] at the same time. You must hire Jerry immediately or miss out losing nothing and your business.",

    reachOutBText: rand({"Email Me":0.6, "Reach Me":0.4}),

    email: "jerryCruncher@outlook.com",

    downloadBText: "Download CV",

    CV: "https://cdnuploads.aa.com.tr/uploads/Contents/2023/12/11/thumbs_b_c_20ad63bd572bed32477e1c2067fa72e5.jpg?v=085328",

    extraBText: "",

    extraLink: "",

    buttonBorderRadius: '3rem',

    social : ["FaGithub", "FaLinkedin", "FaTwitter", "FaDiscord",],

    socialLinks: ["https://github.com/jerrycruncher", "https://www.linkedin.com/in/jerrycruncher/", "https://twitter.com/jerry",  "https://discordapp.com/users/cruncher"],

    socialText: "Connect with me ",

    quotes: [
      "I'm not lazy, I'm on energy-saving mode.",
      "I would lose weight, but I hate losing.",
      "I put the 'pro' in procrastination.",
      "I'm not shy, I'm just holding back my awesomeness so I don't intimidate you.",
    ]

  }

  export const heroStyles = {
    fontSizes: ["2.9rem", "2.0rem", "1.0rem"],
    
    imageOnLeft: rand({"true":0.5, "false":0.5} ),
    
    imgDim: '400px',
    
    roundness: "50%",
    
    hideImage: rand({"false":0.8, "true":0.2}),
    
    center: rand({"false":0.7, "true":0.3} ),
    
    buttonRoundness: "3rem"
  }
