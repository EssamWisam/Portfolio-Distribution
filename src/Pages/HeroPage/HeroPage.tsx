import React from 'react';
import * as FaIcons from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import { formatText } from '../utils';
import { GoMail } from "react-icons/go";
import { RiDownloadLine } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import './HeroPage.scss'; 

interface HeroPageProps {
  heroData: any;
  heroStyles: any;
}

const HeroPage: React.FC<HeroPageProps> = ({heroData, heroStyles}) => {

    const [screenWidth, setScreenWidth] = React.useState(window.innerWidth);
  
    React.useEffect(() => {
      const handleResize = () => {
        setScreenWidth(window.innerWidth);
      };
  
      // Add event listener for window resize
      window.addEventListener('resize', handleResize);
  
      // Remove event listener on component unmount
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  

  
    const smallScreen = React.useMemo(() => screenWidth <= 900, [screenWidth]);
  
    return (
      <section id="hero">
        <div className="hero-container" style={{
          display: (heroStyles.hideImage) ? 'block' : 'flex',
          flexDirection: (!smallScreen) ? (heroStyles.imageOnLeft) ? 'row-reverse' : 'row' : 'column-reverse',
          }}>
          <div className="text-container">
            <h1 style={{fontSize: heroStyles.fontSizes[0], textAlign: (heroStyles.center || smallScreen) ? 'center' : 'left'}}>{heroData.title}</h1>
            <h2 style={{fontSize: heroStyles.fontSizes[1], textAlign: (heroStyles.center || smallScreen) ? 'center' : 'left'}}>
              <TypeAnimation
              sequence={heroData.roles.flatMap((item:string) => [item, heroData.roleDuration])}
              wrapper="span"
              speed={50}
              //style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={(heroData.roles.length > 1) ? Infinity : 1}
             />
              </h2>
            <p style={{
              fontSize: heroStyles.fontSizes[2],
              textAlign: (heroStyles.center || smallScreen) ? 'center' : 'justify'
            }}
            dangerouslySetInnerHTML={{ __html: formatText(heroData.about)}}/>
            <div className="button-container" style={{justifyContent: (heroStyles.center || smallScreen) ? 'center' : 'flex-start'}}>
              <button style={{borderRadius: heroStyles.buttonRoundness}} 
              className="reach-out-button"
              onClick={()=> {window.location.href = `mailto:${heroData.email}`}}
              >
                {heroData.reachOutBText}
                <GoMail style={{marginLeft:'9px', transform: 'translateY(4px)'}} size={25}/>
                </button>
              <button style={{borderRadius: heroData.buttonBorderRadius}} className="download-cv-button">
                {heroData.downloadBText}
                <RiDownloadLine style={{marginLeft:'9px', transform: 'translateY(4px)'}} size={25} />
                </button>
              {heroData.extraBText && <button 
              onClick={()=> {window.open(heroData.extraLink, '_blank')}}
              style={{borderRadius: heroData.buttonBorderRadius}} className="extra-button">
                {heroData.extraBText}
                <FiExternalLink style={{marginLeft:'9px', transform: 'translateY(4px)'}} size={25} />
                </button>}
            </div>
            <div className="icons-container"  style={{justifyContent: (heroStyles.center || smallScreen) ? 'center' : 'flex-start'}}>
                <p style={{fontWeight: '600'}}>{heroData.socialText}</p>
                {heroData.social.map((icon:string, index:number) => {
                //@ts-ignore
                const IconComponent = FaIcons[icon];
                const link = heroData.socialLinks[index];
                return (
                  <a key={index} href={link} target="_blank" rel="noopener noreferrer" style={{display: 'inline-block'}}>
                    <IconComponent style={{ marginLeft: '9px', transform: 'translateY(-1px)',}} color={getComputedStyle(document.documentElement).getPropertyValue('--text-color')}  size={25} />
                  </a>
                );
              })}
              </div>
          </div>
          {!heroStyles.hideImage && <div className="circle-container">
            {/* You can place your picture or any other content inside the circle */}
            <div className="profile-picture" 
            style={{backgroundImage: `url(${heroData.images[Math.floor(Math.random() * heroData.images.length)] })`, 
                    borderRadius:heroStyles.roundness,
                    width: (screenWidth > 768) ? heroStyles.imgDim : '300px',
                    height: (screenWidth > 768) ? heroStyles.imgDim : '300px',
                    }}></div>
          </div>}
        </div>
        <p className='quote'>{heroData.quotes[Math.floor(Math.random() * heroData.quotes.length)]}</p>
      </section>
    );
  };
  
  export default HeroPage;
  