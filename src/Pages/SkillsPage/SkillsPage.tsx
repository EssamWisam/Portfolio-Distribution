import React from "react";
import SectionHeader from "../../Common/SectionHeader";
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
    <section className="skills" id={skillsHeader.sectionName}>
      <SectionHeader sectionName={skillsHeader.sectionName} description={skillsHeader.description} isCentered={skillsStyles.center} />
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
          textAlign: skillsStyles.center ? "center" : "justify",
          marginBottom: "2rem",
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