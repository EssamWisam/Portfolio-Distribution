
export const timelineHeader = {
  sectionName: "Roles",
  description: "Throughout my career, I've immersed myself in [diverse roles] that have shaped my [professional journey]."
}

export const timelineStyles = {
  "center": false
}

export const timelineData = [
  {
    id: 0,
    role: "Cross-platform Developer",
    company: "Freelance",
    date: "Jul-Sep 2022",
    description: [
      'Built and deployed a quiz mobile app and corresponding website "KeyTeachingKnowledge" for graduate students learning to teach English in Morocco.',
      'Built and deployed a mobile app for daily logging with statistics, Eisenhower matrix task tracking and methodic note-taking "Daily Chronicle".',
    ],
    buttonText: "See Example ▶",
    buttonLink: "https://github.com/EssamWisam/Daily-Chronicle-ReactNative",
  },
  {
    id: 1,
    role: "Technical Writer",
    company: "Towards Data Science",
    date: "Jul 2021-Now",
    description: [
      "Writing articles featuring natural language processing, deep learning, machine learning, mathematics and programming.",
    ],
    buttonText: "See Articles ▶",
    buttonLink: "https://medium.com/@essamwissam",
  },
  {
    id: 2,
    role: "Deep Learning Engineer",
    company: "Dstny Engage",
    date: "Aug-Sep 2023",
    description: [
      "Fine-tuned several LMs to mask sensitive information in user messages sent to chatbots in English, Dutch, Standard and Cairene Arabic. This includes over 27 entities as defined by the GDPR. Our best model had an F1 of 92.5%.",
      "Fine-tuned LMs for extractive QA in English, Dutch and Arabic. Ported 7B and 13B Llama 2 models to run in-house with GPTQ optimization for efficiency and prompt-engineered it for abstractive QA and validated both using Squadv1 dataset.",
    ],
    buttonText: "See Demo ▶",
    buttonLink: "https://github.com/tactful-ai/Dstny-LLM",
  },
  {
    id: 3,
    role: "Machine Learning Engineer",
    company: "The Julia Language",
    date: "Jun-Oct 2023",
    description: [
      "Created the Imbalance.jl and MLJBalancing.jl packages for JuliaAI and implemented over 11 oversampling and undersampling algorithms from the literature to address class imbalance.",
      "Wrote unit and end-to-end tests, extensive documentation, illustrative and practical guides, explanatory articles for the implemented techniques.",
      "Implemented MLJ.jl and TableTransforms.jl interfaces for each of the techniques, aside from the default pure functional interface",
      "Implemented wrappers that facilitate sequential and parallel combination of resamplers with MLJ classification models.",
    ],
    buttonText: "See Code and Docs ▶",
    buttonLink: "https://github.com/JuliaAI/Imbalance.jl",
  },
  {
    id: 4,
    role: "Research Assistant",
    company: "German Research Center of AI",
    date: "Nov 2023-Now",
    description: [
      "Assisting in research tasks related to large language models and natural language processing as well as teaching tasks related to large language models (creating slides and exercises).",
    ],
    buttonText: "",
    buttonLink: "",
  },
];
