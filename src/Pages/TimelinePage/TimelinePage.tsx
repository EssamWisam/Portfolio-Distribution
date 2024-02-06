import React from 'react';
import SectionHeader from '../../Common/SectionHeader/SectionHeader';
import HorizontalTimeline from './HorizontalTimeline';
import LongtidunalTimeline from './LongtidunalTimeline';

interface TimelinePageProps {
    timelineData: any;
    timelineHeader: any;
    timelineStyles: any;
}

const TimelinePage:  React.FC<TimelinePageProps> = ({timelineData, timelineHeader, timelineStyles}) => {
    return (
      <section className="roles" id={timelineHeader.id}>
        <SectionHeader description={timelineHeader.description} isCentered={timelineStyles.center} sectionName={timelineHeader.sectionName} />
        {timelineStyles.theme === "HorizontalTimeline" && <HorizontalTimeline timelineItems={timelineData} />}
        {timelineStyles.theme === "LongtidunalTimeline" && <LongtidunalTimeline timelineItems={timelineData}/>}
      </section>
    )
  
  }

export default TimelinePage;
  