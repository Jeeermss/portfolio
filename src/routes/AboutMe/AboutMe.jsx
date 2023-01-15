import React from 'react';
import { Grid } from '@mui/material';
import Avatar from '../../components/Avatar/Avatar';
import AboutMeItem from '../../components/AboutMeItem/AboutMeItem';

import {
  aboutMeCareerJourney,
  aboutMeToolbox,
  aboutMeHobbies,
} from '../../constants/about-me';
import './about-me.css';

const AboutMe = () => {
  return (
    <main className="about-me">
      <section className="about-me__info">
        <Avatar
          sx={{ minWidth: 400 }}
          // avatarUrl={HeroImage}
        />
        <div className="about-me__info-data">
          <div className="about-me__info-name">
            <h2 className="heading-level-2">Jeremie</h2>
            <p>[ jer-uh-mee ]</p>
          </div>
          <p className="about-me__info-noun">noun.</p>
          <ol className="about-me__info-list body-2">
            <li>
              A Filipina-American woman who is passionate about solving problems
              by using research, critical thinking, and ideation. Her
              educational career started in 2012 and lasted for 6 years.
            </li>
            <li>
              On her 6th year, she transitioned to Tech, focusing in UI Design.
            </li>
            <li>
              Now, she works within the EdTech industry with a focus of Adult
              Education in digital products.
            </li>
          </ol>
        </div>
      </section>
      <section className="about-me__more-info">
        <Grid container spacing={2} sx={{ marginBottom: '160px' }}>
          <Grid item xs={5}>
            <p className="about-me__more-info-label">Her Career Journey</p>
          </Grid>
          <Grid item xs={7}>
            {aboutMeCareerJourney.map((aboutMe) => (
              <Grid item xs={12} sx={{ paddingBottom: '24px' }}>
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

        <Grid container spacing={2} sx={{ marginBottom: '160px' }}>
          <Grid item xs={5}>
            <p className="about-me__more-info-label">Her Toolbox</p>
          </Grid>
          <Grid item xs={7}>
            {aboutMeToolbox.map((aboutMe) => (
              <Grid item xs={12} sx={{ paddingBottom: '24px' }}>
                <AboutMeItem
                  imgUrl={aboutMe.imgUrl}
                  customContent={aboutMe.customContent}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={5}>
            <p className="about-me__more-info-label">Her Hobbies</p>
          </Grid>
          <Grid item xs={7}>
            {aboutMeHobbies.map((aboutMe) => (
              <Grid item xs={12} sx={{ paddingBottom: '24px' }}>
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
    </main>
  );
};

export default AboutMe;
