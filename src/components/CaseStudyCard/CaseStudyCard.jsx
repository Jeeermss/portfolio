import { useState } from 'react';
import './case-study-card.css';

const CaseStudyCard = ({
  header,
  flag,
  contentHeader,
  contentDesc,
  cardImageUrl,
  cardImageAlt,
  onClick,
}) => {
  const [cardHovered, setCardHovered] = useState(false);
  return (
    <div
      className="card"
      onClick={onClick}
      onMouseEnter={() => setCardHovered(true)}
      onMouseLeave={() => setCardHovered(false)}
    >
      <div className="card-header">
        <h4 className="heading-level-4">{header}</h4>
        <p className="card-header__flag body-2">{flag}</p>
      </div>
      <div
        className="card-media"
        style={{
          backgroundImage: `url(${cardImageUrl})`,
          backgroundSize: 'auto',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* {cardImageUrl ? <img src={cardImageUrl} alt={cardImageAlt} /> : null} */}
      </div>
      <div className={`card-content ${cardHovered ? 'card-hovered' : ''}`}>
        <h4 className="card-content__heading heading-level-4-card">
          {contentHeader}
        </h4>
        <p className="body-3 jm-typography-2">{contentDesc}</p>
      </div>
    </div>
  );
};

export default CaseStudyCard;
