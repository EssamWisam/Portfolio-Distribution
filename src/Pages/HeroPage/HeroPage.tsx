import React from 'react';
import * as FaIcons from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import { formatText } from '../utils';
import { GoMail } from "react-icons/go";
import { RiDownloadLine } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";
import './HeroPage.scss'; 


const HeroPage: React.FC = () => {

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
  
    const heroData = {
      "images": ["https://i.imgur.com/QNxLMh4.jpg", "https://i.imgur.com/epiM9fg.png"],
      "title": "Hey, I am Essam Wisam",
      "roles": ["Machine Learning Engineer", "Machine Learning Researcher", "Front-end Developer", "Cross-platform Developer", "Teaching Assistant"],
      "roleDuration": 1600,
      "about": "I'm a [computer engineer graduate from Cairo University] with a strong academic background and hands-on experience in machine learning, deep learning and data science. I have a deep aspiration to make things as flawless, useful and beautiful as possible and I greatly value [spreading knowledge, collaborating and communicating with others].",
      "reachOutBText": "Reach Out",
      "email": "essamwisam@outlook.com",
      "downloadBText": "Download CV",
      "CV": "https://drive.google.com/file/d/1CunAxxlbhY-L42WL0Nq1Q8Eb_DYRNQie/view?usp=sharing",
      "extraBText": "",
      "extraLink": "",
      "buttonBorderRadius": '3rem',
      "social" : ["FaGithub", "FaLinkedin", "FaTwitter", "FaDiscord",],
      "socialLinks": ["https://github.com/EssamWisam", "https://www.linkedin.com/in/essamwisam/", "https://twitter.com/essam_wisam",  "https://discordapp.com/users/831916875453300847"],
      "socialText": "Connect with me ",
      "quotes": ["\"We have some catching up to do in the area of machine learning and artificial intelligence.\" -Klaus Froehlich",
                 "\"A ship in harbor is safe, but that is not what ships are built for.\" - John A. Shedd",
                 "\"Good things take time\" — John Wooden"
  
    ],
  
    }
  
    const heroStyles = {
      fontSizes: ["2.9rem", "2.0rem", "1.0rem"],
      imageOnLeft: false,
      imgDim: '400px',
      roundness: "50%",
      hideImage: false,
      center: false,
      buttonRoundness: "3rem"
    }
  
  
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
                {heroData.social.map((icon:string, index) => {
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
  