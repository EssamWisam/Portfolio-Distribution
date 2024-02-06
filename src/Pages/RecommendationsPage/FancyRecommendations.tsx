import React, { useState } from 'react';
import './FancyRecommendations.scss';
import "./BasicRecommendations.scss";   // because it borrows a subcomponent from there
import { TbExternalLink } from "react-icons/tb";

interface FeaturedCardsGroupProps {
  recommendationsData: any;
}

const TestimonialSlider: React.FC<FeaturedCardsGroupProps> = ({recommendationsData}) => {
  const [activeTestimonial, setActiveTestimonial] = useState(1); // Initially show the third testimonial

  const handleTestimonialChange = (index: number) => {
    setActiveTestimonial(index);
  };

  return (
    <div className="slider">
      {recommendationsData.map((testimonial:any, index:number) => (
        <input
          key={index}
          type="radio"
          name="testimonial"
          id={`t-${index + 1}`}
          checked={index === activeTestimonial}
          onChange={() => handleTestimonialChange(index)}
        />
      ))}
      <div className="testimonials">
        {recommendationsData.map((testimonial:any, index:number) => (
          //@ts-ignore
          <label key={index} className="item" htmlFor={`t-${index + 1}`}>
            {testimonial.img !== "" && <img src={testimonial.img} alt="" />}
            <p>{testimonial.quote}</p>
            <div className="testimonial-footer" style={{background: 'none !important', padding: '5px'}}>
              <div className="main-footer-wrapper">
                <div className="bottom-group">
                  <h3>{testimonial.name}</h3>
                  <h4>{testimonial.role}</h4>
                </div>
              </div>
              <a href={testimonial.link} target="_blank" rel="noopener noreferrer">
              <h5 className="bottom-group"> {testimonial.date} </h5>
              </a>
            </div>
          </label>
          
        ))}
      </div>
      <div className="dots">
        {recommendationsData.map((_:any, index:number) => (
          <label key={index} htmlFor={`t-${index + 1}`}></label>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
