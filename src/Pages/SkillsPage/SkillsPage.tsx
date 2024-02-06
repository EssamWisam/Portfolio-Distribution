import React from "react";
import SectionHeader from "../../Common/SectionHeader/SectionHeader";
import LinearSkills from "./LinearSkills";
import CircularSkills from "./CircularSkills";
import BubbleSkills from "./BubbleSkills";
import { formatText } from "../utils";

interface SkillsPageProps {
    skillsHeader: any;
    skillsStyles: any;
    softSkillsData: any[];
    techSkillsData: any[];
}

const SkillsPage: React.FC<SkillsPageProps> = ({skillsHeader, skillsStyles, softSkillsData, techSkillsData}) => {

  return (
    <section className="skills" id={skillsHeader.id}>
      <SectionHeader sectionName={skillsHeader.sectionName} description={skillsHeader.description} isCentered={skillsStyles.center} />
      {skillsStyles.theme === "CircularSkills" && <div style={{ whiteSpace: "nowrap" }}>
        <CircularSkills skills={techSkillsData} color="tertiary"/>
        <CircularSkills skills={softSkillsData} color="secondary"/>
      </div>}
      {skillsStyles.theme === "LinearSkills" && <div style={{ whiteSpace: "nowrap" }}>
        <LinearSkills skillData={techSkillsData} color="tertiary"/>
        <LinearSkills skillData={softSkillsData} color="secondary"/>
      </div>}
        {skillsStyles.theme === "BubbleSkills" && <BubbleSkills skills={techSkillsData.concat(softSkillsData)} id={"force-directed-graph"} />}
      <p
        style={{
          textAlign: skillsStyles.center ? "center" : "justify",
          marginBottom: "2rem",
          marginTop: "1rem",
          fontStyle: "normal",
        }}
        className="description"
        dangerouslySetInnerHTML={{
          __html: formatText(skillsHeader.skillsComment),
        }}
        id="comment"
      />
    </section>
  );
};

export default SkillsPage;