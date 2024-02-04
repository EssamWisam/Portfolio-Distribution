import React from 'react';
import './App.scss'; 
// import components
import NavigationBar from './Pages/NavigationBar/NavigationBar';
import HeroPage from './Pages/HeroPage/HeroPage';
import TimelinePage from './Pages/TimelinePage/TimelinePage';
import SkillsPage from './Pages/SkillsPage/SkillsPage';
import ProjectsPage from './Pages/ProjectsPage/ProjectPage';
import FeaturedPage from './Pages/FeaturedPage/FeaturedPage';

//import data
import { navbarData, navbarStyles } from './PagesData/NavigationBar';
import { heroData, heroStyles } from './PagesData/HeroPage';
import { timelineHeader, timelineStyles, timelineData } from './PagesData/TimelinePage';
import { softSkillsData, techSkillsData } from './PagesData/SkillsPage';
import { projectData, projectHeader, projectStyles } from './PagesData/ProjectsPage';
import { blogData, blogHeader, blogStyles } from './PagesData/BlogsPage';
import { featuredData, featuredHeader, featuredStyles } from './PagesData/FeaturedPage';

const App: React.FC = () => {
  return (
    <div>
      <NavigationBar navbarData={navbarData} navbarStyles={navbarStyles} />
      <HeroPage heroData={heroData} heroStyles={heroStyles}/>
      <TimelinePage timelineData={timelineData} timelineHeader={timelineHeader} timelineStyles={timelineStyles} />
      <SkillsPage softSkillsData={softSkillsData} techSkillsData={techSkillsData}/>
      <ProjectsPage projectHeader={projectHeader} projectStyles={projectStyles} projectData={projectData}  />
      <ProjectsPage projectHeader={blogHeader} projectStyles={blogStyles} projectData={blogData}  />
      <FeaturedPage featuredData={featuredData} featuredHeader={featuredHeader} featuredStyles={featuredStyles} />
    </div>
  );
};



export default App;