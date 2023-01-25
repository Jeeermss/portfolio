import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import {
  ArrowCircleRightOutlined,
  ArrowCircleLeftOutlined,
} from '@mui/icons-material/';

const arrowButtonsStyle = {
  color: '#C9C9C9',
  fontSize: '50px',
};

const ImageCarousel = ({ images, label }) => {
  const [firstImgLoaded, setFirstImgLoaded] = useState(false);
  const [showIndicators, setShowIndicators] = useState(false);

  return (
    <>
      <img
        src={images[0]}
        onLoad={() => setFirstImgLoaded(true)}
        style={{ display: 'none' }}
        alt="checker"
      />
      {firstImgLoaded ? (
        <Carousel
          className="image-carousel"
          navButtonsAlwaysVisible
          NextIcon={<ArrowCircleRightOutlined sx={arrowButtonsStyle} />}
          PrevIcon={<ArrowCircleLeftOutlined sx={arrowButtonsStyle} />}
          navButtonsProps={{
            style: {
              backgroundColor: 'rgba(0, 0, 0, 0.4)',
              borderRadius: 0,
              margin: 0,
              padding: '36px 16px',
            },
            onMouseEnter: () => setShowIndicators(true),
            onMouseLeave: () => setShowIndicators(false),
          }}
          autoPlay={false}
          animation="slide"
          indicators={showIndicators}
        >
          {images.map((item, i) => (
            <img
              src={item}
              key={i}
              alt="carousel"
              width="100%"
              onMouseEnter={() => setShowIndicators(true)}
              onMouseLeave={() => setShowIndicators(false)}
            />
          ))}
        </Carousel>
      ) : null}
    </>
  );
};

export default ImageCarousel;
