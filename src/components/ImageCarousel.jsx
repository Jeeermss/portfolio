import React, { useState, useEffect, useLayoutEffect } from 'react';
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
  images = [],
  noIndicators,
  scrollingContent = false,
  toolbarImage = '',
  scrollPosition,
}) => {
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // const loadImagesInSequence = async (images) => {
  //   console.log(images, 'top images');
  //   if (!images.length) {
  //     setImagesLoaded(true);
  //   }

  //   // for (let i = 0; i < images.length; i++) {
  //   //   console.log('image' + i);

  //   //   new Promise((resolve, reject) => {
  //   //     let img = new Image();
  //   //     img.onload = () => {
  //   //       return resolve(img.height);
  //   //     };
  //   //     img.onerror = reject;
  //   //     img.src = images[i];
  //   //   });
  //   // }

  //   var img = new Image(),
  //     url = images.shift();

  //   img.onload = function () {
  //     console.log('loaded');
  //     setTimeout(() => {
  //       console.log('loading another image');
  //       loadImagesInSequence(images);
  //     }, 500);
  //   };
  //   console.log('url', url);
  //   // await img.decode();
  //   // console.log('loaded', img);
  //   // loadImagesInSequence(images);
  //   img.src = url;
  // };

  // useEffect(() => {
  //   if (images && images.length) {
  //     loadImagesInSequence(images);
  //   }
  // }, [images]);

  return (
    <>
      <img
        src={images[0]}
        onLoad={() => setImagesLoaded(true)}
        style={{ display: 'none' }}
        alt="checker"
      />
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
                    <img
                      data-src={item}
                      class="lazyload"
                      key={i}
                      alt="carousel"
                      width="100%"
                    />
                  </ScrollingContainer>
                ))
              : images.map((item, i) => (
                  <img
                    data-src={item}
                    class="lazyload"
                    key={i}
                    alt="carousel"
                    width="100%"
                  />
                ))}
          </Carousel>
        </div>
      ) : null}
    </>
  );
};

export default trackWindowScroll(ImageCarousel);
