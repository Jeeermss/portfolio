import React from 'react';
import './about-me-item.css';
import {
  LazyLoadImage,
  trackWindowScroll,
} from 'react-lazy-load-image-component';
import ScrollAnimation from 'react-animate-on-scroll';

const AboutMeItem = ({
  imgUrl,
  name,
  position,
  duration,
  customContent,
  scrollPosition,
}) => {
  return (
    <div className="about-me-item">
      <div className="about-me-item__logo">
        <ScrollAnimation animateOnce animateIn="animate__pulse">
          <LazyLoadImage
            scrollPosition={scrollPosition}
            src={imgUrl}
            alt="exp"
          />
        </ScrollAnimation>
      </div>
      <div className="about-me-item__details">
        {customContent ? (
          customContent.map((item, idx) => (
            <p key={idx} className="about-me-item__details-custom-item">
              {item}
            </p>
          ))
        ) : (
          <>
            <p className="about-me-item__details-name">{name}</p>
            <p className="about-me-item__details-position">{position}</p>
            <p className="about-me-item__details-duration">{duration}</p>
          </>
        )}
      </div>
    </div>
  );
};

export default trackWindowScroll(AboutMeItem);
