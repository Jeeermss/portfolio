import React from 'react';
import './about-me-item.css';
import {
  LazyLoadImage,
  trackWindowScroll,
} from 'react-lazy-load-image-component';

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
        <LazyLoadImage
          scrollPosition={scrollPosition}
          src={imgUrl}
          effect="blur"
          alt="exp"
        />
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
