import { useState } from 'react';
import { Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  LazyLoadImage,
  trackWindowScroll,
} from 'react-lazy-load-image-component';
import ScrollAnimation from 'react-animate-on-scroll';

import CaseStudyCardMedia from '../../components/CaseStudyCardMedia/CaseStudyCardMedia';
import CaseStudyIntro from '../../components/CaseStudyIntro/CaseStudyIntro';
import PersonasTabs from '../../components/TalentPipeline/PersonasTabs';
import CareerJourneyTabs from '../../components/TalentPipeline/CareerJourneyTabs';

import {
  summaryRoles,
  summary,
  problems,
  firstRowMembers,
  secondRowMembers,
} from '../../constants/talent-pipeline';
import './talent-pipeline.css';
import NextCaseStudy from '../../components/NextCaseStudy/NextCaseStudy';
import ScrollingContainer from '../../components/ScrollingContainer';
import PageRoadMap from '../../components/PageRoadMap/PageRoadMap';

import { CAREER_STARTER } from '../../constants/routes';

const TalentPipeline = ({ scrollPosition }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="talent-pipeline">
      <PageRoadMap showMore={showMore} />
      <div className="page-section" data-section-label="Overview">
        <CaseStudyIntro
          pageTitle="Discover the Talent Pipeline"
          summaryRoles={summaryRoles}
          summary={summary}
          problems={problems}
          firstRowMembers={firstRowMembers}
          secondRowMembers={secondRowMembers}
        />
      </div>

      {!showMore && isMobile ? (
        <button className="show-more" onClick={() => setShowMore(true)}>
          <img src="images/eye_icon.svg" alt="eye icon" />
          View More
        </button>
      ) : null}

      {(showMore && isMobile) || !isMobile ? (
        <>
          <div className="page-section" data-section-label="Roadmap">
            <ScrollAnimation
              animateOnce
              animateIn="animate__fadeInUp"
              animatePreScroll
            >
              <CaseStudyCardMedia
                sx={{ my: isMobile ? 7 : 14 }}
                cardContent="My primary role started out as a Contractor UX/UI Designer for this
          project. I closely collaborated with various team members (internal
          and external) on a quest to understand, mold, and ship a product that
          caters to upcoming craft professionals."
                cardImageUrl="images/case_studies/talent_pipeline/byf_collaborations_roadmap.webp"
              />
            </ScrollAnimation>
          </div>

          <div className="page-section" data-section-label="Opportunity">
            <Grid
              container
              rowGap={{ xs: 7, md: 0 }}
              spacing={{ xs: 0, md: 8 }}
              sx={{ mb: { xs: 4, md: 7 } }}
            >
              <Grid
                item
                xs={12}
                md={6}
                className="talent-pipeline__common-paragraph"
              >
                <h2>Opportunity</h2>
                <p>
                  Stakeholders discovered and researched an opportunity to merge
                  the gap between job seekers and recruiters with the assistance
                  of educators.
                </p>
                <p>
                  Build Your Future then built a partnership with Futures to
                  launch a product that assists to these three different user
                  types (see below).
                </p>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="talent-pipeline__common-paragraph"
              >
                <h2>Who are they?</h2>
                <p>
                  75% of Construction and Maintenance industry professionals
                  reported they proactively seek to build new talent, even if
                  talent is not currently needed.
                </p>
                <span>
                  The marketing team conducted focus groups of all 3 user types.
                  <br />
                  <br />
                  As part of my onboarding process, I reviewed and compiled
                  their findings so I can initiate a persona white-boarding
                  session. Followed after was the creation of the requirement
                  gathering process.
                </span>
              </Grid>
            </Grid>
            <Grid
              container
              rowGap={{ xs: 7, md: 0 }}
              spacing={{ xs: 0, md: 8 }}
              sx={{ mb: { xs: 9, md: 15 } }}
            >
              <Grid item xs={12} md={4} className="talent-pipeline__role">
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <LazyLoadImage
                    scrollPosition={scrollPosition}
                    src="images/case_studies/talent_pipeline/job_seeker.svg"
                    effect="blur"
                    alt="job seeker"
                  />
                </ScrollAnimation>
                <span>
                  Entry-level Construction and Maintenance Job Seekers
                </span>
              </Grid>
              <Grid item xs={12} md={4} className="talent-pipeline__role">
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <LazyLoadImage
                    scrollPosition={scrollPosition}
                    src="images/case_studies/talent_pipeline/employee_rep.svg"
                    effect="blur"
                    alt="employee rep"
                  />
                </ScrollAnimation>
                <span>
                  Employer Representatives <br /> (Recruiters)
                </span>
              </Grid>
              <Grid item xs={12} md={4} className="talent-pipeline__role">
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <LazyLoadImage
                    scrollPosition={scrollPosition}
                    src="images/case_studies/talent_pipeline/training_instructor.svg"
                    effect="blur"
                    alt="training instructor"
                  />
                </ScrollAnimation>
                <span>
                  Training Instructors <br /> (Case Managers)
                </span>
              </Grid>
            </Grid>
          </div>

          <div className="page-section" data-section-label="Personas">
            <Grid
              container
              rowGap={{ xs: 2, md: 0 }}
              spacing={{ xs: 0, md: 8 }}
              sx={{ mb: { xs: 4, md: 7 } }}
            >
              <Grid item xs={12} className="talent-pipeline__common-paragraph">
                <h2>Personas</h2>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="talent-pipeline__common-paragraph"
              >
                <span>
                  The marketing team conducted a focus group to gather specific
                  insights from the GenZ target audience, which were in the
                  process of completing their craft training high school
                  program.
                </span>
                <span>
                  These personas I’ve crafted were based on the results they’ve
                  accumulated.{' '}
                </span>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="talent-pipeline__common-paragraph"
              >
                <div>
                  <ScrollAnimation
                    animateOnce
                    animateIn="animate__fadeInUp"
                    animatePreScroll
                  >
                    <LazyLoadImage
                      scrollPosition={scrollPosition}
                      src="images/case_studies/talent_pipeline/personas_female.webp"
                      effect="blur"
                      alt="female persona"
                      width="100%"
                    />
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateOnce
                    animateIn="animate__fadeInUp"
                    animatePreScroll
                  >
                    <LazyLoadImage
                      scrollPosition={scrollPosition}
                      src="images/case_studies/talent_pipeline/personas_male.webp"
                      effect="blur"
                      alt="male persona"
                      width="100%"
                    />
                  </ScrollAnimation>
                </div>
              </Grid>
            </Grid>
            <ScrollAnimation
              animateOnce
              animateIn="animate__fadeInUp"
              animatePreScroll
            >
              <PersonasTabs />
            </ScrollAnimation>
          </div>

          <div className="page-section" data-section-label="Customer Journeys">
            <Grid
              container
              rowGap={{ xs: 2, md: 0 }}
              spacing={{ xs: 0, md: 3 }}
              sx={{ mb: { xs: 4, md: 7 } }}
            >
              <Grid item xs={12} className="talent-pipeline__common-paragraph">
                <h2>Customer Journeys</h2>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="talent-pipeline__common-paragraph"
              >
                <span>
                  These customer journeys were created to formulate a strong,
                  aligned vision with team members involved in this project.
                </span>
                <span>
                  This visually helped talking through the intentions of user
                  pathway for each user type. This helped build business and
                  user requirements.
                </span>
              </Grid>
            </Grid>
            <ScrollAnimation
              animateOnce
              animateIn="animate__fadeInUp"
              animatePreScroll
            >
              <CareerJourneyTabs />
            </ScrollAnimation>
          </div>

          <div className="page-section" data-section-label="User Stories">
            <Grid
              container
              rowGap={{ xs: 2, md: 0 }}
              rowSpacing={3}
              spacing={{ xs: 0, md: 8 }}
              sx={{ mb: { xs: 9, md: 15 } }}
            >
              <Grid item xs={12} className="talent-pipeline__common-paragraph">
                <h2>
                  A new structure of documenting user stories and user story
                  mapping
                </h2>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="talent-pipeline__common-paragraph"
              >
                <p>
                  Internal team members had trouble identifying what is the
                  Minimum Viable Product for post-launch.
                </p>
                <p>
                  What and which requirements, for each user role, is feasible
                  for development within the given time span?
                </p>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="talent-pipeline__common-paragraph"
              >
                <span>
                  Once team members understood the product’s target audience and
                  identified the customer experience, I created a set of user
                  stories for release 1.
                </span>
                <span>
                  The objective and goal was for internal and external teams to
                  understand the set of requirements, prioritize “must-haves”,
                  and estimate development implementation.
                </span>
              </Grid>
              <Grid item xs={12}>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  initiallyVisible
                >
                  <LazyLoadImage
                    scrollPosition={scrollPosition}
                    src="images/case_studies/talent_pipeline/user_stories.webp"
                    effect="blur"
                    alt="user stories"
                    width="100%"
                  />
                </ScrollAnimation>
              </Grid>
              <Grid item xs={12}>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  initiallyVisible
                >
                  <LazyLoadImage
                    scrollPosition={scrollPosition}
                    src="images/case_studies/talent_pipeline/user_story_mapping.webp"
                    effect="blur"
                    alt="user story mapping"
                    width="100%"
                  />
                </ScrollAnimation>
              </Grid>
            </Grid>
          </div>

          <div className="page-section" data-section-label="Design System">
            <Grid
              container
              rowGap={{ xs: 2, md: 0 }}
              spacing={{ xs: 0, md: 4 }}
              sx={{ mb: { xs: 9, md: 15 } }}
            >
              <Grid item xs={12} className="talent-pipeline__common-paragraph">
                <h2>
                  No design system in place?
                  <br /> Let me create one!
                </h2>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="talent-pipeline__common-paragraph"
                mb={6}
              >
                <span>
                  Although an existing product was built by the external team
                  members, we wanted to alter the UI based on the organization’s
                  existing brand.
                </span>
                <span>
                  This lead to my next initiative, which is to create the
                  product’s design system.
                </span>
              </Grid>
              <Grid item xs={12}>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  initiallyVisible
                >
                  {isMobile ? (
                    <LazyLoadImage
                      scrollPosition={scrollPosition}
                      src="images/case_studies/talent_pipeline/sample_design.webp"
                      effect="blur"
                      alt="sample design"
                      width="100%"
                    />
                  ) : (
                    <ScrollingContainer>
                      <LazyLoadImage
                        scrollPosition={scrollPosition}
                        src="images/case_studies/talent_pipeline/sample_design.webp"
                        effect="blur"
                        alt="sample design"
                        width="100%"
                      />
                    </ScrollingContainer>
                  )}
                </ScrollAnimation>
              </Grid>
            </Grid>
          </div>

          <div className="page-section" data-section-label="LP Analysis">
            <Grid
              container
              rowGap={{ xs: 1, md: 0 }}
              rowSpacing={{ xs: 0, md: 3 }}
              spacing={{ xs: 0, md: 8 }}
              sx={{ mb: { xs: 9, md: 22 } }}
            >
              <Grid item xs={12} className="talent-pipeline__common-paragraph">
                <h2>Full-time role lead to more responsibilities</h2>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="talent-pipeline__common-paragraph"
              >
                <p>
                  How and what type of message do we want to market out to our
                  target audiences about talent pipeline?
                </p>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                mb={4}
                className="talent-pipeline__common-paragraph"
              >
                <span>
                  The task was to create the product’s landing page for people
                  to learn more and create an account. The marketing team
                  thought the first draft did not convey the product’s intent
                  and appeal.
                </span>
                <span>
                  I created a strength and weakness analysis of several
                  competitor landing pages to present quick findings and
                  potential opportunities of how our product can insert itself
                  within the existing competition.
                </span>
              </Grid>
              <Grid item xs={12}>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  initiallyVisible
                >
                  <LazyLoadImage
                    scrollPosition={scrollPosition}
                    src="images/case_studies/talent_pipeline/strenghts.webp"
                    effect="blur"
                    alt="strenghts"
                    width="100%"
                  />
                </ScrollAnimation>
              </Grid>
              <Grid item xs={12}>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  initiallyVisible
                >
                  <LazyLoadImage
                    scrollPosition={scrollPosition}
                    src="images/case_studies/talent_pipeline/weaknesses.webp"
                    effect="blur"
                    alt="weaknesses"
                    width="100%"
                  />
                </ScrollAnimation>
              </Grid>
              <Grid item xs={12}>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  initiallyVisible
                >
                  <LazyLoadImage
                    scrollPosition={scrollPosition}
                    src="images/case_studies/talent_pipeline/opportunities.webp"
                    effect="blur"
                    alt="opportunities"
                    width="100%"
                  />
                </ScrollAnimation>
              </Grid>
            </Grid>
          </div>

          <div
            className="page-section"
            data-section-label="LP Whiteboard Session"
          >
            <Grid
              container
              rowGap={{ xs: 1, md: 0 }}
              rowSpacing={{ xs: 0, md: 3 }}
              spacing={{ xs: 0, md: 8 }}
              sx={{ mb: { xs: 9, md: 15 } }}
            >
              <Grid item xs={12} className="talent-pipeline__common-paragraph">
                <h2>Now what? Facilitate a UI white-boarding session!</h2>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="talent-pipeline__common-paragraph"
              >
                <p>
                  With all of these ideas in mind, how do we bring it all
                  together to shine light on the product’s features?
                </p>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="talent-pipeline__common-paragraph"
              >
                <span>
                  I scheduled a brainstorm workshop session with the marketing
                  team to collaborate on the messaging hierarchy and visual
                  layout.
                </span>
              </Grid>
              <Grid item xs={12}>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  initiallyVisible
                >
                  <LazyLoadImage
                    scrollPosition={scrollPosition}
                    src="images/case_studies/talent_pipeline/tp_landing_page.webp"
                    effect="blur"
                    alt="talent pipeline landing page"
                    width="100%"
                  />
                </ScrollAnimation>
              </Grid>
            </Grid>
          </div>

          <div className="page-section" data-section-label="LP Final Result">
            <Grid
              container
              rowGap={{ xs: 1, md: 0 }}
              rowSpacing={{ xs: 0, md: 3 }}
              spacing={{ xs: 0, md: 8 }}
              sx={{ mb: { xs: 9, md: 15 } }}
            >
              <Grid item xs={12} className="talent-pipeline__common-paragraph">
                <h2>Go back to the Figma board and show the final result</h2>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                mb={4}
                className="talent-pipeline__common-paragraph"
              >
                <span>
                  This landing page starts off with the main tag line then
                  entices the visitor to learn more about the product.
                </span>
                <span>
                  We wanted to showcase a visual indicator that people can
                  access the product using their phone or desktop.{' '}
                </span>
              </Grid>
              <Grid item xs={12}>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  initiallyVisible
                >
                  {isMobile ? (
                    <LazyLoadImage
                      scrollPosition={scrollPosition}
                      src="images/case_studies/talent_pipeline/tp_landing_page_scrolling.webp"
                      effect="blur"
                      alt="talent pipeline landing page"
                      width="100%"
                    />
                  ) : (
                    <ScrollingContainer>
                      <LazyLoadImage
                        scrollPosition={scrollPosition}
                        src="images/case_studies/talent_pipeline/tp_landing_page_scrolling.webp"
                        effect="blur"
                        alt="talent pipeline landing page"
                        width="100%"
                      />
                    </ScrollingContainer>
                  )}
                </ScrollAnimation>
              </Grid>
            </Grid>
          </div>

          <div
            className="page-section"
            data-section-label="Design // Dev Collaboration"
          >
            <Grid
              container
              rowGap={{ xs: 1, md: 0 }}
              rowSpacing={{ xs: 0, md: 3 }}
              spacing={{ xs: 0, md: 8 }}
              sx={{ mb: { xs: 14, md: 16 } }}
            >
              <Grid item xs={12} className="talent-pipeline__common-paragraph">
                <h2>Design // Development Collaboration</h2>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="talent-pipeline__common-paragraph"
              >
                <p>
                  On a 2-month span, we needed to meet the deadline of the soft
                  launch date and ship the platform to states: Texas and North
                  Carolina.
                </p>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="talent-pipeline__common-paragraph"
              >
                <span>
                  As a design team of one with the support of the Project
                  Manager, I created and designed a thorough web and mobile
                  style guide to ensure the UI and branding stays consistent
                  throughout the platform.
                </span>
                <span>
                  I also took on sole ownership and responsibility of creating
                  and managing the Jira boards so we have full transparency of
                  what each team worked on within each 2-week sprint.
                </span>
              </Grid>
            </Grid>
          </div>

          <NextCaseStudy
            csLink={CAREER_STARTER}
            csName="The Birth of Career Starter"
          />
        </>
      ) : null}
    </div>
  );
};

export default trackWindowScroll(TalentPipeline);
