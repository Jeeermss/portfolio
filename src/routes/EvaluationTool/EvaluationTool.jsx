import React, { useState } from 'react';
import { Grid, CircularProgress, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  LazyLoadImage,
  trackWindowScroll,
} from 'react-lazy-load-image-component';
import ScrollAnimation from 'react-animate-on-scroll';

import CaseStudyIntro from '../../components/CaseStudyIntro/CaseStudyIntro';
import NextCaseStudy from '../../components/NextCaseStudy/NextCaseStudy';
import PageRoadMap from '../../components/PageRoadMap/PageRoadMap';
import ScrollingContainer from '../../components/ScrollingContainer';
import CaseStudyCardMedia from '../../components/CaseStudyCardMedia/CaseStudyCardMedia';
import Tabs from '../../components/Tabs/Tabs';

import {
  summaryRoles,
  summary,
  problems,
  firstRowMembers,
  secondRowMembers,
  firstRowMembersTitle,
  secondRowMembersTitle,
} from '../../constants/evaluation-tool';
import { PROFILES_AND_VERIFICATIONS } from '../../constants/routes';
import './evaluation-tool.css';
import ImageCarousel from '../../components/ImageCarousel';

const iFrameLoadingStyle = {
  color: '#c95d63',
  my: 8,
};

const EvaluationTool = ({ scrollPosition }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [showMore, setShowMore] = useState(false);
  const [userFlowIFrameLoading, setUserFlowIFrameLoading] = useState(true);
  const [synthesizeIFrameLoading, setSynthesizeIFrameLoading] = useState(true);

  const IFrameLoading = () => {
    return (
      <div style={{ textAlign: 'center' }}>
        <CircularProgress sx={iFrameLoadingStyle} />
      </div>
    );
  };

  const IFrameComponent = React.memo(
    ({ src, title, isLoading, setIsLoading }) => {
      return (
        <iframe
          style={{
            border: '1px solid rgba(0, 0, 0, 0.1)',
            display: `${isLoading ? 'none' : 'block'}`,
          }}
          width="100%"
          height={isMobile ? '314px' : '720px'}
          src={src}
          allowFullScreen
          title={title}
          onLoad={() => setIsLoading(false)}
        ></iframe>
      );
    }
  );
  return (
    <div className="evaluation-tool">
      <PageRoadMap showMore={showMore} />

      <div className="page-section" data-section-label="Overview">
        <CaseStudyIntro
          pageTitle="In Need of an Evaluation Tool"
          summaryRoles={summaryRoles}
          summary={summary}
          problems={problems}
          firstRowMembers={firstRowMembers}
          secondRowMembers={secondRowMembers}
          firstRowMembersTitle={firstRowMembersTitle}
          secondRowMembersTitle={secondRowMembersTitle}
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
                sx={{
                  mb: { xs: 9, md: 15 },
                  mt: { xs: 7, md: 15 },
                }}
                cardContent="My primary role started out as a Contractor UX/UI Designer for this project. I closely collaborated with various team members (internal and external) on a quest to understand, mold, and ship a product that caters to upcoming craft professionals."
                cardImageUrl="images/case_studies/evaluation_tool/product_roadmap.webp"
              />
            </ScrollAnimation>
          </div>

          <div className="page-section" data-section-label="The Objective">
            <Grid
              container
              rowGap={{ xs: 4, md: 0 }}
              spacing={{ xs: 0, md: 3 }}
              sx={{ mb: { xs: 4, md: 7 } }}
            >
              <Grid item xs={12} className="evaluation-tool__common-paragraph">
                <h2>The Objective</h2>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="evaluation-tool__common-paragraph"
              >
                <p>
                  The Performance Profiles and Verifications evaluation process
                  is conducted in paper format then they enter the results
                  through the system.
                </p>
                <p>
                  This allows them to submit trainee and craft professional
                  results to the organization.
                </p>
                <p>How might we have user’s submit evaluations online? </p>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="evaluation-tool__common-paragraph"
              >
                <span>
                  The LMS Testing Manager provided a brief project scope and
                  sent me user stories.
                </span>
                <span>
                  According to the user stories, Performance Profiles and
                  Verifications mostly have evaluation setup task actions, but
                  cater to two different case scenarios.
                </span>
              </Grid>
            </Grid>
          </div>

          <div className="page-section" data-section-label="User Stories">
            <Grid
              container
              rowGap={{ xs: 4, md: 0 }}
              spacing={{ xs: 0, md: 3 }}
              sx={{ mb: { xs: 4, md: 15 } }}
            >
              <Grid item xs={12}>
                <ScrollingContainer
                  sx={{
                    maxHeight: { xs: '100%', md: 720 },
                    height: { xs: '100%', md: 720 },
                  }}
                >
                  <LazyLoadImage
                    scrollPosition={scrollPosition}
                    src="images/case_studies/evaluation_tool/user_stories_scrolling.png"
                    effect="blur"
                    alt="user stories scrolling"
                    width="100%"
                  />
                </ScrollingContainer>
              </Grid>
            </Grid>
          </div>

          <div className="page-section" data-section-label="User Flows">
            <Grid
              container
              rowGap={{ xs: 4, md: 0 }}
              spacing={{ xs: 0, md: 3 }}
              sx={{ mb: { xs: 4, md: 15 } }}
            >
              <Grid item xs={12} className="evaluation-tool__common-paragraph">
                <h2>Create a user flow to connect the requirements together</h2>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="evaluation-tool__common-paragraph"
              >
                <span>
                  By reading the user stories, I created a sitemap to showcase
                  the user’s pathway when they take action to each required
                  task.
                </span>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="evaluation-tool__common-paragraph"
                sx={{
                  position: 'relative',
                }}
              ></Grid>
              <Grid item xs={12}>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  {userFlowIFrameLoading && <IFrameLoading />}
                  <IFrameComponent
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FWRO5soZQcri1WG60vkEdYN%2FPP%252FPV-User-Flow%3Ft%3D26xxBvFmfGc9YbId-1"
                    title="User Flows"
                    isLoading={userFlowIFrameLoading}
                    setIsLoading={(loading) =>
                      setUserFlowIFrameLoading(loading)
                    }
                  />
                </ScrollAnimation>
              </Grid>
            </Grid>
          </div>

          <div className="page-section" data-section-label="Initial Mockups">
            <Grid
              container
              rowGap={{ xs: 4, md: 0 }}
              spacing={{ xs: 0, md: 3 }}
              sx={{ mb: { xs: 4, md: 15 } }}
            >
              <Grid item xs={12} className="evaluation-tool__common-paragraph">
                <h2>Initial Mockups</h2>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="evaluation-tool__common-paragraph"
              >
                <p>
                  As I was in the middle of designing the mockups for this
                  project, I’ve uncovered questions that required additional
                  discovery and research.
                </p>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="evaluation-tool__common-paragraph"
              >
                <span>
                  <ul>
                    <li>
                      How will evaluators utilize this application within the
                      classroom? Within live job sites?
                    </li>
                    <li>
                      Will administration provide devices to these evaluators?
                      If so, what devices are available?
                    </li>
                    <li>
                      How many evaluations are going to be submitted each week?
                      A month?
                    </li>
                    <li>
                      What is the current evaluation process for Performance
                      Profiles and Verifications?
                    </li>
                  </ul>
                </span>
              </Grid>
              <Grid item xs={12}>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <ImageCarousel
                    images={[
                      'images/case_studies/evaluation_tool/initial_mockups_1.webp',
                      'images/case_studies/evaluation_tool/initial_mockups_2.webp',
                      'images/case_studies/evaluation_tool/initial_mockups_3.webp',
                      'images/case_studies/evaluation_tool/initial_mockups_4.webp',
                      'images/case_studies/evaluation_tool/initial_mockups_5.webp',
                      'images/case_studies/evaluation_tool/initial_mockups_6.webp',
                      'images/case_studies/evaluation_tool/initial_mockups_7.webp',
                    ]}
                    toolbarImage="images/case_studies/evaluation_tool/chrome_toolbar.png"
                  />
                </ScrollAnimation>
              </Grid>
            </Grid>
          </div>

          <div className="page-section" data-section-label="Project Roadmap">
            <Grid
              container
              rowGap={{ xs: 4, md: 0 }}
              spacing={{ xs: 0, md: 3 }}
              sx={{ mb: { xs: 4, md: 15 } }}
            >
              <Grid item xs={12} className="evaluation-tool__common-paragraph">
                <h2>Project Roadmap</h2>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="evaluation-tool__common-paragraph"
              >
                <p>
                  Primary Objective: <br /> In creating a project roadmap is to
                  inform leadership the UX &gt; UI &gt; handoff process.
                </p>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="evaluation-tool__common-paragraph"
              >
                <span>
                  When a 15 year old organization is in the early stages of
                  transitioning to the digital product space, the constant issue
                  I have encountered is the lack of awareness to the
                  consultations of their new employees
                </span>
                <span>This was a career battle I was willing to take. </span>
              </Grid>
              <Grid item xs={12}>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <LazyLoadImage
                    scrollPosition={scrollPosition}
                    src="images/case_studies/evaluation_tool/project_roadmap.png"
                    effect="blur"
                    alt="user flow"
                    width="100%"
                  />
                </ScrollAnimation>
              </Grid>
            </Grid>
          </div>

          <div className="page-section" data-section-label="Whiteboard Session">
            <Grid
              container
              rowGap={{ xs: 4, md: 0 }}
              spacing={{ xs: 0, md: 3 }}
              sx={{ mb: { xs: 4, md: 15 } }}
            >
              <Grid item xs={12} className="evaluation-tool__common-paragraph">
                <h2>Whiteboard Session</h2>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="evaluation-tool__common-paragraph"
              >
                <p>
                  One of the opportunities I wanted to do when I arrived in the
                  office is to present how white boarding sessions typically
                  work.
                </p>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="evaluation-tool__common-paragraph"
              >
                <span className="font-family-black">Benefits:</span>
                <span>
                  <ul>
                    <li>Team alignment in research process of the project.</li>
                    <li>
                      Focus on the conversations that pertain to the questions
                      being developed in the session.
                    </li>
                    <li>
                      Placed customer satisfaction first alongside emphasizing
                      their concerns.
                    </li>
                  </ul>
                </span>
                <span className="font-family-black">Goals:</span>
                <span>
                  <ul>
                    <li>
                      Assist teammates to immerse themselves into thinking,
                      sharing and communicating their questions with one
                      another.
                    </li>
                    <li>
                      Opportunity to obtain a broader scope of the problem being
                      investigated and aiming to solve.
                    </li>
                  </ul>
                </span>
              </Grid>
              <Grid item xs={12}>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <LazyLoadImage
                    scrollPosition={scrollPosition}
                    src="images/case_studies/evaluation_tool/whiteboard_session_1.webp"
                    effect="blur"
                    alt="user flow"
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
                    src="images/case_studies/evaluation_tool/whiteboard_session_2.webp"
                    effect="blur"
                    alt="user flow"
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
                  <ImageCarousel
                    images={[
                      'images/case_studies/evaluation_tool/whiteboard_session_3.webp',
                      'images/case_studies/evaluation_tool/whiteboard_session_4.webp',
                    ]}
                  />
                </ScrollAnimation>
              </Grid>
            </Grid>
          </div>

          <div
            className="page-section"
            data-section-label="First UX/UI Team as Lead"
          >
            <Grid
              container
              rowGap={{ xs: 4, md: 0 }}
              spacing={{ xs: 0, md: 3 }}
              sx={{ mb: { xs: 4, md: 15 } }}
            >
              <Grid item xs={12} className="evaluation-tool__common-paragraph">
                <h2>First UX/UI Team as Lead</h2>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="evaluation-tool__common-paragraph"
              >
                <p>
                  I’ve showcased my ability as a UX/UI Designer to a point where
                  my boss gave me the go ahead to create the first UX/UI Design
                  team within the organization.
                </p>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="evaluation-tool__common-paragraph"
              >
                <span>
                  This was a great opportunity to create an extensive field
                  study with now the support of two UX/UI Designer, Christian B
                  and Nicole H.
                </span>
                <span>
                  This field studies plan is to educate the Director of
                  Workforce Development why our team want to reach out to other
                  National Center for Construction Education and Research
                  sponsor organizations.
                </span>
              </Grid>
              <Grid item xs={12}>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <LazyLoadImage
                    scrollPosition={scrollPosition}
                    src="images/case_studies/evaluation_tool/first_ux_ui_team_as_lead.png"
                    effect="blur"
                    alt="user flow"
                    width="100%"
                  />
                </ScrollAnimation>
              </Grid>
            </Grid>
          </div>

          <div
            className="page-section"
            data-section-label="Observations and Interviews"
          >
            <Grid
              container
              rowGap={{ xs: 4, md: 0 }}
              spacing={{ xs: 0, md: 3 }}
              sx={{ mb: { xs: 4, md: 15 } }}
            >
              <Grid item xs={12} className="evaluation-tool__common-paragraph">
                <h2>Observations and Interviews</h2>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="evaluation-tool__common-paragraph"
              >
                <p>
                  I spent the middle of summer 2022 to conduct my first
                  in-person observations and interviews in Texas and Louisiana.
                </p>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="evaluation-tool__common-paragraph"
              >
                <span>
                  At this point of my UX/UI Design career I felt I needed to
                  take this great opportunity even though there are severe
                  trials and tribulations within the organization.
                </span>
                <span style={{ color: '#C95D63' }}>
                  When do UX/UI Designers get the opportunity to conduct field
                  studies and build a strong, concrete base of a foreseeable
                  powerful application tool?
                </span>
              </Grid>
              <Grid item xs={12}>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <Tabs
                    activeTab={0}
                    tabsData={[
                      {
                        name: 'Performance Profiles',
                        content: (
                          <ImageCarousel
                            images={[
                              'images/case_studies/evaluation_tool/observations_interviews_1_pp.webp',
                              'images/case_studies/evaluation_tool/observations_interviews_2_pp.webp',
                              'images/case_studies/evaluation_tool/observations_interviews_3_pp.webp',
                              'images/case_studies/evaluation_tool/observations_interviews_4_pp.webp',
                              'images/case_studies/evaluation_tool/observations_interviews_5_pp.webp',
                              'images/case_studies/evaluation_tool/observations_interviews_6_pp.webp',
                              'images/case_studies/evaluation_tool/observations_interviews_7_pp.webp',
                              'images/case_studies/evaluation_tool/observations_interviews_8_pp.webp',
                            ]}
                            scrollingMaxHeight={550}
                          />
                        ),
                      },
                      {
                        name: 'Performance Verifications',
                        content: (
                          <ImageCarousel
                            images={[
                              'images/case_studies/evaluation_tool/observations_interviews_1_pv.webp',
                              'images/case_studies/evaluation_tool/observations_interviews_2_pv.webp',
                              'images/case_studies/evaluation_tool/observations_interviews_3_pv.webp',
                              'images/case_studies/evaluation_tool/observations_interviews_4_pv.webp',
                              'images/case_studies/evaluation_tool/observations_interviews_5_pv.webp',
                              'images/case_studies/evaluation_tool/observations_interviews_6_pv.webp',
                              'images/case_studies/evaluation_tool/observations_interviews_7_pv.webp',
                            ]}
                            scrollingMaxHeight={550}
                          />
                        ),
                      },
                    ]}
                  />
                </ScrollAnimation>
              </Grid>
            </Grid>
          </div>

          <div
            className="page-section"
            data-section-label="Synthesize and Analyze"
          >
            <Grid
              container
              rowGap={{ xs: 4, md: 0 }}
              spacing={{ xs: 0, md: 3 }}
              sx={{ mb: { xs: 4, md: 15 } }}
            >
              <Grid item xs={12} className="evaluation-tool__common-paragraph">
                <h2>Synthesize and Analyze</h2>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="evaluation-tool__common-paragraph"
              >
                <p>
                  We dissected the gathered data and grouped them based on
                  emerging themes.
                </p>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="evaluation-tool__common-paragraph"
                sx={{
                  position: 'relative',
                }}
              >
                <span>
                  Through this process, we were able to identify four elements
                  that we could then formulate insights from.
                </span>
                <span>
                  <ul>
                    <li>Problems</li>
                    <li>Solutions</li>
                    <li>Users</li>
                    <li>Goals</li>
                  </ul>
                </span>
              </Grid>
              <Grid item xs={12} className="evaluation-tool__common-paragraph">
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  {synthesizeIFrameLoading && <IFrameLoading />}
                  <IFrameComponent
                    src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FxkjC1835vVJt4skj5MOrsC%2FPP-%2526-PV-Interviews---Affinity-Mapping%3Fnode-id%3D0%253A1%26t%3DhK4MPG4MrPEKdoMz-1"
                    title="Synthesize and Analyze"
                    isLoading={synthesizeIFrameLoading}
                    setIsLoading={(loading) =>
                      setSynthesizeIFrameLoading(loading)
                    }
                  />
                </ScrollAnimation>
              </Grid>
            </Grid>
          </div>

          <div
            className="page-section"
            data-section-label="Personas and Customer Journeys"
          >
            <Grid
              container
              rowGap={{ xs: 4, md: 0 }}
              spacing={{ xs: 0, md: 3 }}
              sx={{ mb: { xs: 4, md: 15 } }}
            >
              <Grid item xs={12} className="evaluation-tool__common-paragraph">
                <h2>Personas and Customer Journeys</h2>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="evaluation-tool__common-paragraph"
              >
                <p>
                  As part of crafting up an in-person 3-day design sprint, the
                  team created personas and customer journeys in continuation to
                  educate the organization about the UX/UI Design process.
                </p>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="evaluation-tool__common-paragraph"
              >
                <span>
                  These personas and customer journeys are based off of the data
                  accumulated from the observations and interviews.
                </span>
                <span>
                  We wanted our team members to empathize and understand our
                  customers in order to make user centered decisions within the
                  products we plan to build.
                </span>
              </Grid>
              <Grid item xs={12}>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <Tabs
                    activeTab={0}
                    tabsData={[
                      {
                        name: 'Performance Profiles',
                        content: (
                          <ImageCarousel
                            images={[
                              'images/case_studies/evaluation_tool/personas_customer_journeys_1_pp.webp',
                              'images/case_studies/evaluation_tool/personas_customer_journeys_2_pp.webp',
                              'images/case_studies/evaluation_tool/personas_customer_journeys_3_pp.webp',
                              'images/case_studies/evaluation_tool/personas_customer_journeys_4_pp.webp',
                              'images/case_studies/evaluation_tool/personas_customer_journeys_5_pp.webp',
                            ]}
                          />
                        ),
                      },
                      {
                        name: 'Performance Verifications',
                        content: (
                          <ImageCarousel
                            images={[
                              'images/case_studies/evaluation_tool/personas_customer_journeys_1_pv.webp',
                              'images/case_studies/evaluation_tool/personas_customer_journeys_2_pv.webp',
                              'images/case_studies/evaluation_tool/personas_customer_journeys_3_pv.webp',
                              'images/case_studies/evaluation_tool/personas_customer_journeys_4_pv.webp',
                              'images/case_studies/evaluation_tool/personas_customer_journeys_5_pv.webp',
                              'images/case_studies/evaluation_tool/personas_customer_journeys_6_pv.webp',
                            ]}
                          />
                        ),
                      },
                    ]}
                  />
                </ScrollAnimation>
              </Grid>
            </Grid>
          </div>

          <div className="page-section" data-section-label="Design Sprint">
            <Grid
              container
              rowGap={{ xs: 4, md: 0 }}
              spacing={{ xs: 0, md: 3 }}
              sx={{ mb: { xs: 4, md: 15 } }}
            >
              <Grid item xs={12} className="evaluation-tool__common-paragraph">
                <h2>My First Design Sprint Facilitation</h2>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="evaluation-tool__common-paragraph"
              >
                <p>
                  I ended my Summer 2022 by crafting up an extensive 3-day
                  design sprint plan, presentation deck, and workshop exercises.
                </p>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="evaluation-tool__common-paragraph"
                sx={{
                  position: 'relative',
                }}
              >
                <span className="font-family-black">Key Takeaways:</span>
                <span>
                  <ul>
                    <li>
                      There is such a thing as “Improv Design Sprint” as you
                      uncover how each team member dynamically works together
                      and plan instantaneously based off of their behaviors.
                    </li>
                    <li>
                      <div>
                        If they do not want to do it themselves in smaller
                        groups, you have to take action and visualize ideas
                        yourself in one large big group.*
                        <br />
                        <span
                          style={{
                            fontSize: '16px',
                            color: '#808080',
                            lineHeight: '19px',
                            display: 'flex',
                            marginTop: '16px',
                          }}
                        >
                          *Note - <br />
                          Ask me during the interview and I will expand on this.
                        </span>
                      </div>
                    </li>
                    <li>
                      Is it the Product Designers duty to identify the gaps
                      within the current business requirements? <br />
                      <br />I come to realize business and user requirements
                      work hand-in-hand.
                    </li>
                  </ul>
                </span>
              </Grid>
              <Grid item xs={12}>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <ImageCarousel
                    images={[
                      'images/case_studies/evaluation_tool/first_design_sprint_facilitation_1.webp',
                      'images/case_studies/evaluation_tool/first_design_sprint_facilitation_2.webp',
                      'images/case_studies/evaluation_tool/first_design_sprint_facilitation_3.webp',
                      'images/case_studies/evaluation_tool/first_design_sprint_facilitation_4.webp',
                      'images/case_studies/evaluation_tool/first_design_sprint_facilitation_5.webp',
                      'images/case_studies/evaluation_tool/first_design_sprint_facilitation_6.webp',
                      'images/case_studies/evaluation_tool/first_design_sprint_facilitation_7.webp',
                      'images/case_studies/evaluation_tool/first_design_sprint_facilitation_8.webp',
                      'images/case_studies/evaluation_tool/first_design_sprint_facilitation_9.webp',
                      'images/case_studies/evaluation_tool/first_design_sprint_facilitation_10.webp',
                      'images/case_studies/evaluation_tool/first_design_sprint_facilitation_11.webp',
                    ]}
                    scrollingMaxHeight={600}
                  />
                </ScrollAnimation>
              </Grid>
            </Grid>
          </div>

          <div className="page-section" data-section-label="Cogitated Thoughts">
            <Grid
              container
              rowGap={{ xs: 4, md: 0 }}
              spacing={{ xs: 0, md: 3 }}
              sx={{ mb: { xs: 9, md: 15 } }}
            >
              <Grid item xs={12} className="evaluation-tool__common-paragraph">
                <h2>Cognitive Thoughts</h2>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="evaluation-tool__common-paragraph"
              >
                <p>
                  In the beginning stages of my career, I thrived for an
                  opportunity to conduct UX research because I believe in
                  validating our solutions based off of data.
                </p>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="evaluation-tool__common-paragraph"
                sx={{
                  position: 'relative',
                }}
              >
                <span>
                  I have come to realize that not all organizations or companies
                  in the digital landscape respect UX/UI Design as the core
                  foundation of building a successful product.
                </span>
                <span>
                  Time and time again, we see products become massively
                  successful because the company molds the product based on user
                  wants and needs (take Apple as an example).
                </span>
                <span>
                  I do not know when that day will arrives for the organization
                  to realize there must be a product development standardization
                  process in order to build a successful application for the
                  customers.
                </span>
              </Grid>
            </Grid>
          </div>

          <NextCaseStudy
            csLink={PROFILES_AND_VERIFICATIONS}
            csName="Performance Profiles and Verifications"
          />
        </>
      ) : null}
    </div>
  );
};

export default trackWindowScroll(EvaluationTool);
