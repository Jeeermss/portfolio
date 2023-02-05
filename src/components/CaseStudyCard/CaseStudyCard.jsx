import { useState } from 'react';
import { trackWindowScroll } from 'react-lazy-load-image-component';
import ScrollAnimation from 'react-animate-on-scroll';

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
    <ScrollAnimation animateIn="animate__fadeInUp" animatePreScroll animateOnce>
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
    </ScrollAnimation>
  );
};

export default trackWindowScroll(CaseStudyCard);
