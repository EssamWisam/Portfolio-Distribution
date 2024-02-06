import React from "react";
import { formatText } from "../utils";
import CardSlider from "./CardSlider";
import AcademicJourney from "./AcademicJourney";
import  SectionHeader  from "../../Common/SectionHeader/SectionHeader";

interface EducationPageProps {
    educationData: any;
    educationHeader: any;
    educationStyles: any;
}

const EducationPage:  React.FC<EducationPageProps> = ({educationData, educationHeader, educationStyles}) => {

    return (
      <section className="education" id={educationHeader.id}>
        <SectionHeader sectionName={educationHeader.sectionName}  description={educationHeader.description} isCentered={educationStyles.center}/>
        <div >
          <AcademicJourney educationData={educationData}/>
          <CardSlider educationData={educationData} educationStyles={educationStyles}/>
        </div>
        {educationHeader.educationComment !=="" && <p id="comment" style={{textAlign: (educationStyles.center) ? "center" : "justify", marginBottom: '2rem', fontStyle:'normal'}} className="description" dangerouslySetInnerHTML={{__html: formatText(educationHeader.educationComment)}}/>}
      </section>
    )
  
  }
  
  export default EducationPage;