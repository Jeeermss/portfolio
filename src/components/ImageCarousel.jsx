import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import {
  ArrowCircleRightOutlined,
  ArrowCircleLeftOutlined,
} from '@mui/icons-material/';

import ScrollingContainer from './ScrollingContainer';

const arrowButtonsStyle = {
  color: '#C9C9C9',
  fontSize: '50px',
};

const ImageCarousel = ({ images, noIndicators, scrollingContent = false }) => {
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
        <div
          className="image-carousel"
          onMouseEnter={() => setShowIndicators(true)}
          onMouseLeave={() => setShowIndicators(false)}
        >
          <Carousel
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
            }}
            autoPlay={false}
            animation="slide"
            indicators={noIndicators ? false : showIndicators}
          >
            {scrollingContent
              ? images.map((item, i) => (
                  <ScrollingContainer key={i}>
                    <img src={item} alt="carousel" width="100%" />
                  </ScrollingContainer>
                ))
              : images.map((item, i) => (
                  <img src={item} key={i} alt="carousel" width="100%" />
                ))}
          </Carousel>
        </div>
      ) : null}
    </>
  );
};

export default ImageCarousel;
