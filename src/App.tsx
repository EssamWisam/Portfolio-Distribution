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
import { generalSetup } from './PagesData/General';
import { navbarData, navbarStyles } from './PagesData/NavigationBar';
import { heroData, heroStyles } from './PagesData/HeroPage';
import { timelineHeader, timelineStyles, timelineData } from './PagesData/TimelinePage';
import { softSkillsData, techSkillsData, skillsHeader, skillsStyles } from './PagesData/SkillsPage';
import { projectData, projectHeader, projectStyles } from './PagesData/ProjectsPage';
import { blogData, blogHeader, blogStyles } from './PagesData/BlogsPage';
import { featuredData, featuredHeader, featuredStyles } from './PagesData/FeaturedPage';
import { educationData, educationHeader, educationStyles } from './PagesData/EducationPage';
import { recommendationsData, recommendationsHeader, recommendationsStyles } from './PagesData/RecommendationsPage';

const App: React.FC = () => {
  // set theme
  React.useEffect(() => {
    document.documentElement.style.setProperty('--background-color', generalSetup.backgroundColor);
    document.documentElement.style.setProperty('--secondary-color', generalSetup.secondaryColor);
    document.documentElement.style.setProperty('--tertiary-color', generalSetup.tertiaryColor);
    document.documentElement.style.setProperty('--theme', generalSetup.theme);
    document.documentElement.style.setProperty('--inverse-theme', generalSetup.inverseTheme);

      // Set page title
      document.title = generalSetup.title;

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
      <ProjectsPage projectHeader={blogHeader} projectStyles={blogStyles} projectData={blogData}  />
      <FeaturedPage featuredData={featuredData} featuredHeader={featuredHeader} featuredStyles={featuredStyles} />
      <RecommendationsPage recommendationsData={recommendationsData} recommendationsHeader={recommendationsHeader} recommendationsStyles={recommendationsStyles} />
      <Footer heroData={heroData}/>
    </div>
  );
};



export default App;