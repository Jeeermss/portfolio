import { useEffect, useRef } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Grid } from '@mui/material';
import ScrollAnimation from 'react-animate-on-scroll';
import CaseStudyCard from '../CaseStudyCard/CaseStudyCard';

import {
  TALENT_PIPELINE,
  CAREER_STARTER,
  EVALUATION_TOOL,
  PROFILES_AND_VERIFICATIONS,
  CASE_STUDIES,
} from '../../constants/routes';
import './case-study-directory.css';

const CaseStudiesDirectory = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const caseStudiesRef = useRef();

  useEffect(() => {
    if (caseStudiesRef.current && location.pathname === CASE_STUDIES) {
      window.scrollTo(0, caseStudiesRef.current.offsetTop);
    }
  }, [location]);

  return (
    <Grid container className="case-study-directory">
      <Grid container>
        <Grid item xs={12}>
          <ScrollAnimation
            animateIn="animate__fadeInUp"
            animatePreScroll
            animateOnce
            className="section-headers"
          >
            <h3 className="heading-level-3">Case Studies Curated for You</h3>
          </ScrollAnimation>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={4}
        sx={{
          justifyContent: {
            xs: 'center',
            md: 'space-between',
          },
        }}
        ref={caseStudiesRef}
      >
        <Grid item xs={12} md={6} className="case-studies-card-wrapper">
          <CaseStudyCard
            header="Q1 2022 - Ongoing"
            flag="UX Research"
            contentHeader="The Need of an Evaluation Tool"
            contentDesc="A close examination of how evaluations are conducted and observed in a live site and classroom setting."
            cardImageUrl="images/cs-1.svg"
            cardImageAlt="Case Study 1"
            onClick={() => navigate(EVALUATION_TOOL, { state: { location } })}
            cardImageSize="contain"
            cardImageMobileSize="contain"
          />
        </Grid>
        <Grid item xs={12} md={6} className="case-studies-card-wrapper">
          <CaseStudyCard
            header="Q1 2022 - Ongoing"
            flag="UI Design"
            contentHeader="Performance Profiles & Verifications"
            contentDesc="How did our team assist an organization 
            prepare and transition from a paper evaluation 
            to a digital landscape?"
            cardImageUrl="images/cs-2.svg"
            cardImageAlt="Case Study 2"
            onClick={() =>
              navigate(PROFILES_AND_VERIFICATIONS, { state: { location } })
            }
            cardImageSize="90%"
            cardImageMobileSize="90%"
          />
        </Grid>
        <Grid item xs={12} md={6} className="case-studies-card-wrapper">
          <CaseStudyCard
            header="Q3 2021 - Q1 2022"
            flag="UX Research"
            contentHeader="Discover the Talent Pipeline"
            contentDesc="An opportunity to merge the gap between 
            Job Seekers and Recruiters with the assistance 
            of high school and college educators."
            cardImageUrl="images/cs-3.svg"
            cardImageAlt="Case Study 3"
            onClick={() => navigate(TALENT_PIPELINE, { state: { location } })}
            cardImageSize="60%"
            cardImageMobileSize="60%"
          />
        </Grid>
        <Grid item xs={12} md={6} className="case-studies-card-wrapper">
          <CaseStudyCard
            header="Q3 2021 - Ongoing"
            flag="UI Design"
            contentHeader="The Birth of CareerStarter"
            contentDesc="A web app that helps connect Job Seekers 
            to educators, training programs, and recruiters within the Construction and Maintenance field."
            cardImageUrl="images/cs-4.svg"
            cardImageAlt="Case Study 4"
            onClick={() => navigate(CAREER_STARTER, { state: { location } })}
            cardImageSize="90%"
            cardImageMobileSize="90%"
            cardImagePositionMobile="center 65%"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CaseStudiesDirectory;
