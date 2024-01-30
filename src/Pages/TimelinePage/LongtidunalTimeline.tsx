import React, { useState } from 'react';
//@ts-ignore
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { IoMdArrowDropdownCircle } from "react-icons/io";
import './LongtidunalTimeline.scss'; 

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
  

const LongtidunalTimeline: React.FC<TimelineProps> = ({ timelineItems }) => {
    const [showMore, setShowMore] = useState(Array.from({ length: timelineItems.length }, () => false));
    const handleShowMoreClick = (index:number) => {
      const newShowMore = [...showMore]; // Create a copy of the existing array
      newShowMore[index] = !newShowMore[index]; // Toggle the value at the specified index
      setShowMore(newShowMore); // Update the state
    };
    return (
      <VerticalTimeline>
      {timelineItems.map((step, index) => (
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: getComputedStyle(document.documentElement).getPropertyValue('--secondary-color-affected'), color: getComputedStyle(document.documentElement).getPropertyValue('--inverse-theme') }}
          contentArrowStyle={{ borderRight: `7px solid  ${getComputedStyle(document.documentElement).getPropertyValue('--secondary-color-affected')}` }}
          date={step.date}
          iconStyle={{ background:  getComputedStyle(document.documentElement).getPropertyValue('--secondary-color-affected'), color: getComputedStyle(document.documentElement).getPropertyValue('--inverse-theme') }}
        >
          <div style={{display: 'flex', justifyContent: 'space-between'}}>
            <h3 className="vertical-timeline-element-title">{step.role}</h3>
            <IoMdArrowDropdownCircle size={25} style={{cursor: 'pointer' }}
             onClick={()=>handleShowMoreClick(index)}
            />
          </div>
          <h4 className="vertical-timeline-element-subtitle" style={{fontWeight: '400'}}>{step.company}</h4>
          {showMore[index] && 
          <div className="role-details-vertical">
          <div style={{display: 'flex', flexDirection: 'column'}}>
            {(timelineItems[index].description.length > 1) ? <ul>
            {
              timelineItems[index].description.map((text) => (
                <li >{text}</li>
              ))
            }
            </ul>:
            <p>{timelineItems[index].description[0]}</p>
            } 
            <div className='button-container' >
            {timelineItems[index].buttonText!=='' && <button 
            style ={{borderRadius:'3rem', fontSize:'1.05rem', backgroundColor:'transparent', marginTop: '1rem'}}
            onClick={()=> {window.open(timelineItems[index].buttonLink, '_blank')}}
            >{timelineItems[index].buttonText}</button>}
            </div>
            </div>
          </div>
          }
        </VerticalTimelineElement>))}
    </VerticalTimeline>
    )
  }
  
  export default LongtidunalTimeline;