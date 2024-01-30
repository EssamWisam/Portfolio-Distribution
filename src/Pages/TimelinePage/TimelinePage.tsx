import React from 'react';
import { formatText } from '../utils';
import HorizontalTimeline from './HorizontalTimeline';
import LongtidunalTimeline from './LongtidunalTimeline';
import './roles.scss'; 

interface TimelinePageProps {
    timelineData: any;
    timelineHeader: any;
    timelineStyles: any;
}

const TimelinePage:  React.FC<TimelinePageProps> = ({timelineData, timelineHeader, timelineStyles}) => {
    return (
      <section className="roles" id={timelineHeader.sectionName}>
        <article className="c-article">
        <header className="c-article__header">
          <h1 style={{fontSize: '2.9rem', textAlign: (timelineStyles.center) ? "center" : "left"}} className="c-article__title">
           {timelineHeader.sectionName}
          </h1>
        </header>
      </article>
        <p style={{textAlign: (timelineStyles.center) ? "center" : "justify", marginBottom: '2rem'}} className="description" dangerouslySetInnerHTML={{__html: formatText(timelineHeader.description)}}/>
        <HorizontalTimeline timelineItems={timelineData} />
        {/* <LongtidunalTimeline timelineItems={timelineItems}/> */}
      </section>
    )
  
  }

export default TimelinePage;
  