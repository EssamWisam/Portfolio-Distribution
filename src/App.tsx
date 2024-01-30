import React from 'react';
import './App.scss'; 
// import components
import NavigationBar from './Pages/NavigationBar/NavigationBar';
import HeroPage from './Pages/HeroPage/HeroPage';
import TimelinePage from './Pages/TimelinePage/TimelinePage';
import SkillsPage from './Pages/SkillsPage/SkillsPage';
import ProjectsPage from './Pages/ProjectsPage/ProjectPage';

//import data
import { timelineData } from './PagesData/TimelinePage';
import { softSkillsData, techSkillsData } from './PagesData/SkillsPage';
import { projectData } from './PagesData/ProjectsPage';

const App: React.FC = () => {
  return (
    <div>
      <NavigationBar />
      <HeroPage />
      <TimelinePage timelineData={timelineData} />
      <SkillsPage softSkillsData={softSkillsData} techSkillsData={techSkillsData}/>
      <ProjectsPage data={projectData}  />
    </div>
  );
};



export default App;