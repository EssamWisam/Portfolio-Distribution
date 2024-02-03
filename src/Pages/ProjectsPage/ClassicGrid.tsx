import React from 'react';
import './ClassicGrid.scss';

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
  
  const ClassicGrid: React.FC<Props> = ({ data, category='Featured', icon="FaGithub", buttonText="View Project" }) => {
    // keep only objects where cateogy=category
      const filteredData = (category !== '') ? data.filter(item => (item.categories).includes(category)) : data;
    return (
      <div className='grid'>
        {filteredData.map((item, index) => (
          <div className="grid-item" key={index}>     
            {item.special && <div className="special">{item.special}</div>}       
            <a href={item.github_link}>
            {/* @ts-ignore */}
            {React.createElement(FaIcons[icon], { size: 35, id: 'project-icon' , style: {paddingRight:'3px', paddingTop:'3px'}, color: 'white', background:'black' })}
            </a>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <div ><img src={item.image} alt="" /></div>
              <div className="item-title">
                <h4>{item.title}</h4>
                <p>
                {(item.description.length > 110) ? item.description.substring(0, 75) + '...' : item.description}
                </p>
                <div className="item-skills">
                  {item.skills?.map((skill, index) => (
                    <div key={index}>{skill}</div>
                  ))}
                </div>
                <button onClick={
                  () => window.open(item.link, '_blank')
                }>{buttonText}</button>
              </div>
              </div>
          </div>
        ))}
      </div>
    );
  };

  export default ClassicGrid;