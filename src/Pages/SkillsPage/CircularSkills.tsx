import { PercentageCircle } from "react-best-percentage-circle";
import React from "react";
import "./CircularSkills.scss";

interface Skill {
  value: number;
  name: string;
  color: string;
}

interface SkillComponentProps {
  skills: Skill[];
  color?: string;
}

const CircularSkills: React.FC<SkillComponentProps> = ({
  skills,
  color = "tertiary",
}) => {
  return (
    <div>
      <div className="circles-wrapper">
        {skills.map((skill, index) => (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "0.7rem",
            }}
          >
            <PercentageCircle
              percentage={skill.value}
              primaryColor={getComputedStyle(
                document.documentElement
              ).getPropertyValue(`--${color}-color-affected`)}
              size={110}
            />
            <div style={{maxWidth: '110px'}}>
            <h4
              style={{
                textAlign: "center",
                fontSize: "0.8rem",
                whiteSpace: "pre-wrap",
                overflowWrap: "break-word",
              }}
            >
              {skill.name}
            </h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CircularSkills;
