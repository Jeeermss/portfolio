import { useState } from 'react';
import { Grid } from '@mui/material';
import {
  LazyLoadImage,
  trackWindowScroll,
} from 'react-lazy-load-image-component';

import CaseStudyCardMedia from '../../components/CaseStudyCardMedia/CaseStudyCardMedia';
import CaseStudyIntro from '../../components/CaseStudyIntro/CaseStudyIntro';

import {
  summaryRoles,
  summary,
  problems,
  firstRowMembers,
  secondRowMembers,
} from '../../constants/talent-pipeline';
import './talent-pipeline.css';
import PersonasTabs from '../../components/TalentPipeline/PersonasTabs';
import CareerJourneyTabs from '../../components/TalentPipeline/CareerJourneyTabs';

const TalentPipeline = ({ scrollPosition }) => {
  return (
    <div className="talent-pipeline">
      <CaseStudyIntro
        pageTitle="Discover the Talent Pipeline"
        summaryRoles={summaryRoles}
        summary={summary}
        problems={problems}
        firstRowMembers={firstRowMembers}
        secondRowMembers={secondRowMembers}
      />

      <CaseStudyCardMedia
        sx={{ my: 14 }}
        cardContent="My primary role started out as a Contractor UX/UI Designer for this
          project. I closely collaborated with various team members (internal
          and external) on a quest to understand, mold, and ship a product that
          caters to upcoming craft professionals."
        cardImageUrl="images/case_studies/talent_pipeline/byf_collaborations_roadmap.svg"
      />

      <Grid
        container
        rowGap={{ xs: 7, md: 0 }}
        spacing={{ xs: 0, md: 8 }}
        sx={{ mb: 7 }}
      >
        <Grid item xs={12} md={6} className="talent-pipeline__opportunity">
          <h2>Opportunity</h2>
          <p>
            Stakeholders discovered and researched an opportunity to merge the
            gap between job seekers and recruiters with the assistance of
            educators.
          </p>
          <p>
            Build Your Future then built a partnership with Futures to launch a
            product that assists to these three different user types (see
            below).
          </p>
        </Grid>
        <Grid item xs={12} md={6} className="talent-pipeline__opportunity">
          <h2>Who are they?</h2>
          <p>
            75% of Construction and Maintenance industry professionals reported
            they proactively seek to build new talent, even if talent is not
            currently needed.
          </p>
          <span>
            The marketing team conducted focus groups of all 3 user types.
            <br />
            <br />
            As part of my onboarding process, I reviewed and compiled their
            findings so I can initiate a persona white-boarding session.
            Followed after was the creation of the requirement gathering
            process.
          </span>
        </Grid>
      </Grid>

      <Grid
        container
        rowGap={{ xs: 7, md: 0 }}
        spacing={{ xs: 0, md: 8 }}
        sx={{ mb: 15 }}
      >
        <Grid item xs={12} md={4} className="talent-pipeline__role">
          <LazyLoadImage
            scrollPosition={scrollPosition}
            src="images/case_studies/talent_pipeline/job_seeker.svg"
            effect="blur"
            alt="job seeker"
          />
          <span>Entry-level Construction and Maintenance Job Seekers</span>
        </Grid>
        <Grid item xs={12} md={4} className="talent-pipeline__role">
          <LazyLoadImage
            scrollPosition={scrollPosition}
            src="images/case_studies/talent_pipeline/employee_rep.svg"
            effect="blur"
            alt="employee rep"
          />
          <span>
            Employer Representatives <br /> (Recruiters)
          </span>
        </Grid>
        <Grid item xs={12} md={4} className="talent-pipeline__role">
          <LazyLoadImage
            scrollPosition={scrollPosition}
            src="images/case_studies/talent_pipeline/training_instructor.svg"
            effect="blur"
            alt="training instructor"
          />
          <span>
            Training Instructors <br /> (Case Managers)
          </span>
        </Grid>
      </Grid>

      <Grid
        container
        rowGap={{ xs: 4, md: 0 }}
        spacing={{ xs: 0, md: 8 }}
        sx={{ mb: 7 }}
      >
        <Grid item xs={12} className="talent-pipeline__personas">
          <h3>Personas</h3>
        </Grid>
        <Grid item xs={12} md={6} className="talent-pipeline__personas">
          <p>
            The marketing team conducted a focus group to gather specific
            insights from the GenZ target audience, which were in the process of
            completing their craft training high school program.
          </p>
          <p>
            These personas I’ve crafted were based on the results they’ve
            accumulated.{' '}
          </p>
        </Grid>
        <Grid item xs={12} md={6} className="talent-pipeline__personas">
          <div>
            <LazyLoadImage
              scrollPosition={scrollPosition}
              src="images/case_studies/talent_pipeline/personas_female.svg"
              effect="blur"
              alt="female persona"
            />
            <LazyLoadImage
              scrollPosition={scrollPosition}
              src="images/case_studies/talent_pipeline/personas_male.svg"
              effect="blur"
              alt="male persona"
            />
          </div>
        </Grid>
      </Grid>

      <PersonasTabs />

      <Grid
        container
        rowGap={{ xs: 4, md: 0 }}
        spacing={{ xs: 0, md: 3 }}
        sx={{ mb: 7 }}
      >
        <Grid item xs={12} className="talent-pipeline__personas">
          <h3>Customer Journeys</h3>
        </Grid>
        <Grid item xs={12} md={6} className="talent-pipeline__personas">
          <p>
            These customer journeys were created to formulate a strong, aligned
            vision with team members involved in this project.
          </p>
          <p>
            This visually helped talking through the intentions of user pathway
            for each user type. This helped build business and user
            requirements.
          </p>
        </Grid>
      </Grid>

      <CareerJourneyTabs />
    </div>
  );
};

export default trackWindowScroll(TalentPipeline);
