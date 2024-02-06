import React from 'react';
import './App.scss'; 
// import components
import NavigationBar from './Common/NavigationBar/NavigationBar';
import HeroPage from './Pages/HeroPage/HeroPage';
import TimelinePage from './Pages/TimelinePage/TimelinePage';
import SkillsPage from './Pages/SkillsPage/SkillsPage';
import ProjectsPage from './Pages/ProjectsPage/ProjectPage';
import FeaturedPage from './Pages/FeaturedPage/FeaturedPage';
import EducationPage from './Pages/EducationPage/EducationPage';
import RecommendationsPage from './Pages/RecommendationsPage/RecommendationsPage';
import Footer from './Common/Footer/Footer';
//import data
import { generalSetup } from './PagesData/GeneralData';
import { navbarData, navbarStyles } from './PagesData/NavigationBarData';
import { heroData, heroStyles } from './PagesData/HeroPageData';
import { timelineHeader, timelineStyles, timelineData } from './PagesData/TimelinePageData';
import { softSkillsData, techSkillsData, skillsHeader, skillsStyles } from './PagesData/SkillsPageData';
import { projectData, projectHeader, projectStyles } from './PagesData/ProjectsPageData';
import { taskData, taskHeader, taskStyles } from './PagesData/TasksPageData';
import { featuredData, featuredHeader, featuredStyles } from './PagesData/FeaturedPageData';
import { educationData, educationHeader, educationStyles } from './PagesData/EducationPageData';
import { recommendationsData, recommendationsHeader, recommendationsStyles } from './PagesData/RecommendationsPageData';

const App: React.FC = () => {
  // set theme
  React.useEffect(() => {
    document.documentElement.style.setProperty('--background-color', generalSetup.backgroundColor);
    document.documentElement.style.setProperty('--secondary-color', generalSetup.secondaryColor);
    document.documentElement.style.setProperty('--tertiary-color', generalSetup.tertiaryColor);
    document.documentElement.style.setProperty('--theme', generalSetup.theme);
    document.documentElement.style.setProperty('--inverse-theme', generalSetup.inverseTheme);

      // Set page title
      document.title = generalSetup.title.toString();

      // Set favicon
      const faviconLink = document.querySelector("link[rel~='icon']");
      if (faviconLink) {
        //@ts-ignore
        faviconLink.href = generalSetup.favicon;
        }

  }, []);
  return (
    <div>
      <NavigationBar navbarData={navbarData} navbarStyles={navbarStyles} />
      <HeroPage heroData={heroData} heroStyles={heroStyles}/>
      <TimelinePage timelineData={timelineData} timelineHeader={timelineHeader} timelineStyles={timelineStyles} />
      <SkillsPage skillsStyles={skillsStyles} skillsHeader={skillsHeader} softSkillsData={softSkillsData} techSkillsData={techSkillsData}/>
      <ProjectsPage projectHeader={projectHeader} projectStyles={projectStyles} projectData={projectData}  />
      <EducationPage educationData={educationData} educationHeader={educationHeader} educationStyles={educationStyles} />
      <ProjectsPage projectHeader={taskHeader} projectStyles={taskStyles} projectData={taskData}  />
      <FeaturedPage featuredData={featuredData} featuredHeader={featuredHeader} featuredStyles={featuredStyles} />
      <RecommendationsPage recommendationsData={recommendationsData} recommendationsHeader={recommendationsHeader} recommendationsStyles={recommendationsStyles} />
      <Footer heroData={heroData}/>
    </div>
  );
};



export default App;