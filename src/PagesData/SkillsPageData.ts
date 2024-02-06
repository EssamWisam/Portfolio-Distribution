import { rand } from "../Pages/utils";

export const skillsHeader = {
  sectionName: "Skills & Technologies",
  id: "Skills",
  description:
    "As a procrastination engineer, I have acquired a [diverse set of balls] that allow me to [excel in juggling]. The balls are skills including:",
  skillsComment:
    "For a more [comprehensive or specific] list check the resume or <a href='https://www.linkedin.com/in/jerrycruncher/'>[Linkedin]</a>.",
};

export const skillsStyles = {
  "center": false,
  "theme": rand({"LinearSkills":0.35, "CircularSkills":0.35, "BubbleSkills":0.3}),
}

export const techSkillsData = [
  { name: "Rubber Duck Debugging", value: 95 },
  { name: "Magic Wand Programming", value: 90 },
  { name: "Fluent in Gibberish", value: 92 },
  { name: "Telepathic Coding", value: 93 },
  { name: "Infinite Loop Expert", value: 94 },
  { name: "Spoon Bending Scripting", value: 87 },
  { name: "React to Dad Jokes", value: 95 },
  { name: "React Native (Not-So-Native)", value: 93 },
];

export const softSkillsData = [
  { name: "Telepathic Communication", value: 95 },
  { name: "Invisible Collaboration", value: 94 },
  { name: "Positivity Overload", value: 96 },
  { name: "Leadership in Daydreams", value: 95 },
  { name: "Creativity in Procrastination", value: 96 },
  { name: "Organization", value: 55 },
  { name: "Writing in Hieroglyphics", value: 95 },
  { name: "Presentation (Pretending to Know)", value: 96 },
];
