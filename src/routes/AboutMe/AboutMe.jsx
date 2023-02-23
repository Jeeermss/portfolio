import React from 'react';
import { Grid } from '@mui/material';
import Avatar from '../../components/Avatar/Avatar';
import AboutMeItem from '../../components/AboutMeItem/AboutMeItem';
import {
  LazyLoadImage,
  trackWindowScroll,
} from 'react-lazy-load-image-component';

import {
  aboutMeCareerJourney,
  aboutMeToolbox,
  aboutMeHobbies,
} from '../../constants/about-me';
import './about-me.css';

import ScrollAnimation from 'react-animate-on-scroll';

const AboutMe = ({ scrollPosition }) => {
  return (
    <main className="about-me">
      <section className="about-me__info">
        <Avatar
          sx={{
            minWidth: {
              xs: '100%',
              md: 400,
            },
            mb: {
              xs: 5,
              md: 0,
            },
          }}
          avatarUrl="images/about_me_avatar.png"
        />
        <div className="about-me__info-data">
          <ScrollAnimation
            animateIn="animate__fadeInUp"
            animatePreScroll
            animateOnce
          >
            <div className="about-me__info-name">
              <h2>Jeremie</h2>
              <p>[ jer-uh-mee ]</p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            animateIn="animate__fadeInUp"
            animatePreScroll
            animateOnce
            delay={300}
          >
            <p className="about-me__info-noun">noun.</p>
          </ScrollAnimation>
          <ol className="about-me__info-list body-2">
            <ScrollAnimation
              animateIn="animate__fadeInUp"
              animatePreScroll
              animateOnce
              delay={900}
              offset={0}
            >
              <li>
                A Filipina-American woman who is passionate about solving
                problems by using research, critical thinking, and ideation. Her
                educational career started in 2012 and lasted for 6 years.
              </li>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="animate__fadeInUp"
              animatePreScroll
              animateOnce
              delay={1400}
              offset={0}
            >
              <li>
                On her 6th year, she transitioned to Tech, focusing in UI
                Design.
              </li>
            </ScrollAnimation>
            <ScrollAnimation
              animateIn="animate__fadeInUp"
              animatePreScroll
              animateOnce
              delay={1900}
              offset={0}
            >
              <li>
                Now, she works within the EdTech industry with a focus of Adult
                Education in digital products.
              </li>
            </ScrollAnimation>
          </ol>
        </div>
      </section>
      <section className="about-me__more-info">
        <Grid container spacing={2} direction={{ xs: 'column', md: 'row' }}>
          <Grid item xs={5} sx={{ mb: 4 }}>
            <p className="about-me__more-info-label">Her Career Journey</p>
          </Grid>
          <Grid item xs={7}>
            {aboutMeCareerJourney.map((aboutMe, idx) => (
              <Grid key={idx} item xs={12} sx={{ paddingBottom: '24px' }}>
                <AboutMeItem
                  name={aboutMe.name}
                  position={aboutMe.position}
                  duration={aboutMe.duration}
                  imgUrl={aboutMe.imgUrl}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid container spacing={2} direction={{ xs: 'column', md: 'row' }}>
          <Grid item xs={5} sx={{ mb: 4 }}>
            <p className="about-me__more-info-label">Her Toolbox</p>
          </Grid>
          <Grid item xs={7}>
            {aboutMeToolbox.map((aboutMe, idx) => (
              <Grid key={idx} item xs={12} sx={{ paddingBottom: '24px' }}>
                <AboutMeItem
                  imgUrl={aboutMe.imgUrl}
                  customContent={aboutMe.customContent}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid container spacing={2} direction={{ xs: 'column', md: 'row' }}>
          <Grid item xs={5} sx={{ mb: 4 }}>
            <p className="about-me__more-info-label">Her Hobbies</p>
          </Grid>
          <Grid item xs={7}>
            {aboutMeHobbies.map((aboutMe, idx) => (
              <Grid key={idx} item xs={12} sx={{ paddingBottom: '24px' }}>
                <AboutMeItem
                  name={aboutMe.name}
                  position={aboutMe.position}
                  duration={aboutMe.duration}
                  imgUrl={aboutMe.imgUrl}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </section>

      <section className="about-me__business_cards">
        <Grid container spacing={2} direction={{ xs: 'column', md: 'row' }}>
          <Grid item xs={5} sx={{ mb: 4 }}>
            <p className="about-me__business_cards-label">
              Let’s work together to make the biggest impact possible.
            </p>
          </Grid>
          <Grid item xs={7}>
            <Grid item xs={12} sx={{ paddingBottom: '24px' }}>
              <ScrollAnimation
                animateOnce
                animateIn="animate__fadeInUp"
                animatePreScroll
              >
                <LazyLoadImage
                  scrollPosition={scrollPosition}
                  src="images/Front_Business_Card.png"
                  alt="exp"
                  width="100%"
                />
              </ScrollAnimation>
            </Grid>
            <Grid item xs={12}>
              <ScrollAnimation
                animateOnce
                animateIn="animate__fadeInUp"
                animatePreScroll
              >
                <LazyLoadImage
                  scrollPosition={scrollPosition}
                  src="images/Back_Business_Card.png"
                  alt="exp"
                  width="100%"
                />
              </ScrollAnimation>
            </Grid>
          </Grid>
        </Grid>
      </section>
    </main>
  );
};

export default trackWindowScroll(AboutMe);
