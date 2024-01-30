import React from "react";
import { formatText } from "../utils";
import TabComponent from "./TabComponent";
import ClassicGrid from "./ClassicGrid";

interface ProjectsPageProps {
    projectData: any;
    projectHeader: any;
    projectStyles: any;
}

const ProjectsPage:  React.FC<ProjectsPageProps> = ({projectData, projectHeader, projectStyles}) => {

  
    const [activeTab, setActiveTab] = React.useState(projectHeader.activeTab);
    const tabs = projectHeader.tabs;
  
    return (
      <section className="skills" id={projectHeader.sectionName}>
        <article className="c-article">
        <header className="c-article__header">
          <h1 style={{fontSize: '2.9rem', textAlign: (projectStyles.center) ? "center" : "left"}} className="c-article__title">
           {projectHeader.sectionName}
          </h1>
        </header>
      </article>
        <p style={{textAlign: (projectStyles.center) ? "center" : "justify", marginBottom: '2rem'}} className="description" dangerouslySetInnerHTML={{__html: formatText(projectHeader.description)}}/>
        {!projectStyles.showBottom && <TabComponent activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} tabUI={projectStyles.tabUI}/>}
        <div style={{border: `1px ${getComputedStyle(document.documentElement).getPropertyValue('--tertiary-color-affected')} solid`, borderRadius:'2rem'}}>
          <ClassicGrid key={activeTab} data={projectData} category={activeTab} icon={projectData.projectExtraLinkIcon}/>
        </div>
        {projectStyles.showBottom && <TabComponent activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} bottom={true} tabUI={projectStyles.tabUI}/>}
        {projectHeader.projectsComment !=="" && <p style={{textAlign: (projectStyles.center) ? "center" : "justify", marginBottom: '2rem', fontStyle:'normal'}} className="description" dangerouslySetInnerHTML={{__html: formatText(projectHeader.projectsComment)}}/>}
      </section>
    )
  
  }
  
  export default ProjectsPage;