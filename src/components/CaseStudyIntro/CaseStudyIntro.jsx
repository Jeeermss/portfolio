import React from 'react';
import { Grid, Container } from '@mui/material';

import './case-study-intro.css';

const CaseStudyIntro = ({
  pageTitle,
  summary,
  summaryRoles,
  problems,
  firstRowMembers,
  secondRowMembers,
}) => {
  return (
    <div className="cs-intro">
      <h2 className="cs-intro__page-title">{pageTitle}</h2>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        columns={{ xs: 6, md: 12 }}
      >
        <Grid item xs={6}>
          <div className="cs-intro__card cs-intro__summary">
            <div>
              <h3>Summary</h3>
              <p>{summary}</p>
            </div>
            <div className="cs-intro__summary-roles">
              {summaryRoles.map((role, idx) => (
                <span key={idx} className="cs-intro__summary-role">
                  {role}
                </span>
              ))}
            </div>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="cs-intro__card cs-intro__problem">
            <div>
              <h3>Problem</h3>
              {problems.map((problem, idx) => (
                <p key={idx}>{problem}</p>
              ))}
            </div>
          </div>
        </Grid>
        <Grid item xs={12}>
          <div className="cs-intro__team-members">
            <Container maxWidth="md">
              <h3>Build Your Future’s Team Members</h3>
              <Grid container spacing={{ xs: 1, sm: 3, md: 10 }}>
                {firstRowMembers.map((member, idx) => (
                  <Grid key={idx} item xs={6} sm={3} md={3}>
                    <div className="cs-intro__team-member">
                      <img alt="team-member" src={member.imgUrl} />
                      <span>{member.role}</span>
                    </div>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default CaseStudyIntro;
