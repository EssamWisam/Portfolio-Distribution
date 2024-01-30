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
  }
  
  interface Props {
    data: DataItem[];
    category: string;
  }
  
  const ClassicGrid: React.FC<Props> = ({ data, category='Featured' }) => {
    const classicGridStyles = {
      icon: "FaGithub"
    }
    // keep only objects where cateogy=category
    const filteredData = data.filter(item => (item.categories).includes(category))
    return (
      <div className='grid'>
        {filteredData.map((item, index) => (
          <div className="grid-item" key={index}>
            <a href={item.github_link}>
            {/* @ts-ignore */}
            {React.createElement(FaIcons[classicGridStyles.icon], { size: 35, id: 'project-icon' , style: {paddingRight:'3px', paddingTop:'3px'}, color: 'white', background:'black' })}
            </a>
            <a href={item.link}>
              <img src={item.image} alt="" />
              <div className="item-title">
                <b>{item.title}</b>
                <p>{item.description}</p>
              </div>
            </a>
          </div>
        ))}
      </div>
    );
  };
  
  
  export default ClassicGrid;