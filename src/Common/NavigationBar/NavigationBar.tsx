import * as MaterialIcons from "react-icons/md";
import React, { useState } from 'react';
import './NavigationBar.scss'; 

interface NavigationBarProps {
  navbarData:any;
  navbarStyles:any;
}

const NavigationBar: React.FC<NavigationBarProps> = ({navbarData, navbarStyles}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeDot, setActiveDot] = useState(0);

    const toggleMenu = () => {
      setMenuOpen((prevMenuOpen) => !prevMenuOpen);
    };
  
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
  
    const closeMenu = () => {
      if (screenWidth < 768) {
        setMenuOpen(false);
      }
    };



    return (
      <nav className="navigation" 
            style={{
              justifyContent: 'space-between', flexDirection: (navbarStyles.showIcons && screenWidth > 768) ? 'column': 'row',
              borderBottomLeftRadius: (navbarStyles.rounded) ? (navbarStyles.showIcons) ? '3rem' : '2rem' : '0rem', borderBottomRightRadius: (navbarStyles.rounded) ? (navbarStyles.showIcons) ? '3rem' : '2rem' : '0rem', 
            }}>
        <div className="logo">
          { <h1>{navbarData.logo}</h1>}
        </div>
        <ul className={`menu-list ${menuOpen ? 'open' : ''}`}>
          {navbarData.pages.map((page:any, index:number) => (
            <li key={index}>
                <a href={`#${page}`} onClick={closeMenu}>
                {/* @ts-ignore */}
                {navbarStyles.showIcons && screenWidth > 768 && React.createElement(MaterialIcons[navbarData.icons[index]], { size: 18, style: {paddingRight:'3px', paddingTop:'3px'}, color: getComputedStyle(document.documentElement).getPropertyValue('--text-color') })}
                  {page}
                </a>
            </li>
          ))}
        </ul>
  
        <div className="humbarger" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar2 bar"></div>
          <div className="bar"></div>
        </div>
        <div className="scrolling-dots">
        {navbarData.pages.map((page:number, index:any) => (
          <div>
          <a 
          onClick={() => setActiveDot(index)}
          href={`#${page}`} key={index} 
          className={`dot ${index === activeDot ? 'active' : ''}`}
          >
            •
          </a>
          </div>
        ))}
      </div>

      </nav>
    );
  };
  

  export default NavigationBar;