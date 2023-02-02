import React, { useState } from 'react';
import Carousel from 'react-material-ui-carousel';
import {
  ArrowCircleRightOutlined,
  ArrowCircleLeftOutlined,
} from '@mui/icons-material/';
import {
  LazyLoadImage,
  trackWindowScroll,
} from 'react-lazy-load-image-component';

import ScrollingContainer from './ScrollingContainer';

const arrowButtonsStyle = {
  color: '#C9C9C9',
  fontSize: '50px',
};

const ImageCarousel = ({
  images,
  noIndicators,
  scrollingContent = false,
  toolbarImage = '',
  scrollPosition,
}) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  return (
    <>
      {images.map((img, i) => (
        <LazyLoadImage
          scrollPosition={scrollPosition}
          src={img}
          key={i}
          alt={`lazy load checker - ${i}`}
          width="100%"
          beforeLoad={() => {
            setImagesLoaded(false);
          }}
          afterLoad={() => {
            setImagesLoaded(true);
          }}
          style={{
            display: imagesLoaded ? 'none' : 'block',
            visibility: 'hidden',
          }}
        />
      ))}
      {imagesLoaded ? (
        <div
          className="image-carousel"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          {toolbarImage ? (
            <img src={toolbarImage} alt="toolbar" width="100%" />
          ) : null}
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
                opacity: '0.7 !important',
                color: '#fff',
              },
              /* Right button */
              '.css-1abc02a button svg': {
                opacity: '0.7 !important',
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
                    <img src={item} key={i} alt="carousel" width="100%" />
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

export default trackWindowScroll(ImageCarousel);
