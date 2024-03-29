import React from 'react';
import { Grid, Container } from '@mui/material';
import {
  LazyLoadImage,
  trackWindowScroll,
} from 'react-lazy-load-image-component';
import ScrollAnimation from 'react-animate-on-scroll';

import './case-study-intro.css';

const CaseStudyIntro = ({
  pageTitle,
  summary,
  summaryRoles,
  problems,
  firstRowMembers,
  secondRowMembers,
  firstRowMembersTitle = 'Build Your Future’s Team Members',
  secondRowMembersTitle = 'Future’s Team Members',
  scrollPosition,
}) => {
  return (
    <div className="cs-intro">
      <h2 className="cs-intro__page-title">{pageTitle}</h2>
      <Grid
        container
        rowSpacing={{ xs: 4, md: 0 }}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        columns={{ xs: 6, md: 12 }}
      >
        <Grid item xs={6}>
          <ScrollAnimation
            animateOnce
            animateIn="animate__fadeInUp"
            animatePreScroll
            offset={250}
            className="cs-intro__card cs-intro__summary"
          >
            <div>
              <h3>Summary</h3>
              <p>{summary}</p>
            </div>
            <div className="cs-intro__summary-roles">
              {summaryRoles.map((role, idx) => (
                <span className="cs-intro__summary-role" key={idx}>
                  {role}
                </span>
              ))}
            </div>
          </ScrollAnimation>
        </Grid>
        <Grid item xs={6}>
          <ScrollAnimation
            animateOnce
            animateIn="animate__fadeInUp"
            animatePreScroll
            offset={250}
            className="cs-intro__card cs-intro__problem"
          >
            <div>
              <div>
                <h3>Problem</h3>
                {problems.map((problem, idx) => (
                  <p key={idx}>{problem}</p>
                ))}
              </div>
            </div>
          </ScrollAnimation>
        </Grid>
        <Grid item xs={12}>
          <ScrollAnimation
            animateOnce
            animateIn="animate__fadeInUp"
            animatePreScroll
            offset={50}
          >
            <div className="cs-intro__team-members">
              <Container maxWidth="md">
                <h3>{firstRowMembersTitle}</h3>
                <Grid container spacing={{ xs: 4, md: 10 }}>
                  {firstRowMembers.map((member, idx) => (
                    <Grid key={idx} item xs={6} sm={3} md={3}>
                      <div className="cs-intro__team-member">
                        <LazyLoadImage
                          scrollPosition={scrollPosition}
                          src={member.imgUrl}
                          effect="blur"
                          alt="team-member"
                        />
                        <span>{member.role}</span>
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </Container>
              <Container maxWidth="md" sx={{ mt: { xs: 4, md: 6 } }}>
                <h3>{secondRowMembersTitle}</h3>
                <Grid container spacing={{ xs: 4, md: 10 }}>
                  {secondRowMembers.map((member, idx) => (
                    <Grid key={idx} item xs={6} sm={3} md={3}>
                      <div className="cs-intro__team-member">
                        <LazyLoadImage
                          scrollPosition={scrollPosition}
                          effect="blur"
                          alt="team-member"
                          src={member.imgUrl}
                        />
                        <span>{member.role}</span>
                      </div>
                    </Grid>
                  ))}
                </Grid>
              </Container>
            </div>
          </ScrollAnimation>
        </Grid>
      </Grid>
    </div>
  );
};

export default trackWindowScroll(CaseStudyIntro);
