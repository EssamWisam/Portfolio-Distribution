import React from 'react';
import SectionHeader from '../../Common/SectionHeader';
import HorizontalTimeline from './HorizontalTimeline';
import LongtidunalTimeline from './LongtidunalTimeline';

interface TimelinePageProps {
    timelineData: any;
    timelineHeader: any;
    timelineStyles: any;
}

const TimelinePage:  React.FC<TimelinePageProps> = ({timelineData, timelineHeader, timelineStyles}) => {
    return (
      <section className="roles" id={timelineHeader.sectionName}>
        <SectionHeader description={timelineHeader.description} isCentered={timelineStyles.center} sectionName={timelineHeader.sectionName} />
        <HorizontalTimeline timelineItems={timelineData} />
        {/* <LongtidunalTimeline timelineItems={timelineItems}/> */}
      </section>
    )
  
  }

export default TimelinePage;
  