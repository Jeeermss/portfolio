import React, { useState, useEffect } from 'react';
import { useMediaQuery, CircularProgress } from '@mui/material';
import { useTheme } from '@mui/material/styles';
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [imagesList, setImagesList] = useState([]);

  const imagesArr = [];

  const loadImagesInSequence = (images) => {
    const imagesCopy = images.slice();
    if (!imagesCopy.length) {
      setImagesList(imagesArr);
      setImagesLoaded(true);
      return;
    }
    var img = new Image(),
      url = imagesCopy.shift();
    img.width = '100%';

    img.onload = function () {
      imagesArr.push({
        url: img.src,
        height: img.naturalHeight <= 740 ? '100%' : 'auto',
      });
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
                padding: isMobile ? '8px' : '36px 16px',
              },
            }}
            sx={{
              /* Button Hover */
              '.css-hn784z:hover button, .css-1abc02a:hover button': {
                opacity: '1 !important',
                backgroundColor: 'rgba(0, 0, 0, 0.15) !important',
              },
              /* Button Icon */
              '.css-hn784z button svg, .css-1abc02a button svg': {
                opacity: '0.7 !important',
                color: '#fff',
                width: {
                  xs: '32px',
                  sm: 'auto',
                },
              },
              /* Button */
              '.css-hn784z, .css-1abc02a': {
                top: { xs: '-25px', sm: '-35px' },
              },
            }}
            autoPlay={false}
            animation="slide"
            indicators={noIndicators ? false : true}
          >
            {imagesList.map((item, i) => (
              <ScrollingContainer maxHeight={scrollingMaxHeight} key={i}>
                <img
                  src={item.url}
                  key={i}
                  alt="carousel"
                  width="100%"
                  style={{ height: item.height }}
                />
              </ScrollingContainer>
            ))}
          </Carousel>
        </div>
      ) : (
        <div style={{ textAlign: 'center' }}>
          <CircularProgress sx={{ color: '#c95d63 !important', my: 8 }} />
        </div>
      )}
    </>
  );
};

export default trackWindowScroll(ImageCarousel);
