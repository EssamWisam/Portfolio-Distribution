import React from 'react';
import './CardSlider.scss';
//@ts-ignore
import { Swipe } from 'auto-swipe';



const CardSlider: React.FC<{ educationData: any }> = ({ educationData }) => {
  return (
      <div>
        <h3 className="certificates-title">Certificates</h3>
        <Swipe duration={30000}>
        {educationData.certificates.map((certificate:any, index:number) => (
          <a href={certificate.link} target="_blank" key={index}>
          <div className="certificate-container" key={index}>
             <img src={certificate.img} alt={certificate.name} />
             <h3 >{certificate.name}</h3>
             <h4 >{certificate.provider}</h4>
             <p >{certificate.date}</p>
          </div>
          </a>
        ))}
      </Swipe>
    </div>
  );
};

export default CardSlider;
