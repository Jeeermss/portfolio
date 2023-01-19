import { Stack } from '@mui/material';
import { styled } from '@mui/material/styles';
import {
  LazyLoadImage,
  trackWindowScroll,
} from 'react-lazy-load-image-component';
import ScrollAnimation from 'react-animate-on-scroll';

import './hero.css';

const StyledDiv = styled('div')(({ theme }) => ({
  textAlign: 'center',
}));
const StyledHeading = styled('h1')(() => ({}));
const StyledParagraph = styled('p')(() => ({}));
const StyledImg = styled(LazyLoadImage)(() => ({}));
const styledHeadingBreakpoints = {
  fontSize: {
    xs: '56px !important',
    lg: '64px !important',
    xl: '88px !important',
  },
  lineHeight: {
    xs: '67.2px !important',
    lg: '80px !important',
    xl: '105px !important',
  },
};

const Hero = ({ scrollPosition }) => {
  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      justifyContent="center"
      spacing={{ xs: 1, sm: 2, md: 4 }}
      className="hero"
    >
      <StyledDiv sx={{ mb: { xs: 3, md: 0 } }} className="hero__first-col">
        <ScrollAnimation
          animateOnce
          animateIn="animate__backInLeft"
          duration={2}
          initiallyVisible
        >
          <StyledHeading
            sx={{
              fontSize: styledHeadingBreakpoints.fontSize,
              lineHeight: styledHeadingBreakpoints.lineHeight,
              mb: {
                xs: 3,
                lg: 6,
              },
              textAlign: {
                xs: 'center',
                md: 'end',
              },
            }}
            className="jm-typography heading-level-1"
          >
            Jeremie <br /> Montero
          </StyledHeading>
          <StyledDiv
            sx={{
              display: 'flex',
              justifyContent: {
                xs: 'center',
                lg: 'flex-end',
              },
            }}
          >
            <StyledImg
              scrollPosition={scrollPosition}
              effect="blur"
              src="assets/location.svg"
              alt="born & raised in san francisco"
              sx={{
                mr: {
                  xs: '4px',
                  lg: '8px',
                },
                width: {
                  xs: 40,
                  lg: 'auto',
                },
              }}
            />
            <StyledParagraph
              sx={{
                fontSize: {
                  xs: '18px !important',
                  lg: '26px !important',
                },
                lineHeight: {
                  xs: '21px !important',
                  lg: '31px !important',
                },
              }}
              className="jm-typography-2 body-1 text-start"
            >
              BORN & RAISED IN
              <br /> SAN FRANCISCO
            </StyledParagraph>
          </StyledDiv>
        </ScrollAnimation>
      </StyledDiv>

      <StyledDiv
        sx={{ mb: { xs: '24px !important', md: '0 !important' } }}
        className="hero__second-col"
      >
        <ScrollAnimation
          animateOnce
          animateIn="animate__bounce"
          initiallyVisible
        >
          <StyledImg
            scrollPosition={scrollPosition}
            effect="blur"
            src="images/Hero.svg"
            alt="Hi, I'm Jeremie!"
            sx={{ minWidth: 333 }}
          />
        </ScrollAnimation>
      </StyledDiv>

      <StyledDiv
        sx={{ alignSelf: { xs: 'center', md: 'flex-end' } }}
        className="hero__third-col"
      >
        <ScrollAnimation
          animateOnce
          animateIn="animate__backInRight"
          duration={2}
          initiallyVisible
        >
          <StyledHeading
            sx={{
              fontSize: styledHeadingBreakpoints.fontSize,
              lineHeight: styledHeadingBreakpoints.lineHeight,
              textAlign: {
                xs: 'center',
                md: 'start',
              },
            }}
            className="jm-typography heading-level-1"
          >
            Senior <br /> Product <br /> Designer
          </StyledHeading>
        </ScrollAnimation>
      </StyledDiv>
    </Stack>
  );
};

export default trackWindowScroll(Hero);
