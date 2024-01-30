import React from 'react';
import { formatText } from '../utils';
import HorizontalTimeline from './HorizontalTimeline';
import LongtidunalTimeline from './LongtidunalTimeline';
import './roles.scss'; 

interface TimelinePageProps {
    timelineData: any;
}

const TimelinePage:  React.FC<TimelinePageProps> = ({timelineData}) => {
    const rolesData = {
      sectionName: "Roles",
      description: "Throughout my career, I've immersed myself in [diverse roles] that have shaped my [professional journey]."
    }
  
    const roleStyles = {
      "center": false
    }
    return (
      <section className="roles" id={rolesData.sectionName}>
        <article className="c-article">
        <header className="c-article__header">
          <h1 style={{fontSize: '2.9rem', textAlign: (roleStyles.center) ? "center" : "left"}} className="c-article__title">
           {rolesData.sectionName}
          </h1>
        </header>
      </article>
        <p style={{textAlign: (roleStyles.center) ? "center" : "justify", marginBottom: '2rem'}} className="description" dangerouslySetInnerHTML={{__html: formatText(rolesData.description)}}/>
        <HorizontalTimeline timelineItems={timelineData} />
        {/* <LongtidunalTimeline timelineItems={timelineItems}/> */}
      </section>
    )
  
  }

export default TimelinePage;
  