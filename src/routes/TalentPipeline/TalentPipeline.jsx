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
            <CaseStudyCardMedia
              sx={{ my: isMobile ? 9 : '148px' }}
              cardContent="My primary role started out as a Contractor UX/UI Designer for this
          project. I closely collaborated with various team members (internal
          and external) on a quest to understand, mold, and ship a product that
          caters to upcoming craft professionals."
              cardImageUrl="images/case_studies/talent_pipeline/byf_collaborations_roadmap.webp"
            />
          </div>

          <div className="page-section" data-section-label="Opportunity">
            <Grid
              container
              rowGap={{ xs: 4, md: 0 }}
              spacing={{ xs: 0, md: 8 }}
              sx={{ mb: { xs: 4, md: 5 } }}
            >
              <Grid
                item
                xs={12}
                md={6}
                className="talent-pipeline__common-paragraph"
              >
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll={false}
                >
                  <h2>Opportunity</h2>
                </ScrollAnimation>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll={false}
                  delay={500}
                  offset={0}
                >
                  <p>
                    Stakeholders discovered and researched an opportunity to
                    merge the gap between job seekers and recruiters with the
                    assistance of educators.
                  </p>
                </ScrollAnimation>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll={false}
                  delay={1000}
                  offset={-50}
                >
                  <p>
                    Build Your Future then built a partnership with Futures to
                    launch a product that assists to these three different user
                    types (see below).
                  </p>
                </ScrollAnimation>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="talent-pipeline__common-paragraph"
              >
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll={false}
                  delay={1500}
                >
                  <h2>Who are they?</h2>
                </ScrollAnimation>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll={false}
                  delay={2000}
                  offset={0}
                >
                  <p>
                    75% of Construction and Maintenance industry professionals
                    reported they proactively seek to build new talent, even if
                    talent is not currently needed.
                  </p>
                </ScrollAnimation>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll={false}
                  delay={2500}
                  offset={-50}
                >
                  <span>
                    The marketing team conducted focus groups of all 3 user
                    types.
                  </span>
                </ScrollAnimation>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll={false}
                  delay={3000}
                  offset={-100}
                >
                  <span>
                    As part of my onboarding process, I reviewed and compiled
                    their findings so I can initiate a persona white-boarding
                    session. Followed after was the creation of the requirement
                    gathering process.
                  </span>
                </ScrollAnimation>
              </Grid>
            </Grid>
            <Grid
              container
              rowGap={{ xs: 4, md: 0 }}
              spacing={{ xs: 0, md: 8 }}
              sx={{ mb: { xs: 9, md: '148px' } }}
            >
              <Grid item xs={12} md={4} className="talent-pipeline__role">
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  delay={3500}
                  offset={0}
                >
                  <LazyLoadImage
                    scrollPosition={scrollPosition}
                    src="images/case_studies/talent_pipeline/job_seeker.svg"
                    effect="blur"
                    alt="job seeker"
                  />
                  <span di>
                    Entry-level Construction and Maintenance Job Seekers
                  </span>
                </ScrollAnimation>
              </Grid>
              <Grid item xs={12} md={4} className="talent-pipeline__role">
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  delay={3500}
                  offset={0}
                >
                  <LazyLoadImage
                    scrollPosition={scrollPosition}
                    src="images/case_studies/talent_pipeline/employee_rep.svg"
                    effect="blur"
                    alt="employee rep"
                  />
                  <span>
                    Employer Representatives <br /> (Recruiters)
                  </span>
                </ScrollAnimation>
              </Grid>
              <Grid item xs={12} md={4} className="talent-pipeline__role">
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  delay={3500}
                  offset={0}
                >
                  <LazyLoadImage
                    scrollPosition={scrollPosition}
                    src="images/case_studies/talent_pipeline/training_instructor.svg"
                    effect="blur"
                    alt="training instructor"
                  />
                  <span>
                    Training Instructors <br /> (Case Managers)
                  </span>
                </ScrollAnimation>
              </Grid>
            </Grid>
          </div>

          <div className="page-section" data-section-label="Personas">
            <Grid
              container
              rowGap={{ xs: 0 }}
              spacing={{ xs: 2 }}
              sx={{ mb: { xs: 4, md: 5 } }}
            >
              <Grid item xs={12} className="talent-pipeline__common-paragraph">
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <h2>Personas</h2>
                </ScrollAnimation>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="talent-pipeline__common-paragraph"
              >
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  delay={500}
                  offset={100}
                >
                  <span>
                    The marketing team conducted a focus group to gather
                    specific insights from the GenZ target audience, which were
                    in the process of completing their craft training high
                    school program.
                  </span>
                </ScrollAnimation>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  delay={1000}
                  offset={50}
                >
                  <span>
                    These personas I’ve crafted were based on the results
                    they’ve accumulated.
                  </span>
                </ScrollAnimation>
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
                    delay={1500}
                  >
                    <LazyLoadImage
                      scrollPosition={scrollPosition}
                      src="images/case_studies/talent_pipeline/personas_female.webp"
                      effect="blur"
                      alt="female persona"
                      style={{ marginBottom: 10 }}
                      width="100%"
                    />
                  </ScrollAnimation>
                  <ScrollAnimation
                    animateOnce
                    animateIn="animate__fadeInUp"
                    animatePreScroll
                    delay={2000}
                    offset={-40}
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
            <Grid container sx={{ mb: { xs: 9, md: '148px' } }}>
              <Grid item xs={12}>
                <PersonasTabs />
              </Grid>
            </Grid>
          </div>

          <div className="page-section" data-section-label="Customer Journeys">
            <Grid
              container
              rowGap={{ xs: 0 }}
              spacing={{ xs: 2 }}
              sx={{ mb: { xs: 4, md: 5 } }}
            >
              <Grid item xs={12} className="talent-pipeline__common-paragraph">
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <h2>Customer Journeys</h2>
                </ScrollAnimation>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="talent-pipeline__common-paragraph"
              >
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <span>
                    These customer journeys were created to formulate a strong,
                    aligned vision with team members involved in this project.
                  </span>
                </ScrollAnimation>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <span>
                    This visually helped talking through the intentions of user
                    pathway for each user type. This helped build business and
                    user requirements.
                  </span>
                </ScrollAnimation>
              </Grid>
            </Grid>
            <Grid container sx={{ mb: { xs: 9, md: '148px' } }}>
              <Grid item xs={12}>
                <CareerJourneyTabs />
              </Grid>
            </Grid>
          </div>

          <div className="page-section" data-section-label="User Stories">
            <Grid
              container
              rowGap={{ xs: 3, md: 0 }}
              spacing={{ xs: 0, md: 2 }}
              sx={{ mb: { xs: 9, md: '148px' } }}
            >
              <Grid item xs={12} className="talent-pipeline__common-paragraph">
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <h2>
                    A new structure of documenting user stories and user story
                    mapping
                  </h2>
                </ScrollAnimation>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="talent-pipeline__common-paragraph"
              >
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  delay={500}
                  offset={100}
                >
                  <p>
                    Internal team members had trouble identifying what is the
                    Minimum Viable Product for post-launch.
                  </p>
                </ScrollAnimation>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  delay={1000}
                  offset={50}
                >
                  <p>
                    What and which requirements, for each user role, is feasible
                    for development within the given time span?
                  </p>
                </ScrollAnimation>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="talent-pipeline__common-paragraph"
              >
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  delay={1500}
                  offset={100}
                >
                  <span>
                    Once team members understood the product’s target audience
                    and identified the customer experience, I created a set of
                    user stories for release 1.
                  </span>
                </ScrollAnimation>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  delay={2000}
                  offset={50}
                >
                  <span>
                    The objective and goal was for internal and external teams
                    to understand the set of requirements, prioritize
                    “must-haves”, and estimate development implementation.
                  </span>
                </ScrollAnimation>
              </Grid>
              <Grid item xs={12} mt={3}>
                <LazyLoadImage
                  scrollPosition={scrollPosition}
                  src="images/case_studies/talent_pipeline/user_stories.png"
                  effect="blur"
                  alt="user stories"
                  width="100%"
                />
              </Grid>
              <Grid item xs={12}>
                <LazyLoadImage
                  scrollPosition={scrollPosition}
                  src="images/case_studies/talent_pipeline/user_story_mapping.png"
                  effect="blur"
                  alt="user story mapping"
                  width="100%"
                />
              </Grid>
            </Grid>
          </div>

          <div className="page-section" data-section-label="Design System">
            <Grid
              container
              rowGap={{ xs: 0 }}
              spacing={{ xs: 0, md: 2 }}
              sx={{ mb: { xs: 9, md: '148px' } }}
            >
              <Grid item xs={12} className="talent-pipeline__common-paragraph">
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <h2>
                    No design system in place?
                    <br /> Let me create one!
                  </h2>
                </ScrollAnimation>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="talent-pipeline__common-paragraph"
                mb={3}
              >
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <span>
                    Although an existing product was built by the external team
                    members, we wanted to alter the UI based on the
                    organization’s existing brand.
                  </span>
                </ScrollAnimation>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <span>
                    This lead to my next initiative, which is to create the
                    product’s design system.
                  </span>
                </ScrollAnimation>
              </Grid>
              <Grid item xs={12}>
                {isMobile ? (
                  <LazyLoadImage
                    scrollPosition={scrollPosition}
                    src="images/case_studies/talent_pipeline/sample_design.png"
                    effect="blur"
                    alt="sample design"
                    width="100%"
                  />
                ) : (
                  <ScrollingContainer>
                    <LazyLoadImage
                      scrollPosition={scrollPosition}
                      src="images/case_studies/talent_pipeline/sample_design.png"
                      effect="blur"
                      alt="sample design"
                      width="100%"
                    />
                  </ScrollingContainer>
                )}
              </Grid>
            </Grid>
          </div>

          <div className="page-section" data-section-label="LP Analysis">
            <Grid
              container
              rowGap={{ xs: 0 }}
              spacing={{ xs: 0, md: 2 }}
              sx={{ mb: { xs: 9, md: '148px' } }}
            >
              <Grid item xs={12} className="talent-pipeline__common-paragraph">
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <h2>Full-time role lead to more responsibilities</h2>
                </ScrollAnimation>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="talent-pipeline__common-paragraph"
              >
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  delay={500}
                  offset={100}
                >
                  <p>
                    How and what type of message do we want to market out to our
                    target audiences about talent pipeline?
                  </p>
                </ScrollAnimation>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                mb={{ xs: 2, md: 3 }}
                className="talent-pipeline__common-paragraph"
              >
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  delay={1000}
                  offset={100}
                >
                  <span>
                    The task was to create the product’s landing page for people
                    to learn more and create an account. The marketing team
                    thought the first draft did not convey the product’s intent
                    and appeal.
                  </span>
                </ScrollAnimation>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  delay={1500}
                  offset={50}
                >
                  <span>
                    I created a strength and weakness analysis of several
                    competitor landing pages to present quick findings and
                    potential opportunities of how our product can insert itself
                    within the existing competition.
                  </span>
                </ScrollAnimation>
              </Grid>
              <Grid item xs={12}>
                <LazyLoadImage
                  scrollPosition={scrollPosition}
                  src="images/case_studies/talent_pipeline/strenghts.png"
                  effect="blur"
                  alt="strenghts"
                  width="100%"
                />
              </Grid>
              <Grid item xs={12}>
                <LazyLoadImage
                  scrollPosition={scrollPosition}
                  src="images/case_studies/talent_pipeline/weaknesses.png"
                  effect="blur"
                  alt="weaknesses"
                  width="100%"
                />
              </Grid>
              <Grid item xs={12}>
                <LazyLoadImage
                  scrollPosition={scrollPosition}
                  src="images/case_studies/talent_pipeline/opportunities.png"
                  effect="blur"
                  alt="opportunities"
                  width="100%"
                />
              </Grid>
            </Grid>
          </div>

          <div
            className="page-section"
            data-section-label="LP Whiteboard Session"
          >
            <Grid
              container
              rowGap={{ xs: 0 }}
              spacing={{ xs: 0, md: 2 }}
              sx={{ mb: { xs: 9, md: '148px' } }}
            >
              <Grid item xs={12} className="talent-pipeline__common-paragraph">
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <h2>Now what? Facilitate a UI white-boarding session!</h2>
                </ScrollAnimation>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="talent-pipeline__common-paragraph"
              >
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  delay={500}
                  offset={100}
                >
                  <p>
                    With all of these ideas in mind, how do we bring it all
                    together to shine light on the product’s features?
                  </p>
                </ScrollAnimation>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="talent-pipeline__common-paragraph"
              >
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  delay={1000}
                  offset={100}
                >
                  <span>
                    I scheduled a brainstorm workshop session with the marketing
                    team to collaborate on the messaging hierarchy and visual
                    layout.
                  </span>
                </ScrollAnimation>
              </Grid>
              <Grid item xs={12} mt={{ xs: 2, md: 3 }}>
                <LazyLoadImage
                  scrollPosition={scrollPosition}
                  src="images/case_studies/talent_pipeline/tp_landing_page.png"
                  effect="blur"
                  alt="talent pipeline landing page"
                  width="100%"
                />
              </Grid>
            </Grid>
          </div>

          <div className="page-section" data-section-label="LP Final Result">
            <Grid
              container
              rowGap={{ xs: 0 }}
              spacing={{ xs: 0, md: 2 }}
              sx={{ mb: { xs: 9, md: '148px' } }}
            >
              <Grid item xs={12} className="talent-pipeline__common-paragraph">
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <h2>Go back to the Figma board and show the final result</h2>
                </ScrollAnimation>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                mb={{ xs: 2, md: 3 }}
                className="talent-pipeline__common-paragraph"
              >
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <span>
                    This landing page starts off with the main tag line then
                    entices the visitor to learn more about the product.
                  </span>
                </ScrollAnimation>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <span>
                    We wanted to showcase a visual indicator that people can
                    access the product using their phone or desktop.{' '}
                  </span>
                </ScrollAnimation>
              </Grid>
              <Grid item xs={12}>
                {isMobile ? (
                  <LazyLoadImage
                    scrollPosition={scrollPosition}
                    src="images/case_studies/talent_pipeline/tp_landing_page_scrolling.png"
                    effect="blur"
                    alt="talent pipeline landing page"
                    width="100%"
                  />
                ) : (
                  <ScrollingContainer>
                    <LazyLoadImage
                      scrollPosition={scrollPosition}
                      src="images/case_studies/talent_pipeline/tp_landing_page_scrolling.png"
                      effect="blur"
                      alt="talent pipeline landing page"
                      width="100%"
                    />
                  </ScrollingContainer>
                )}
              </Grid>
            </Grid>
          </div>

          <div
            className="page-section"
            data-section-label="Design // Dev Collaboration"
          >
            <Grid
              container
              rowGap={{ xs: 0 }}
              spacing={{ xs: 0, md: 2 }}
              sx={{ mb: { xs: 9, md: '148px' } }}
            >
              <Grid item xs={12} className="talent-pipeline__common-paragraph">
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <h2>Design // Development Collaboration</h2>
                </ScrollAnimation>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="talent-pipeline__common-paragraph"
              >
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  delay={500}
                  offset={100}
                >
                  <p>
                    On a 2-month span, we needed to meet the deadline of the
                    soft launch date and ship the platform to states: Texas and
                    North Carolina.
                  </p>
                </ScrollAnimation>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="talent-pipeline__common-paragraph"
              >
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  delay={1000}
                  offset={100}
                >
                  <span>
                    As a design team of one with the support of the Project
                    Manager, I created and designed a thorough web and mobile
                    style guide to ensure the UI and branding stays consistent
                    throughout the platform.
                  </span>
                </ScrollAnimation>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  delay={1500}
                  offset={50}
                >
                  <span>
                    I also took on sole ownership and responsibility of creating
                    and managing the Jira boards so we have full transparency of
                    what each team worked on within each 2-week sprint.
                  </span>
                </ScrollAnimation>
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
