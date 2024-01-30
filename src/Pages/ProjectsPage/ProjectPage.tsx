import React from "react";
import { formatText } from "../utils";
import TabComponent from "./TabComponent";
import ClassicGrid from "./ClassicGrid";

interface ProjectsPageProps {
    data: any;
}

const ProjectsPage:  React.FC<ProjectsPageProps> = ({data}) => {
    const projectsData = {
      sectionName: "Projects",
      description: "Behind these skills are [various project] where I had [central or sole contributions]:",
      projectsComment: ""
    }
  
    const projectStyles = {
      "center": false
    }
  
    const [activeTab, setActiveTab] = React.useState("Featured");
    const tabs = ["Featured", "Classical ML", "Datascience", "Computer Vision", "NLP", "Web", "Crossplatform", "Others"]
  
    return (
      <section className="skills" id={projectsData.sectionName}>
        <article className="c-article">
        <header className="c-article__header">
          <h1 style={{fontSize: '2.9rem', textAlign: (projectStyles.center) ? "center" : "left"}} className="c-article__title">
           {projectsData.sectionName}
          </h1>
        </header>
      </article>
        <p style={{textAlign: (projectStyles.center) ? "center" : "justify", marginBottom: '2rem'}} className="description" dangerouslySetInnerHTML={{__html: formatText(projectsData.description)}}/>
        <TabComponent activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs}/>
        <div style={{border: `1px ${getComputedStyle(document.documentElement).getPropertyValue('--tertiary-color-affected')} solid`, borderRadius:'2rem'}}>
          <ClassicGrid key={activeTab} data={data} category={activeTab}/>
        </div>
        <TabComponent activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} bottom={true}/>
        {projectsData.projectsComment !=="" && <p style={{textAlign: (projectStyles.center) ? "center" : "justify", marginBottom: '2rem', fontStyle:'normal'}} className="description" dangerouslySetInnerHTML={{__html: formatText(projectsData.projectsComment)}}/>}
      </section>
    )
  
  }
  
  export default ProjectsPage;