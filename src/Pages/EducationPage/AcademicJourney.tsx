import React from 'react';
import './AcademicJourney.scss';

const AcademicJourney: React.FC<{ educationData: any }> = ({ educationData }) => {
  return (
        <div className="educational-cards">
        {educationData.journey.map((stage:any, index:number) => (
          <div key={index} className="education-card">
            <div>
              <h3>{stage.degree}</h3>
              <a href={stage.universityLink} target="_blank" rel="noreferrer">
              <h4 className="colorful-text">{stage.university}</h4>
              </a>
              <p>{stage.year}</p>
              <p>GPA: {stage.gpa}</p>
              {stage.bonus.length > 0 && 
              stage.bonus.map((bonus:any, index:number) => (
                <p className="colorful-text" key={index}>• {bonus}</p>
              ))
              }
            </div>
            <div className="circle" onClick={() => window.open(stage.universityLink, '_blank')}>
                <img src={stage.img} alt={stage.name}/>
            </div>
          </div>
        ))}
        </div>
  );
};

export default AcademicJourney;
