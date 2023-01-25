import { useState } from 'react';
import { Grid } from '@mui/material';
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

const EvaluationTool = ({ scrollPosition }) => {
  const [observationsInterviewsActiveTab, setObservationsInterviewsActiveTab] =
    useState(0);

  return (
    <div className="evaluation-tool">
      <PageRoadMap />

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

      <div className="page-section" data-section-label="Roadmap">
        <CaseStudyCardMedia
          sx={{ my: 14 }}
          cardContent="My primary role started out as a Contractor UX/UI Designer for this project. I closely collaborated with various team members (internal and external) on a quest to understand, mold, and ship a product that caters to upcoming craft professionals."
          cardImageUrl="images/case_studies/evaluation_tool/product_roadmap.svg"
        />
      </div>

      <div className="page-section" data-section-label="The Objective">
        <Grid
          container
          rowGap={{ xs: 7, md: 0 }}
          spacing={{ xs: 0, md: 7 }}
          sx={{ mb: 7 }}
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
              The Performance Profiles and Verifications evaluation process is
              conducted in paper format then they enter the results through the
              system.
            </p>
            <p>
              This allows them to submit trainee and craft professional results
              to the organization.
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
              The LMS Testing Manager provided a brief project scope and sent me
              user stories.
            </span>
            <span>
              According to the user stories, Performance Profiles and
              Verifications mostly have evaluation setup task actions, but cater
              to two different case scenarios.
            </span>
          </Grid>
        </Grid>
      </div>

      <div className="page-section" data-section-label="User Stories">
        <Grid
          container
          rowGap={{ xs: 7, md: 0 }}
          spacing={{ xs: 0, md: 7 }}
          sx={{ mb: 15 }}
        >
          <Grid item xs={12}>
            <ScrollAnimation
              animateOnce
              animateIn="animate__pulse"
              initiallyVisible
            >
              <ScrollingContainer>
                <LazyLoadImage
                  scrollPosition={scrollPosition}
                  src="images/case_studies/evaluation_tool/user_stories_scrolling.svg"
                  effect="blur"
                  alt="user stories scrolling"
                  width="100%"
                />
              </ScrollingContainer>
            </ScrollAnimation>
          </Grid>
        </Grid>
      </div>

      <div className="page-section" data-section-label="User Flows">
        <Grid
          container
          rowGap={{ xs: 7, md: 0 }}
          spacing={{ xs: 0, md: 7 }}
          sx={{ mb: 15 }}
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
              By reading the user stories, I created a sitemap to showcase the
              user’s pathway when they take action to each required task.
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
          >
            <button className="evaluation-tool__open-in-figma">
              <img src="images/eye_icon.svg" alt="eye icon" />
              User flow on Figma
            </button>
          </Grid>
          <Grid item xs={12}>
            <ScrollAnimation animateOnce animateIn="animate__pulse">
              <LazyLoadImage
                scrollPosition={scrollPosition}
                src="images/case_studies/evaluation_tool/user_flow.svg"
                effect="blur"
                alt="user flow"
                width="100%"
              />
            </ScrollAnimation>
          </Grid>
        </Grid>
      </div>

      <div className="page-section" data-section-label="Initial Mockups">
        <Grid
          container
          rowGap={{ xs: 7, md: 0 }}
          spacing={{ xs: 0, md: 7 }}
          sx={{ mb: 15 }}
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
              As I was in the middle of designing the mockups for this project,
              I’ve uncovered questions that required additional discovery and
              research.
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
                  Will administration provide devices to these evaluators? If
                  so, what devices are available?
                </li>
                <li>
                  How many evaluations are going to be submitted each week? A
                  month?
                </li>
                <li>
                  What is the current evaluation process for Performance
                  Profiles and Verifications?
                </li>
              </ul>
            </span>
          </Grid>
          <Grid item xs={12}>
            <ImageCarousel
              images={[
                'images/case_studies/evaluation_tool/initial_mockups_1.svg',
                'images/case_studies/evaluation_tool/user_flow.svg',
                'images/case_studies/evaluation_tool/initial_mockups_1.svg',
              ]}
            />
          </Grid>
        </Grid>
      </div>

      <div className="page-section" data-section-label="Project Roadmap">
        <Grid
          container
          rowGap={{ xs: 7, md: 0 }}
          spacing={{ xs: 0, md: 7 }}
          sx={{ mb: 15 }}
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
              transitioning to the digital product space, the constant issue I
              have encountered is the lack of awareness to the consultations of
              their new employees
            </span>
            <span>This was a career battle I was willing to take. </span>
          </Grid>
          <Grid item xs={12}>
            <ScrollAnimation animateOnce animateIn="animate__pulse">
              <LazyLoadImage
                scrollPosition={scrollPosition}
                src="images/case_studies/evaluation_tool/project_roadmap.svg"
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
          rowGap={{ xs: 7, md: 0 }}
          spacing={{ xs: 0, md: 7 }}
          sx={{ mb: 15 }}
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
              office is to present how white boarding sessions typically work.
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
                  Focus on the conversations that pertain to the questions being
                  developed in the session.
                </li>
                <li>
                  Placed customer satisfaction first alongside emphasizing their
                  concerns.
                </li>
              </ul>
            </span>
            <span className="font-family-black">Goals:</span>
            <span>
              <ul>
                <li>
                  Assist teammates to immerse themselves into thinking, sharing
                  and communicating their questions with one another.
                </li>
                <li>
                  Opportunity to obtain a broader scope of the problem being
                  investigated and aiming to solve.
                </li>
              </ul>
            </span>
          </Grid>
          <Grid item xs={12}>
            <ScrollAnimation animateOnce animateIn="animate__pulse">
              <LazyLoadImage
                scrollPosition={scrollPosition}
                src="images/case_studies/evaluation_tool/whiteboard_session_1.svg"
                effect="blur"
                alt="user flow"
                width="100%"
              />
            </ScrollAnimation>
          </Grid>
          <Grid item xs={12}>
            <ScrollAnimation animateOnce animateIn="animate__pulse">
              <LazyLoadImage
                scrollPosition={scrollPosition}
                src="images/case_studies/evaluation_tool/whiteboard_session_2.svg"
                effect="blur"
                alt="user flow"
                width="100%"
              />
            </ScrollAnimation>
          </Grid>
          <Grid item xs={12}>
            <ImageCarousel
              images={[
                'images/case_studies/evaluation_tool/whiteboard_session_3.svg',
                'images/case_studies/evaluation_tool/whiteboard_session_4.svg',
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
          rowGap={{ xs: 7, md: 0 }}
          spacing={{ xs: 0, md: 7 }}
          sx={{ mb: 15 }}
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
              I’ve showcased my ability as a UX/UI Designer to a point where my
              boss gave me the go ahead to create the first UX/UI Design team
              within the organization.
            </p>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className="evaluation-tool__common-paragraph"
          >
            <span>
              This was a great opportunity to create an extensive field study
              with now the support of two UX/UI Designer, Christian B and Nicole
              H.
            </span>
            <span>
              This field studies plan is to educate the Director of Workforce
              Development why our team want to reach out to other National
              Center for Construction Education and Research sponsor
              organizations.
            </span>
          </Grid>
          <Grid item xs={12}>
            <ScrollAnimation animateOnce animateIn="animate__pulse">
              <LazyLoadImage
                scrollPosition={scrollPosition}
                src="images/case_studies/evaluation_tool/first_ux_ui_team_as_lead.svg"
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
          rowGap={{ xs: 7, md: 0 }}
          spacing={{ xs: 0, md: 7 }}
          sx={{ mb: 15 }}
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
              I spent the middle of summer 2022 to conduct my first in-person
              observations and interviews in Texas and Louisiana.
            </p>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className="evaluation-tool__common-paragraph"
          >
            <span>
              At this point of my UX/UI Design career I felt I needed to take
              this great opportunity even though there are severe trials and
              tribulations within the organization.
            </span>
            <span style={{ color: '#C95D63' }}>
              When do UX/UI Designers get the opportunity to conduct field
              studies and build a strong, concrete base of a foreseeable
              powerful application tool?
            </span>
          </Grid>
          <Grid item xs={12}>
            <ScrollAnimation animateOnce animateIn="animate__pulse">
              <Tabs
                activeTab={observationsInterviewsActiveTab}
                setActiveTab={(tabIndex) =>
                  setObservationsInterviewsActiveTab(tabIndex)
                }
                tabsData={[
                  {
                    name: 'Performance Profiles',
                    content: (
                      <ImageCarousel
                        images={[
                          'images/case_studies/evaluation_tool/observations_interviews_1.svg',
                          'images/case_studies/evaluation_tool/observations_interviews_2.svg',
                        ]}
                      />
                    ),
                  },
                  {
                    name: 'Performance Verifications',
                    content: (
                      <ImageCarousel
                        images={[
                          'images/case_studies/evaluation_tool/observations_interviews_1.svg',
                          'images/case_studies/evaluation_tool/observations_interviews_2.svg',
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

      <NextCaseStudy
        csLink={PROFILES_AND_VERIFICATIONS}
        csName="Performance Profiles and Verifications"
      />
    </div>
  );
};

export default trackWindowScroll(EvaluationTool);
