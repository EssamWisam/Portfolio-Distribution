import * as MaterialIcons from "react-icons/md";
import React, { useState } from 'react';
import './NavigationBar.scss'; 

const NavigationBar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
  
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
  
    const navbarData = {
      "logo": "ESSAM WISAM",
      "pages": ["Home", "Roles", "Skills", "Projects", "Blogs", "YouTube", "Education", "Certificates"],
      "icons": ["MdHome", "MdWork", "MdBuild", "MdExtension", "MdAssignment", "MdPlayCircle", "MdSchool", "MdReceipt"],
    };
    const navbarStyles = {
      "showIcons": false,
      "rounded": false
    }
  
    return (
      <nav className="navigation" 
            style={{
              justifyContent: 'space-between', flexDirection: (navbarStyles.showIcons && screenWidth > 768) ? 'column': 'row',
              borderBottomLeftRadius: (navbarStyles.rounded) ? (navbarStyles.showIcons) ? '3rem' : '2rem' : '0rem', borderBottomRightRadius: (navbarStyles.rounded) ? (navbarStyles.showIcons) ? '3rem' : '2rem' : '0rem', 
            }}>
        <div className="logo">
          <h1>{navbarData.logo}</h1>
        </div>
        <ul className={`menu-list ${menuOpen ? 'open' : ''}`}>
          {navbarData.pages.map((page, index) => (
            <li key={index}>
                <a href="./" onClick={closeMenu}>
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
      </nav>
    );
  };
  

  export default NavigationBar;