import React, { useEffect } from "react";
import "./FeaturedCards.scss";

interface FeaturedCardsProps {
  extraFact: string;
  image: string;
  title: string;
  description: string;
  link: string;
  direction: string;
}

interface FeaturedCardsGroupProps {
  featuredCards: FeaturedCardsProps[];
  buttonText: string;
}

const FeaturedCardsGroup: React.FC<FeaturedCardsGroupProps> = ({ featuredCards, buttonText }) => {
  return (
    <div className="c-fancy-cards-group">
      {featuredCards.map((card, index) => (
        <article key={index} className="c-fancy-card">
          <h2 >{card.title}</h2>
          <h4>{card.extraFact}</h4>
          <img src={card.image} alt={card.title} />
          <p>{card.description}</p>
          <div className="button-container">
          <button>{buttonText}</button>
          </div>
        </article>
      ))}
    </div>
  );
};

export default FeaturedCardsGroup;
