import React, { useState } from 'react';
import './HorizontalTimeline.scss'; 

interface TimelineItem {
    id: number;
    role: string;
    company: string;
    date: string;
    description: string[];
    buttonText: string;
    buttonLink: string;
  }
  
  interface TimelineProps {
    timelineItems: TimelineItem[];
  }
  

const HorizontalTimeline: React.FC<TimelineProps> = ({ timelineItems }) => {
    const numRoles = timelineItems.length-1
    const [currentStep, setCurrentStep] = useState<number>(numRoles);
    const [lineWidth, setLineWidth] = useState<string>('100%');
  
    const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  
    React.useEffect(() => {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };
  
      // Add event listener for window resize
      window.addEventListener('resize', handleResize);
  
      // Remove event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    const handleStepClick = (stepId: number) => {
      setCurrentStep(stepId);
      let newLineWidth;
      if(screenWidth > 760) {
        newLineWidth = `${(stepId / numRoles) * 100}%`;
      }
      else {
        newLineWidth = `${((stepId - (numRoles-2)) / 2) * 100}%`;
      }
      setLineWidth(newLineWidth);
    };
  
  
    return (
      <section id="timeline">
      <div className="horizontal timeline">
        <div className="steps">
        {timelineItems.slice((screenWidth > 700) ? 0 : Math.max(numRoles-2, 0)).map((step:any) => (
        <div
          key={step.id}
          className={`step ${currentStep === step.id ? 'current' : ''}`}
          onClick={() => handleStepClick(step.id)}
        >
          <span className="date">{step.date}</span>
          <div className="role-company">
            <span className="role">{step.role}</span><br/>
            <span className="company colorful-text">{step.company}</span>
          </div>
        </div>
      ))}
        </div>
        <div className="line" style={{ width: lineWidth }}></div>
      </div>
      <div className="role-details">
        <h2 className="colorful-text">Experience Details</h2>
        <div style={{display: 'flex', flexDirection: 'column'}}>
          {(timelineItems[currentStep].description.length > 1) ? <ul>
          {
            timelineItems[currentStep].description.map((text:string) => (
              <li >{text}</li>
            ))
          }
          </ul>:
          <p>{timelineItems[currentStep].description[0]}</p>
          } 
          <div className='button-container' >
          {timelineItems[currentStep].buttonText!=='' && <button 
          style ={{borderRadius:'3rem', fontSize:'1.05rem'}}
          onClick={()=> {window.open(timelineItems[currentStep].buttonLink, '_blank')}}
          >{timelineItems[currentStep].buttonText}</button>}
          </div>
          </div>
        </div>
      </section>
    );
  };

  export default HorizontalTimeline;