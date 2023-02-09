import React, { useState } from 'react';
import { Grid, CircularProgress, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { trackWindowScroll } from 'react-lazy-load-image-component';
import ScrollAnimation from 'react-animate-on-scroll';

import CaseStudyIntro from '../../components/CaseStudyIntro/CaseStudyIntro';
import NextCaseStudy from '../../components/NextCaseStudy/NextCaseStudy';
import PageRoadMap from '../../components/PageRoadMap/PageRoadMap';
import Tabs from '../../components/Tabs/Tabs';
import ImageCarousel from '../../components/ImageCarousel';
import CaseStudyCardCarousel from '../../components/CaseStudyCardCarousel/CaseStudyCardCarousel';

import {
  summaryRoles,
  summary,
  problems,
  firstRowMembers,
  secondRowMembers,
  firstRowMembersTitle,
  secondRowMembersTitle,
} from '../../constants/profiles-and-verifications';
import { TALENT_PIPELINE } from '../../constants/routes';
import './profiles-and-verifications.css';
import CaseStudyCardVideo from '../../components/CaseStudyCardVideo/CaseStudyCardVIdeo';

const iFrameLoadingStyle = {
  color: '#c95d63',
  my: 3,
};

const ProfilesAndVerifications = ({ scrollPosition }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [showMore, setShowMore] = useState(false);
  const [userTestingIFrameLoading, setUserTestingIFrameLoading] =
    useState(true);

  const IFrameLoading = () => {
    return (
      <div style={{ textAlign: 'center' }}>
        <CircularProgress sx={iFrameLoadingStyle} />
      </div>
    );
  };

  const UserTestingIFrame = React.memo(({ src, title }) => {
    return (
      <iframe
        style={{
          border: '1px solid rgba(0, 0, 0, 0.1)',
          display: `${userTestingIFrameLoading ? 'none' : 'block'}`,
        }}
        width="100%"
        height={isMobile ? '314px' : '720px'}
        src={src}
        allowFullScreen
        title={title}
        onLoad={() => setUserTestingIFrameLoading(false)}
      ></iframe>
    );
  });

  return (
    <div className="profiles-and-verifications">
      <PageRoadMap showMore={showMore} />

      <div className="page-section" data-section-label="Overview">
        <CaseStudyIntro
          pageTitle="Performance Profiles & Verifications"
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
          <div
            className="page-section"
            data-section-label="User Testing: In Progress"
          >
            <Grid
              container
              rowGap={{ xs: 4, md: 0 }}
              spacing={{ xs: 0, md: 3 }}
              sx={{ mb: { xs: 9, md: 15 }, mt: { xs: 7, md: 15 } }}
            >
              <Grid
                item
                xs={12}
                className="profiles-and-verifications__common-paragraph"
              >
                <h2>User Testing: In Progress</h2>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="profiles-and-verifications__common-paragraph"
              >
                <p>
                  Objectives:
                  <br />
                  Internal teams to observe in-person user testing to gain
                  insight and watch how participants think and do in real time.
                </p>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="profiles-and-verifications__common-paragraph"
              >
                <span>
                  During the in-person user testing sessions, we only have the
                  opportunity we have uncovered a spectrum of user emotions,
                  behaviors, expectations to the conceptual application.
                </span>
                <span>
                  Our team needed to avoid biases and not add it to our pool of
                  data.
                </span>
                <span>
                  We continued to conduct user testing where we had a total of
                  10 participants (5 for performance profiles, 5 for performance
                  verifications).
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
                          <>
                            {userTestingIFrameLoading && <IFrameLoading />}
                            <UserTestingIFrame
                              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fr6rp9K5m2CNORBlxdKhxZV%2FWorkshop-User-Test_07_21%3Fnode-id%3D2%253A2%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D2%253A2%26show-proto-sidebar%3D1"
                              title="User Testing Performance Profiles"
                            />
                          </>
                        ),
                      },
                      {
                        name: 'Performance Verifications',
                        content: (
                          <>
                            {userTestingIFrameLoading && <IFrameLoading />}
                            <UserTestingIFrame
                              src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fr6rp9K5m2CNORBlxdKhxZV%2FWorkshop-User-Test_07_21%3Fnode-id%3D17%253A2461%26scaling%3Dscale-down%26page-id%3D0%253A1%26starting-point-node-id%3D17%253A2461"
                              title="User Testing Performance Verifications"
                            />
                          </>
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
            data-section-label="User Testing Report"
          >
            <Grid
              container
              rowGap={{ xs: 4, md: 0 }}
              spacing={{ xs: 0, md: 3 }}
              sx={{ mb: { xs: 4, md: 15 } }}
            >
              <Grid
                item
                xs={12}
                className="profiles-and-verifications__common-paragraph"
              >
                <h2>Generate a User Testing Report</h2>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="profiles-and-verifications__common-paragraph"
              >
                <p>
                  The intent was to showcase the metrics, major findings, and
                  recommendations to approve and confirm requirements.
                </p>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="profiles-and-verifications__common-paragraph"
              >
                <span>
                  We concluded the report with next action steps, which we
                  identified dependencies before proceeding to the UI mockup
                  stage.
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
                              'images/case_studies/profiles_and_verifications/user_testing_report_1.webp',
                              'images/case_studies/profiles_and_verifications/user_testing_report_2.webp',
                            ]}
                          />
                        ),
                      },
                      {
                        name: 'Performance Verifications',
                        content: (
                          <ImageCarousel
                            images={[
                              'images/case_studies/profiles_and_verifications/user_testing_report_1.webp',
                              'images/case_studies/profiles_and_verifications/user_testing_report_2.webp',
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

          <div className="page-section" data-section-label="UI Design">
            <Grid
              container
              rowGap={{ xs: 4, md: 0 }}
              spacing={{ xs: 0, md: 3 }}
              sx={{ mb: { xs: 4, md: 15 } }}
            >
              <Grid
                item
                xs={12}
                className="profiles-and-verifications__common-paragraph"
              >
                <h2>UI Design</h2>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="profiles-and-verifications__common-paragraph"
              >
                <p>
                  Based on the requirements, the UX/UI Design team went through
                  3 two-week sprints to finalize the performance profile
                  mockups.
                </p>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="profiles-and-verifications__common-paragraph"
              >
                <span>
                  As our first Minimum Viable Product, we wanted to showcase the
                  simplicity and ease of navigating through the product. Our
                  decisions were based on the user feedback we synthesized from
                  our user testing sessions.
                </span>
                <span>
                  Our last sprint consisted of confirming the feasibility of the
                  following features and functionalities:
                </span>
                <span>
                  <ul>
                    <li>Dashboard</li>
                    <li>Assign an Evaluation</li>
                    <li>Conduct an Evaluation</li>
                    <li>View Incomplete and Complete Evaluations</li>
                    <li>Notifications and Settings</li>
                  </ul>
                </span>
              </Grid>
              <Grid item xs={12}>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <CaseStudyCardCarousel
                    carouselContent={[
                      'It is imperative we design an application that is intuitive, clean, and help educate our users on how to navigate within our products.',
                    ]}
                    carouselImages={[
                      'images/case_studies/profiles_and_verifications/ui_design_1.webp',
                      'images/case_studies/profiles_and_verifications/ui_design_1.webp',
                    ]}
                  />
                </ScrollAnimation>
              </Grid>
            </Grid>
          </div>

          <div className="page-section" data-section-label="Current Status">
            <Grid
              container
              rowGap={{ xs: 4, md: 0 }}
              spacing={{ xs: 0, md: 3 }}
              sx={{ mb: { xs: 4, md: 15 } }}
            >
              <Grid
                item
                xs={12}
                className="profiles-and-verifications__common-paragraph"
              >
                <h2>Current Status: In Development</h2>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="profiles-and-verifications__common-paragraph"
              >
                <p>
                  One of the biggest mistakes I made as a Lead UX/UI Designer
                  was to trust and relied on a team member to build what is
                  expected of their role...without conducting two-week sprints.
                </p>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="profiles-and-verifications__common-paragraph"
              >
                <span>
                  I made the assumption the full-stack developer had
                  capabilities of working in a team setting, which included
                  providing weekly statuses to the Project Manager.
                </span>
                <span>
                  We come to discover the full-stack developer has never worked
                  in a collaborative setting and demanded the ability to work
                  alone until the entire product is built.
                </span>
                <span>
                  A major occurrence we encountered was his inconsideration and
                  complete disregard of the entire design handoff. This person
                  built a entirely different ‘Conduct an Evaluation’ feature and
                  functionality.
                </span>
                <span style={{ color: 'red' }}>
                  The reason: <br />
                  “I prefer the list view then the grid view, which I deem my
                  built is more intuitive than the provided designs.”{' '}
                </span>
              </Grid>
              <Grid item xs={12}>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <CaseStudyCardCarousel
                    carouselContent={[
                      "Let's compare and contrast.",
                      'This first slide is a snapshot provided by the Full-Stack Developer.',
                    ]}
                    carouselImages={[
                      'images/case_studies/profiles_and_verifications/current_status_1.webp',
                      'images/case_studies/profiles_and_verifications/current_status_2.webp',
                    ]}
                  />
                </ScrollAnimation>
              </Grid>
            </Grid>
          </div>

          <div className="page-section" data-section-label="The Solution">
            <Grid
              container
              rowGap={{ xs: 4, md: 0 }}
              spacing={{ xs: 0, md: 3 }}
              sx={{ mb: { xs: 4, md: 15 } }}
            >
              <Grid
                item
                xs={12}
                className="profiles-and-verifications__common-paragraph"
              >
                <h2>The Solution: Declare this a Critical Issue</h2>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="profiles-and-verifications__common-paragraph"
              >
                <p>
                  This has been the toughest battle in my career within the last
                  5 years.
                </p>
                <p>
                  I have never encountered a developer disregard my design
                  thinking and solution ability even after leadership has signed
                  off on the deliverables.
                </p>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="profiles-and-verifications__common-paragraph"
              >
                <span>
                  I scheduled an emergency meeting with the Vice President (my
                  boss) to inform her of the situation.
                </span>
                <span>
                  Soon after, she sets up a meeting with the Director of IT to
                  straight out the issue. Since external customers have seen
                  previews of the product, they’re expecting the same results
                  post-launch.
                </span>
                <span>
                  Of course, the Director of IT lacks experience and knowledge
                  of leading a developing team - he allows his developers to
                  conduct their own processes because of the following:
                </span>
                <span>
                  <ul>
                    <li>Does not want to lose employees.</li>
                    <li>
                      Undermines the UX/UI Team’s ability in molding the product
                      based on user data and validation.
                    </li>
                    <li>
                      Conforms to user assumptions because it is a “quick,
                      bandaid fix” to launch this product out to customers.
                    </li>
                  </ul>
                </span>
              </Grid>
            </Grid>
          </div>

          <div className="page-section" data-section-label="PV User Testing #2">
            <Grid
              container
              rowGap={{ xs: 4, md: 0 }}
              spacing={{ xs: 0, md: 3 }}
              sx={{ mb: { xs: 4, md: 15 } }}
            >
              <Grid
                item
                xs={12}
                className="profiles-and-verifications__common-paragraph"
              >
                <h2>
                  Performance Verifications: Opportunity to Conduct User Testing
                  Sessions #2
                </h2>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="profiles-and-verifications__common-paragraph"
              >
                <p>
                  We experienced a major delay in the hitting the product’s
                  launch date.
                </p>
                <p>
                  Therefore, the UX/UI Design team took the opportunity to
                  conduct a second batch of User Testing sessions.
                </p>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="profiles-and-verifications__common-paragraph"
              >
                <span>
                  The UX/UI Design team’s goal is to capture and validate the
                  changes within the business and user requirements made by
                  leadership.
                </span>
                <span>
                  For this task, our primary objective was to observe, analyze,
                  and examine each user’s behavior of the following:
                </span>
                <span>
                  <ul>
                    <li>Assign an evaluation</li>
                    <li>Conduct a 1:1 evaluation</li>
                    <li>Conduct a group (1:5) evaluation</li>
                    <li>Manually enter a single evaluation</li>
                  </ul>
                </span>
                <span>
                  Below are a few user responses explaining actual scenarios
                  evaluators and administrators take during the Performance
                  Verification process.
                </span>
              </Grid>
              <Grid item xs={12}>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                >
                  <CaseStudyCardVideo
                    cardContent={[
                      'User Testing Participant #1:',
                      'Jane Dough, an evaluator from a National Center for Construction Education and Research sponsor organization, agreed to participant in our second user testing session.',
                    ]}
                    cardVideoUrl="https://www.youtube.com/watch?v=xcJtL7QggTI"
                    cardVideoThumbnail="images/glittered_screen.jpg"
                  />
                </ScrollAnimation>
              </Grid>
            </Grid>
          </div>

          <div
            className="page-section"
            data-section-label="Cogitated Thoughts Part Deux"
          >
            <Grid
              container
              rowGap={{ xs: 4, md: 0 }}
              spacing={{ xs: 0, md: 3 }}
              sx={{ mb: { xs: 9, md: 15 } }}
            >
              <Grid
                item
                xs={12}
                className="profiles-and-verifications__common-paragraph"
              >
                <h2>Cognitive Thoughts Part Deux</h2>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="profiles-and-verifications__common-paragraph"
              >
                <p>
                  The second half of the product’s roadmap has been the toughest
                  to navigate, especially when you have a variety of different
                  working personalities and temperaments.
                </p>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="profiles-and-verifications__common-paragraph"
              >
                <span>
                  How did I navigate through the constant critical issues and
                  occurrences with team members assigned to this project?
                </span>
                <span>
                  Firstly, I take a big deep breath and remember I work for an
                  organization that is still in the beginning stages of their UX
                  maturity.
                </span>
                <span>
                  Secondly, there are different components that come into play
                  such as the continued conformity of older employees, the
                  resistance of implementing new working processes, and the lack
                  of skill and knowledge of a few newly hired employees.
                </span>
                <span>
                  As much as our UX/UI design team has poured sweat, tears and
                  heart into a product bringing it into existence; as a leader I
                  can't help but think if the battle is still worth fighting
                  for.
                </span>
              </Grid>
            </Grid>
          </div>

          <NextCaseStudy
            csLink={TALENT_PIPELINE}
            csName="Discover the Talent Pipeline"
          />
        </>
      ) : null}
    </div>
  );
};

export default trackWindowScroll(ProfilesAndVerifications);
