import React from 'react';
import './about-me-item.css';

const AboutMeItem = ({ imgUrl, name, position, duration, customContent }) => {
  return (
    <div className="about-me-item">
      <div className="about-me-item__logo">
        <img src={imgUrl} alt="exp" />
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

export default AboutMeItem;
