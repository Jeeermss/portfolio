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

  return (
    <>
      <img
        src={images[0]}
        onLoad={() => setFirstImgLoaded(true)}
        style={{ display: 'none' }}
        alt="checker"
      />
      {firstImgLoaded ? (
        <div className="image-carousel">
          <Carousel
            navButtonsAlwaysVisible
            NextIcon={<ArrowCircleRightOutlined sx={arrowButtonsStyle} />}
            PrevIcon={<ArrowCircleLeftOutlined sx={arrowButtonsStyle} />}
            navButtonsProps={{
              style: {
                backgroundColor: 'rgba(0, 0, 0, 0.150)',
                borderRadius: 0,
                margin: 0,
                padding: '36px 16px',
              },
            }}
            sx={{
              /* Left button */
              '.css-hn784z:hover button': {
                opacity: '1 !important',
                backgroundColor: 'rgba(0, 0, 0, 0.3) !important',
              },
              /* Right button */
              '.css-1abc02a:hover button': {
                opacity: '1 !important',
                backgroundColor: 'rgba(0, 0, 0, 0.3) !important',
              },
              /* Left button */
              '.css-hn784z button svg': {
                color: '#fff',
              },
              /* Right button */
              '.css-1abc02a button svg': {
                color: '#fff',
              },
            }}
            autoPlay={false}
            animation="slide"
            indicators={noIndicators ? false : true}
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
