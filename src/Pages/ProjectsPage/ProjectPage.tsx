import React from "react";
import { formatText } from "../utils";
import TabComponent from "./TabComponent";
import ModernGrid from "./ModernGrid";
import ClassicGrid from "./ClassicGrid";
import  SectionHeader  from "../../Common/SectionHeader/SectionHeader";

interface ProjectsPageProps {
    projectData: any;
    projectHeader: any;
    projectStyles: any;
}

const ProjectsPage:  React.FC<ProjectsPageProps> = ({projectData, projectHeader, projectStyles}) => {
    const [activeTab, setActiveTab] = React.useState(projectHeader.activeTab);
    const tabs = projectHeader.tabs;

    return (
      <section className="skills" id={projectHeader.id}>
        <SectionHeader sectionName={projectHeader.sectionName}  description={projectHeader.description} isCentered={projectStyles.center}/>
        {!projectStyles.showBottom && <TabComponent activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} tabUI={projectStyles.tabUI}/>}
        <div style={{border: `1px ${getComputedStyle(document.documentElement).getPropertyValue('--tertiary-color-affected')} solid`, borderRadius:'2rem', margin: '0rem 0.5rem 0rem 0.5rem',}}>
          {projectStyles.theme === "ClassicGrid" && <ClassicGrid buttonText={projectHeader.buttonText} key={activeTab} data={projectData} category={activeTab} icon={projectHeader.projectExtraLinkIcon}/>}
          {projectStyles.theme === "ModernGrid" && <ModernGrid buttonText={projectHeader.buttonText} key={activeTab} data={projectData} category={activeTab} icon={projectHeader.projectExtraLinkIcon}/>}
        </div>
        {projectStyles.showBottom && <TabComponent activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} bottom={true} tabUI={projectStyles.tabUI}/>}
        {projectHeader.projectsComment !=="" && <p id="comment" style={{textAlign: (projectStyles.center) ? "center" : "justify", marginBottom: '2rem', fontStyle:'normal'}} className="description" dangerouslySetInnerHTML={{__html: formatText(projectHeader.projectsComment)}}/>}
      </section>
    )
  
  }
  
  export default ProjectsPage;