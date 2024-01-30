import React from "react";
import LinearSkills from "./LinearSkills";
import CircularSkills from "./CircularSkills";
import BubbleSkills from "./BubbleSkills";
import { formatText } from "../utils";
import "./skills.scss";

interface SkillsPageProps {
    softSkillsData: any[];
    techSkillsData: any[];
}

const SkillsPage: React.FC<SkillsPageProps> = ({softSkillsData, techSkillsData}) => {
  const skillsData = {
    sectionName: "Skills & Technologies",
    description:
      "As a computer engineer, I have acquired a [diverse set of skills] that allow me to [excel in various roles and projects]. These include:",
    skillsComment:
      "For a more [comprehensive or specific] list check the resume or <a href='https://www.linkedin.com/in/essamwisam/'>[Linkedin]</a>.",
  };

  const skillStyles = {
    center: false,
  };
  return (
    <section className="skills" id={skillsData.sectionName}>
      <article className="c-article">
        <header className="c-article__header">
          <h1
            style={{
              fontSize: "2.9rem",
              textAlign: skillStyles.center ? "center" : "left",
            }}
            className="c-article__title"
          >
            {skillsData.sectionName}
          </h1>
        </header>
      </article>
      <p
        style={{
          textAlign: skillStyles.center ? "center" : "justify",
          marginBottom: "2rem",
        }}
        className="description"
        dangerouslySetInnerHTML={{ __html: formatText(skillsData.description) }}
      />
      <div style={{ whiteSpace: "nowrap" }}>
        {/* <LineSkillsComponent skillData={techData}/> */}
        {/* <LineSkillsComponent skillData={softSkillData} color="secondary"/> */}

        <BubbleSkills
          skills={techSkillsData.concat(softSkillsData)}
          id={"force-directed-graph"}
        />
        {/* <BubbleSkills skills={softSkillData} id={"force-directed-graph-2"}/> */}
      </div>
      {/* <SkillComponent skills={techData} /> */}
      {/* <SkillComponent skills={softSkillData} color="secondary" /> */}
      <p
        style={{
          textAlign: skillStyles.center ? "center" : "justify",
          marginBottom: "2rem",
          fontStyle: "normal",
        }}
        className="description"
        dangerouslySetInnerHTML={{
          __html: formatText(skillsData.skillsComment),
        }}
      />
    </section>
  );
};

export default SkillsPage;