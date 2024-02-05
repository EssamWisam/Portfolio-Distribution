import React, { useEffect } from "react";
import "./BasicRecommendations.scss";
import { FaQuoteRight } from "react-icons/fa";
import { TbExternalLink } from "react-icons/tb";


interface IntentCardProps {
    quote: string;
    name: string;
    role: string;
    date: string;
    link: string;
    img?: string;
  }
  
const BasicCard: React.FC<IntentCardProps> = ({ quote, name, role, date, link, img = "",}) => {  
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="testimonial">
          <div className="testimonial-body">
            <p dangerouslySetInnerHTML={{ __html: quote }} />
            <FaQuoteRight className="fas fa-quote-right" />
          </div>
          {<a href={link} target="_blank" rel="noopener noreferrer">
            <div className="testimonial-footer">
              <div className="main-footer-wrapper">
                {img !== "" && (
                  <img
                    src="https://randomuser.me/api/portraits/men/32.jpg"
                    alt="user"
                  />
                )}
                <div className="bottom-group">
                  <h3>{name}</h3>
                  <h4>{role}</h4>
                </div>
              </div>
              <h5 className="bottom-group"> {date} </h5>
              <TbExternalLink className="link" />
            </div>
          </a>}
        </div>
      </div>
    );
  };

interface FeaturedCardsGroupProps {
  recommendationsData: any;
}

const BasicRecommendations: React.FC<FeaturedCardsGroupProps> = ({ recommendationsData }) => {
  return (
    <div style={{display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
      {
        recommendationsData.map((card:any, index:number) => (
          <BasicCard key={index} {...card} />
        ))
      }
    </div>
  );
};

export default BasicRecommendations;
