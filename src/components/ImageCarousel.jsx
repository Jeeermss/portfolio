import React, { useState, useEffect } from 'react';
import Carousel from 'react-material-ui-carousel';
import {
  ArrowCircleRightOutlined,
  ArrowCircleLeftOutlined,
} from '@mui/icons-material/';
import { trackWindowScroll } from 'react-lazy-load-image-component';

import ScrollingContainer from './ScrollingContainer';

const arrowButtonsStyle = {
  color: '#C9C9C9',
  fontSize: '50px',
};

const ImageCarousel = ({
  images = [],
  noIndicators,
  toolbarImage = '',
  scrollingMaxHeight = 720,
}) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const loadImagesInSequence = (images) => {
    const imagesCopy = images.slice();
    if (!imagesCopy.length) {
      setImagesLoaded(true);
      return;
    }
    var img = new Image(),
      url = imagesCopy.shift();
    img.width = '100%';

    img.onload = function () {
      setTimeout(() => {
        loadImagesInSequence(imagesCopy);
      }, 1000);
    };
    img.src = url;
  };

  useEffect(() => {
    if (images && images.length) {
      loadImagesInSequence(images);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
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
                backgroundColor: 'rgba(0, 0, 0, 0.10)',
                borderRadius: 0,
                margin: 0,
                padding: '36px 16px',
              },
            }}
            sx={{
              /* Left button */
              '.css-hn784z:hover button': {
                opacity: '1 !important',
                backgroundColor: 'rgba(0, 0, 0, 0.15) !important',
              },
              /* Right button */
              '.css-1abc02a:hover button': {
                opacity: '1 !important',
                backgroundColor: 'rgba(0, 0, 0, 0.15) !important',
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
            {images.map((item, i) => (
              <ScrollingContainer maxHeight={scrollingMaxHeight} key={i}>
                <img src={item} key={i} alt="carousel" width="100%" />
              </ScrollingContainer>
            ))}
          </Carousel>
        </div>
      ) : null}
    </>
  );
};

export default trackWindowScroll(ImageCarousel);
