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
  color: '#c95d63 !important',
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
            <CaseStudyCardMedia
              sx={{
                mb: { xs: 9, md: 15 },
                mt: { xs: 7, md: 15 },
              }}
              cardContent="My primary role started out as a Contractor UX/UI Designer for this project. I closely collaborated with various team members (internal and external) on a quest to understand, mold, and ship a product that caters to upcoming craft professionals."
              cardImageUrl="images/case_studies/evaluation_tool/product_roadmap.webp"
            />
          </div>

          <div className="page-section" data-section-label="The Objective">
            <Grid
              container
              rowGap={{ xs: 4, md: 0 }}
              spacing={{ xs: 0, md: 3 }}
              sx={{ mb: { xs: 4, md: 7 } }}
            >
              <Grid item xs={12} className="evaluation-tool__common-paragraph">
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <h2>The Objective</h2>
                </ScrollAnimation>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="evaluation-tool__common-paragraph"
              >
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <p>
                    The Performance Profiles and Verifications evaluation
                    process is conducted in paper format then they enter the
                    results through the system.
                  </p>
                </ScrollAnimation>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <p>
                    This allows them to submit trainee and craft professional
                    results to the organization.
                  </p>
                  <p>How might we have user’s submit evaluations online? </p>
                </ScrollAnimation>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="evaluation-tool__common-paragraph"
              >
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <span>
                    The LMS Testing Manager provided a brief project scope and
                    sent me user stories.
                  </span>
                </ScrollAnimation>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <span>
                    According to the user stories, Performance Profiles and
                    Verifications mostly have evaluation setup task actions, but
                    cater to two different case scenarios.
                  </span>
                </ScrollAnimation>
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
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <h2>
                    Create a user flow to connect the requirements together
                  </h2>
                </ScrollAnimation>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="evaluation-tool__common-paragraph"
              >
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <span>
                    By reading the user stories, I created a sitemap to showcase
                    the user’s pathway when they take action to each required
                    task.
                  </span>
                </ScrollAnimation>
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
                {userFlowIFrameLoading && <IFrameLoading />}
                <IFrameComponent
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FWRO5soZQcri1WG60vkEdYN%2FPP%252FPV-User-Flow%3Ft%3D26xxBvFmfGc9YbId-1"
                  title="User Flows"
                  isLoading={userFlowIFrameLoading}
                  setIsLoading={(loading) => setUserFlowIFrameLoading(loading)}
                />
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
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <h2>Initial Mockups</h2>
                </ScrollAnimation>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="evaluation-tool__common-paragraph"
              >
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <p>
                    As I was in the middle of designing the mockups for this
                    project, I’ve uncovered questions that required additional
                    discovery and research.
                  </p>
                </ScrollAnimation>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="evaluation-tool__common-paragraph"
              >
                <span>
                  <ul>
                    <ScrollAnimation
                      animateOnce
                      animateIn="animate__fadeInUp"
                      animatePreScroll
                    >
                      <li>
                        How will evaluators utilize this application within the
                        classroom? Within live job sites?
                      </li>
                    </ScrollAnimation>
                    <ScrollAnimation
                      animateOnce
                      animateIn="animate__fadeInUp"
                      animatePreScroll
                    >
                      <li>
                        Will administration provide devices to these evaluators?
                        If so, what devices are available?
                      </li>
                    </ScrollAnimation>
                    <ScrollAnimation
                      animateOnce
                      animateIn="animate__fadeInUp"
                      animatePreScroll
                    >
                      <li>
                        How many evaluations are going to be submitted each
                        week? A month?
                      </li>
                    </ScrollAnimation>
                    <ScrollAnimation
                      animateOnce
                      animateIn="animate__fadeInUp"
                      animatePreScroll
                    >
                      <li>
                        What is the current evaluation process for Performance
                        Profiles and Verifications?
                      </li>
                    </ScrollAnimation>
                  </ul>
                </span>
              </Grid>
              <Grid item xs={12}>
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
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <h2>Project Roadmap</h2>
                </ScrollAnimation>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="evaluation-tool__common-paragraph"
              >
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <p>
                    Primary Objective: <br /> In creating a project roadmap is
                    to inform leadership the UX &gt; UI &gt; handoff process.
                  </p>
                </ScrollAnimation>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="evaluation-tool__common-paragraph"
              >
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <span>
                    When a 15 year old organization is in the early stages of
                    transitioning to the digital product space, the constant
                    issue I have encountered is the lack of awareness to the
                    consultations of their new employees
                  </span>
                </ScrollAnimation>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <span>This was a career battle I was willing to take. </span>
                </ScrollAnimation>
              </Grid>
              <Grid item xs={12}>
                <LazyLoadImage
                  scrollPosition={scrollPosition}
                  src="images/case_studies/evaluation_tool/project_roadmap.png"
                  effect="blur"
                  alt="user flow"
                  width="100%"
                />
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
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <h2>Whiteboard Session</h2>
                </ScrollAnimation>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="evaluation-tool__common-paragraph"
              >
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <p>
                    One of the opportunities I wanted to do when I arrived in
                    the office is to present how white boarding sessions
                    typically work.
                  </p>
                </ScrollAnimation>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="evaluation-tool__common-paragraph"
              >
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <span className="font-family-black">Benefits:</span>
                </ScrollAnimation>
                <span>
                  <ul>
                    <ScrollAnimation
                      animateOnce
                      animateIn="animate__fadeInUp"
                      animatePreScroll
                    >
                      <li>
                        Team alignment in research process of the project.
                      </li>
                    </ScrollAnimation>
                    <ScrollAnimation
                      animateOnce
                      animateIn="animate__fadeInUp"
                      animatePreScroll
                    >
                      <li>
                        Focus on the conversations that pertain to the questions
                        being developed in the session.
                      </li>
                    </ScrollAnimation>
                    <ScrollAnimation
                      animateOnce
                      animateIn="animate__fadeInUp"
                      animatePreScroll
                    >
                      <li>
                        Placed customer satisfaction first alongside emphasizing
                        their concerns.
                      </li>
                    </ScrollAnimation>
                  </ul>
                </span>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <span className="font-family-black">Goals:</span>
                </ScrollAnimation>
                <span>
                  <ul>
                    <ScrollAnimation
                      animateOnce
                      animateIn="animate__fadeInUp"
                      animatePreScroll
                    >
                      <li>
                        Assist teammates to immerse themselves into thinking,
                        sharing and communicating their questions with one
                        another.
                      </li>
                    </ScrollAnimation>
                    <ScrollAnimation
                      animateOnce
                      animateIn="animate__fadeInUp"
                      animatePreScroll
                    >
                      <li>
                        Opportunity to obtain a broader scope of the problem
                        being investigated and aiming to solve.
                      </li>
                    </ScrollAnimation>
                  </ul>
                </span>
              </Grid>
              <Grid item xs={12}>
                <LazyLoadImage
                  scrollPosition={scrollPosition}
                  src="images/case_studies/evaluation_tool/whiteboard_session_1.webp"
                  effect="blur"
                  alt="user flow"
                  width="100%"
                />
              </Grid>
              <Grid item xs={12}>
                <LazyLoadImage
                  scrollPosition={scrollPosition}
                  src="images/case_studies/evaluation_tool/whiteboard_session_2.webp"
                  effect="blur"
                  alt="user flow"
                  width="100%"
                />
              </Grid>
              <Grid item xs={12}>
                <ImageCarousel
                  images={[
                    'images/case_studies/evaluation_tool/whiteboard_session_3.png',
                    'images/case_studies/evaluation_tool/whiteboard_session_4.png',
                  ]}
                />
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
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <h2>First UX/UI Team as Lead</h2>
                </ScrollAnimation>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="evaluation-tool__common-paragraph"
              >
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <p>
                    I’ve showcased my ability as a UX/UI Designer to a point
                    where my boss gave me the go ahead to create the first UX/UI
                    Design team within the organization.
                  </p>
                </ScrollAnimation>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="evaluation-tool__common-paragraph"
              >
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <span>
                    This was a great opportunity to create an extensive field
                    study with now the support of two UX/UI Designer, Christian
                    B and Nicole H.
                  </span>
                </ScrollAnimation>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <span>
                    This field studies plan is to educate the Director of
                    Workforce Development why our team want to reach out to
                    other National Center for Construction Education and
                    Research sponsor organizations.
                  </span>
                </ScrollAnimation>
              </Grid>
              <Grid item xs={12}>
                <LazyLoadImage
                  scrollPosition={scrollPosition}
                  src="images/case_studies/evaluation_tool/first_ux_ui_team_as_lead.png"
                  effect="blur"
                  alt="user flow"
                  width="100%"
                />
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
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <h2>Observations and Interviews</h2>
                </ScrollAnimation>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="evaluation-tool__common-paragraph"
              >
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <p>
                    I spent the middle of summer 2022 to conduct my first
                    in-person observations and interviews in Texas and
                    Louisiana.
                  </p>
                </ScrollAnimation>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="evaluation-tool__common-paragraph"
              >
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <span>
                    At this point of my UX/UI Design career I felt I needed to
                    take this great opportunity even though there are severe
                    trials and tribulations within the organization.
                  </span>
                </ScrollAnimation>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <span style={{ color: '#C95D63' }}>
                    When do UX/UI Designers get the opportunity to conduct field
                    studies and build a strong, concrete base of a foreseeable
                    powerful application tool?
                  </span>
                </ScrollAnimation>
              </Grid>
              <Grid item xs={12}>
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
                            'images/case_studies/evaluation_tool/observations_interviews_8_pv.webp',
                            'images/case_studies/evaluation_tool/observations_interviews_9_pv.webp',
                            'images/case_studies/evaluation_tool/observations_interviews_10_pv.webp',
                            'images/case_studies/evaluation_tool/observations_interviews_11_pv.webp',
                            'images/case_studies/evaluation_tool/observations_interviews_12_pv.webp',
                          ]}
                        />
                      ),
                    },
                  ]}
                />
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
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <h2>Synthesize and Analyze</h2>
                </ScrollAnimation>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="evaluation-tool__common-paragraph"
              >
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <p>
                    We dissected the gathered data and grouped them based on
                    emerging themes.
                  </p>
                </ScrollAnimation>
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
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <span>
                    Through this process, we were able to identify four elements
                    that we could then formulate insights from.
                  </span>
                </ScrollAnimation>
                <span>
                  <ul>
                    <ScrollAnimation
                      animateOnce
                      animateIn="animate__fadeInUp"
                      animatePreScroll
                    >
                      <li>Problems</li>
                    </ScrollAnimation>
                    <ScrollAnimation
                      animateOnce
                      animateIn="animate__fadeInUp"
                      animatePreScroll
                    >
                      <li>Solutions</li>
                    </ScrollAnimation>
                    <ScrollAnimation
                      animateOnce
                      animateIn="animate__fadeInUp"
                      animatePreScroll
                    >
                      <li>Users</li>
                    </ScrollAnimation>
                    <ScrollAnimation
                      animateOnce
                      animateIn="animate__fadeInUp"
                      animatePreScroll
                    >
                      <li>Goals</li>
                    </ScrollAnimation>
                  </ul>
                </span>
              </Grid>
              <Grid item xs={12} className="evaluation-tool__common-paragraph">
                {synthesizeIFrameLoading && <IFrameLoading />}
                <IFrameComponent
                  src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FxkjC1835vVJt4skj5MOrsC%2FPP-%2526-PV-Interviews---Affinity-Mapping%3Fnode-id%3D0%253A1%26t%3DhK4MPG4MrPEKdoMz-1"
                  title="Synthesize and Analyze"
                  isLoading={synthesizeIFrameLoading}
                  setIsLoading={(loading) =>
                    setSynthesizeIFrameLoading(loading)
                  }
                />
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
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <h2>Personas and Customer Journeys</h2>
                </ScrollAnimation>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="evaluation-tool__common-paragraph"
              >
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <p>
                    As part of crafting up an in-person 3-day design sprint, the
                    team created personas and customer journeys in continuation
                    to educate the organization about the UX/UI Design process.
                  </p>
                </ScrollAnimation>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="evaluation-tool__common-paragraph"
              >
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <span>
                    These personas and customer journeys are based off of the
                    data accumulated from the observations and interviews.
                  </span>
                </ScrollAnimation>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <span>
                    We wanted our team members to empathize and understand our
                    customers in order to make user centered decisions within
                    the products we plan to build.
                  </span>
                </ScrollAnimation>
              </Grid>
              <Grid item xs={12}>
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
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <h2>My First Design Sprint Facilitation</h2>
                </ScrollAnimation>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="evaluation-tool__common-paragraph"
              >
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <p>
                    I ended my Summer 2022 by crafting up an extensive 3-day
                    design sprint plan, presentation deck, and workshop
                    exercises.
                  </p>
                </ScrollAnimation>
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
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <span className="font-family-black">Key Takeaways:</span>
                </ScrollAnimation>
                <span>
                  <ul>
                    <ScrollAnimation
                      animateOnce
                      animateIn="animate__fadeInUp"
                      animatePreScroll
                    >
                      <li>
                        There is such a thing as “Improv Design Sprint” as you
                        uncover how each team member dynamically works together
                        and plan instantaneously based off of their behaviors.
                      </li>
                    </ScrollAnimation>
                    <ScrollAnimation
                      animateOnce
                      animateIn="animate__fadeInUp"
                      animatePreScroll
                    >
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
                            Ask me during the interview and I will expand on
                            this.
                          </span>
                        </div>
                      </li>
                    </ScrollAnimation>
                    <ScrollAnimation
                      animateOnce
                      animateIn="animate__fadeInUp"
                      animatePreScroll
                    >
                      <li>
                        Is it the Product Designers duty to identify the gaps
                        within the current business requirements? <br />
                        <br />I come to realize business and user requirements
                        work hand-in-hand.
                      </li>
                    </ScrollAnimation>
                  </ul>
                </span>
              </Grid>
              <Grid item xs={12}>
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
                />
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
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <h2>Cognitive Thoughts</h2>
                </ScrollAnimation>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="evaluation-tool__common-paragraph"
              >
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <p>
                    In the beginning stages of my career, I thrived for an
                    opportunity to conduct UX research because I believe in
                    validating our solutions based off of data.
                  </p>
                </ScrollAnimation>
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
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <span>
                    I have come to realize that not all organizations or
                    companies in the digital landscape respect UX/UI Design as
                    the core foundation of building a successful product.
                  </span>
                </ScrollAnimation>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <span>
                    Time and time again, we see products become massively
                    successful because the company molds the product based on
                    user wants and needs (take Apple as an example).
                  </span>
                </ScrollAnimation>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <span>
                    I do not know when that day will arrives for the
                    organization to realize there must be a product development
                    standardization process in order to build a successful
                    application for the customers.
                  </span>
                </ScrollAnimation>
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
