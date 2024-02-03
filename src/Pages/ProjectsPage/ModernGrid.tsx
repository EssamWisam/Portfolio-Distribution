import React from 'react';
import './ModernGrid.scss';

//@ts-ignore
import * as FaIcons from "react-icons/fa";

interface DataItem {
    image: string;
    title: string;
    description: string;
    link: string;
    github_link: string;
    categories: string;
    skills: string[];
    special: string;
  }
  
  interface Props {
    data: DataItem[];
    category: string;
    icon: string;
    buttonText?: string;
  }

  const ModernGrid: React.FC<Props> = ({ data, category='Featured', icon="FaGithub", buttonText="" }) => {
    // keep only objects where cateogy=category
      const filteredData = (category !== '') ? data.filter(item => (item.categories).includes(category)) : data;
    return (
      <div className='modern-grid'>
        {filteredData.map((item, index) => (
          <div className="grid-item" key={index}>     
            {item.special && <div className="special">{item.special}</div>}       
            <a href={item.github_link}>
            {/* @ts-ignore */}
            {React.createElement(FaIcons[icon], { size: 35, id: 'project-icon' , style: {paddingRight:'3px', paddingTop:'3px'}, color: 'white', background:'black' })}
            </a>
            <a href={item.link}>
              <img src={item.image} alt="" />
              <div className="item-title">
                <b>{item.title}</b>
                <p>{item.description}
                </p>
                {item.skills?.length > 0 && <span><b>Top Skills: </b>{item.skills?.join(', ')}</span>}
              </div>
            </a>
          </div>
        ))}
      </div>
    );
  };
  
  
  export default ModernGrid;