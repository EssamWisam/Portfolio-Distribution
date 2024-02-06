//@ts-nocheck
import React, { useEffect } from "react";
import './LinearSkills.scss';

interface ProgressBarProps {
  value: number;
  color?: string;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  color = "secondary",
}) => {
  return (
    <div
      className="progress-wrap progress"
      style={{
        background: getComputedStyle(document.documentElement).getPropertyValue(
          `--${color}-color-affected`
        ),
      }}
      data-progress-percent={value}
    >
      <div className="progress-bar progress"></div>
    </div>
  );
};

interface Skill {
  value: number;
  name: string;
  color: string;
}

interface LinearSkillsProps {
  skillData: Skill[];
  color?: string;
}

const LinearSkills: React.FC<LinearSkillsProps> = ({
  skillData,
  color = "tertiary",
}) => {
  useEffect(() => {
    moveProgressBar();

    window.addEventListener("resize", function () {
      moveProgressBar();
    });

    function moveProgressBar() {
      console.log("moveProgressBar");
      const progressWraps = document.querySelectorAll(".progress-wrap");

      progressWraps.forEach((progressWrap) => {
        const progressBar = progressWrap.querySelector(".progress-bar");

        const getPercent =
          parseFloat(progressWrap.getAttribute("data-progress-percent")) / 100;
        const getProgressWrapWidth = progressWrap.clientWidth;
        const progressTotal = getPercent * getProgressWrapWidth;

        // Apply a smooth transition for the left property
        progressBar.style.transition = "left 0.5s ease";

        // Set the left property to initiate the transition
        progressBar.style.left = progressTotal + "px";

        // Remove the transition after it's completed
        setTimeout(function () {
          progressBar.style.transition = "none";
        }, 500); // 500 milliseconds, adjust as needed
      });
    }
  }, []);

  return (
    <div
      className="lines-wrapper"
      style={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
        gap: "1rem",
      }}
    >
      {skillData.map((skill) => (
        <div style={{ flexBasis: "22%" }}>
          <h4>{skill.name} </h4>
          <ProgressBar key={skill.name} value={skill.value} color={color} />
        </div>
      ))}
    </div>
  );
};

export default LinearSkills;
