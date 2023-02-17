import React from 'react';
import ImageCarousel from '../ImageCarousel';

import './case-study-card-carousel.css';

const CaseStudyCardCarousel = ({
  carouselImages,
  carouselContent,
  toolbarImage = '',
}) => {
  return (
    <div className="case-study-card-carousel">
      <ImageCarousel
        images={carouselImages}
        toolbarImage={toolbarImage}
        noIndicators
      />
      <div className="case-study-card-carousel__content">
        {carouselContent.map((content, idx) => (
          <p key={idx}>{content}</p>
        ))}
      </div>
    </div>
  );
};

export default CaseStudyCardCarousel;
