import React, { useEffect } from "react";
import "./FeaturedCarousel.scss";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

interface BlogSliderItemProps {
  image: string;
  extraFact: string;
  title: string;
  description: string;
  link: string;
  buttonText: string;
  direction: string;
}

const FeaturedCarouselItem: React.FC<BlogSliderItemProps> = ({
  image,
  extraFact,
  title,
  description,
  link,
  buttonText,
  direction
}) => (
  <div className="blog-slider__item" style={{flexDirection: (direction==='right') ? 'row-reverse':'row'}}>
    <div className="blog-slider__img" style={{transform: (direction==='right') ? 'translate(80px)':'translate(-80px)'}}>
      <img src={image} alt="" />
    </div>
    <div className="blog-slider__content">
      <span className="blog-slider__code">{extraFact}</span>
      <div className="blog-slider__title">{title}</div>
      <div className="blog-slider__text">{description}</div>
      <a href={link} target="_blank" className="blog-slider__button">
        {buttonText}
      </a>
    </div>
  </div>
);


interface Props {
  featuredData: any;
  featuredHeader: any;
  featuredStyles: any;
}
const FeaturedCarousel: React.FC<Props> = ({featuredData, featuredHeader, featuredStyles}) => {


  return (
    <Carousel 
    interval={50000}
    autoPlay
    infiniteLoop
    showStatus={false}
    showThumbs={false}
    swipeable={false}
    >
      {featuredData.map((item:any, index:number) => (
        <div className="blog-slider">
        <div className="blog-slider__wrp swiper-wrapper">
          <FeaturedCarouselItem key={index} {...item} buttonText={featuredHeader.buttonText} direction={featuredStyles.direction}/>
        </div>
        </div>
      ))}
      </Carousel>
  );
};

export default FeaturedCarousel;
