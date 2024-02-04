import React from "react";
import { formatText } from "../utils";
import FeaturedCarousel from "./FeaturedCarousel";
import FeaturedCardsGroup from "./FeaturedCards";
import  SectionHeader  from "../../Common/SectionHeader";

interface ProjectsPageProps {
    featuredData: any;
    featuredHeader: any;
    featuredStyles: any;
}

const FeaturedPage:  React.FC<ProjectsPageProps> = ({featuredData, featuredHeader, featuredStyles}) => {

    return (
      <section className="skills" id={featuredHeader.sectionName}>
        <SectionHeader sectionName={featuredHeader.sectionName}  description={featuredHeader.description} isCentered={featuredStyles.center}/>
        <div >
          {/* <FeaturedCarousel featuredData={featuredData} featuredHeader={featuredHeader} featuredStyles={featuredStyles}/> */}
          <FeaturedCardsGroup featuredCards={featuredData} buttonText={featuredHeader.buttonText}/>
        </div>
        {featuredHeader.featuredComment !=="" && <p style={{textAlign: (featuredStyles.center) ? "center" : "justify", marginBottom: '2rem', fontStyle:'normal'}} className="description" dangerouslySetInnerHTML={{__html: formatText(featuredHeader.featuredComment)}}/>}
      </section>
    )
  
  }
  
  export default FeaturedPage;