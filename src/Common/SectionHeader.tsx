import React from 'react';
import { formatText } from '../Pages/utils';

import './SectionHeader.scss'; 

interface TimelinePageProps {
    sectionName: string;
    description: string;
    isCentered: boolean;
}

const SectionHeader:  React.FC<TimelinePageProps> = ({sectionName, description, isCentered}) => {
    return (
      <div>
        <article className="c-article">
        <header className="c-article__header">
          <h1 style={{fontSize: '2.9rem', textAlign: (isCentered) ? "center" : "left"}} className="c-article__title">
           {sectionName}
          </h1>
        </header>
      </article>
        <p style={{textAlign: (isCentered) ? "center" : "justify", marginBottom: '2rem'}} className="description" dangerouslySetInnerHTML={{__html: formatText(description)}}/>
      </div>
    )
  
  }

export default SectionHeader;
  