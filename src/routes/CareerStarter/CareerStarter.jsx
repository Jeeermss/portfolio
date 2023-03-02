import { useState } from 'react';
import { Grid, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import {
  LazyLoadImage,
  trackWindowScroll,
} from 'react-lazy-load-image-component';
import ScrollAnimation from 'react-animate-on-scroll';

import CaseStudyIntro from '../../components/CaseStudyIntro/CaseStudyIntro';
import ProductVideoTabs from '../../components/CareerStarter/ProductVideoTabs';
import NextCaseStudy from '../../components/NextCaseStudy/NextCaseStudy';
import PageRoadMap from '../../components/PageRoadMap/PageRoadMap';
import WhiteboardingTabs from '../../components/CareerStarter/WhiteboardingTabs';

import {
  summaryRoles,
  summary,
  problems,
  firstRowMembers,
  secondRowMembers,
} from '../../constants/career-starter';
import { EVALUATION_TOOL } from '../../constants/routes';
import './career-starter.css';

const CareerStarter = ({ scrollPosition }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="career-starter">
      <PageRoadMap showMore={showMore} />

      <div className="page-section" data-section-label="Overview">
        <CaseStudyIntro
          pageTitle="The Birth of CareerStarter"
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
          <div className="page-section" data-section-label="Product Video">
            <ProductVideoTabs />
          </div>

          <div className="page-section" data-section-label="UT Plan">
            <Grid
              container
              rowGap={{ xs: 2, md: 0 }}
              spacing={{ xs: 0, md: 2 }}
              sx={{ mb: { xs: 9, md: '148px' } }}
            >
              <Grid item xs={12} className="career-starter__common-paragraph">
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  offset={50}
                >
                  <h2>User Testing Plan</h2>
                </ScrollAnimation>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="career-starter__common-paragraph"
              >
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  delay={300}
                  offset={0}
                >
                  <p>
                    Can entry-level job seekers seamlessly sign up and access
                    the tool, find a local job and training?
                  </p>
                </ScrollAnimation>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  delay={600}
                  offset={-50}
                >
                  <p>
                    Can employer representatives find job seeker candidates and
                    access the necessary information they need to hire them?
                  </p>
                </ScrollAnimation>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="career-starter__common-paragraph"
              >
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  delay={900}
                  offset={0}
                >
                  <span>
                    The organization’s culture built and shipped out products
                    based on internal assumptions and customer requests without
                    any user validation.
                  </span>
                </ScrollAnimation>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  delay={1200}
                  offset={-50}
                >
                  <span>
                    This was an exciting opportunity to introduce a process to
                    test the product with real users. I created a user testing
                    plan to inform team members the goal, objectives, and which
                    tasks to track.{' '}
                  </span>
                </ScrollAnimation>
              </Grid>
              <Grid item xs={12} mt={{ xs: 2, md: 3 }}>
                <LazyLoadImage
                  scrollPosition={scrollPosition}
                  src="images/case_studies/career_starter/ut_plan.png"
                  effect="blur"
                  alt="UT plan"
                  width="100%"
                />
              </Grid>
            </Grid>
          </div>

          <div className="page-section" data-section-label="UT Report">
            <Grid
              container
              rowGap={{ xs: 2, md: 0 }}
              spacing={{ xs: 0, md: 2 }}
              sx={{ mb: { xs: 9, md: '148px' } }}
            >
              <Grid item xs={12} className="career-starter__common-paragraph">
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  offset={50}
                >
                  <h2>Our Findings</h2>
                </ScrollAnimation>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="career-starter__common-paragraph"
              >
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  delay={500}
                  offset={0}
                >
                  <p>
                    5 out of 5 users stated that the messaging on the
                    CareerStarter’s landing page is clear.
                  </p>
                </ScrollAnimation>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  delay={1000}
                  offset={-70}
                >
                  <p>
                    An average 4.3/5 single ease question completion rating of
                    identifying and completing the registration form within
                    CareerStarter’s landing page.
                  </p>
                </ScrollAnimation>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  delay={1500}
                  offset={-140}
                >
                  <p>
                    An average 4/5 single ease question completion rating of
                    identifying and completing the employer representative’s
                    company page.
                  </p>
                </ScrollAnimation>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="career-starter__common-paragraph"
              >
                <span>
                  <ul className="career-starter__ut-report-list">
                    <ScrollAnimation
                      animateOnce
                      animateIn="animate__fadeInUp"
                      animatePreScroll
                      delay={2000}
                      offset={0}
                    >
                      <li>
                        Employer representatives requested the need to search
                        job seekers who carry an National Center for
                        Construction Education and Research card number to find
                        out if they acquire the following: training,
                        credentials, an Occupational Safety and Health
                        Administration card holder, etc.
                      </li>
                    </ScrollAnimation>
                    <ScrollAnimation
                      animateOnce
                      animateIn="animate__fadeInUp"
                      animatePreScroll
                      delay={2500}
                      offset={-50}
                    >
                      <li>
                        A product tour to briefly know how to favorite a career,
                        training and job posts, access historical applied job
                        posts and set notifications.
                      </li>
                    </ScrollAnimation>
                    <ScrollAnimation
                      animateOnce
                      animateIn="animate__fadeInUp"
                      animatePreScroll
                      delay={3000}
                      offset={-100}
                    >
                      <li>Create an individual registration page.</li>
                    </ScrollAnimation>
                  </ul>
                </span>
              </Grid>
            </Grid>
          </div>

          <div
            className="page-section"
            data-section-label="Post Launch User Research"
          >
            <Grid
              container
              rowGap={{ xs: 2, md: 0 }}
              spacing={{ xs: 0, md: 2 }}
              sx={{ mb: { xs: 9, md: '148px' } }}
            >
              <Grid item xs={12} className="career-starter__common-paragraph">
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  offset={50}
                >
                  <h2>Post-Launch User Research</h2>
                </ScrollAnimation>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="career-starter__common-paragraph"
              >
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  delay={500}
                  offset={0}
                >
                  <p>
                    Since February 2022, CareerStarter gained 2 major
                    sponsorships within the industry.
                  </p>
                </ScrollAnimation>
                {isMobile ? (
                  <>
                    <ScrollAnimation
                      animateOnce
                      animateIn="animate__fadeInUp"
                      animatePreScroll
                    >
                      <LazyLoadImage
                        scrollPosition={scrollPosition}
                        src="images/case_studies/career_starter/stanley.webp"
                        effect="blur"
                        alt="stanley"
                        width="90%"
                      />
                    </ScrollAnimation>
                    <ScrollAnimation
                      animateOnce
                      animateIn="animate__fadeInUp"
                      animatePreScroll
                    >
                      <LazyLoadImage
                        scrollPosition={scrollPosition}
                        src="images/case_studies/career_starter/procore.webp"
                        effect="blur"
                        alt="pro core"
                        width="90%"
                      />
                    </ScrollAnimation>
                  </>
                ) : (
                  <div
                    style={{
                      display: 'flex',
                      gap: '24px',
                    }}
                  >
                    <ScrollAnimation
                      animateOnce
                      animateIn="animate__fadeInUp"
                      animatePreScroll
                      delay={1000}
                      offset={-50}
                    >
                      <LazyLoadImage
                        scrollPosition={scrollPosition}
                        src="images/case_studies/career_starter/stanley.webp"
                        effect="blur"
                        alt="stanley"
                        width="100%"
                      />
                    </ScrollAnimation>
                    <ScrollAnimation
                      animateOnce
                      animateIn="animate__fadeInUp"
                      animatePreScroll
                      delay={1000}
                      offset={-50}
                    >
                      <LazyLoadImage
                        scrollPosition={scrollPosition}
                        src="images/case_studies/career_starter/procore.webp"
                        effect="blur"
                        alt="pro core"
                        width="100%"
                      />
                    </ScrollAnimation>
                  </div>
                )}
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="career-starter__common-paragraph"
              >
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  delay={1500}
                  offset={0}
                >
                  <span>
                    The product’s current goal is to gain more insight and
                    discovery on how we can ensure more engagement within the
                    tool, coming from the entry-level job seeker and educator
                    side.
                  </span>
                </ScrollAnimation>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  delay={2000}
                  offset={-50}
                >
                  <span>
                    We conducted a benchmarking analyses of our competitors and
                    soon conduct in-person observations within the classrooms
                    and correctional facilities.
                  </span>
                </ScrollAnimation>
              </Grid>
              <Grid item xs={12} mt={{ xs: 2, md: 3 }}>
                <LazyLoadImage
                  scrollPosition={scrollPosition}
                  src="images/case_studies/career_starter/post_research_image_1.webp"
                  effect="blur"
                  alt="post research img 1"
                  width="100%"
                />
              </Grid>
              <Grid item xs={12}>
                <LazyLoadImage
                  scrollPosition={scrollPosition}
                  src="images/case_studies/career_starter/post_research_image_2.webp"
                  effect="blur"
                  alt="post research img 2"
                  width="100%"
                />
              </Grid>
            </Grid>
          </div>

          <div
            className="page-section"
            data-section-label="Whiteboarding Session"
          >
            <Grid
              container
              rowGap={{ xs: 2, md: 0 }}
              spacing={{ xs: 0, md: 2 }}
              sx={{ mb: { xs: 9, md: '148px' } }}
            >
              <Grid item xs={12} className="career-starter__common-paragraph">
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  offset={50}
                >
                  <h2>Whiteboarding Sessions</h2>
                </ScrollAnimation>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="career-starter__common-paragraph"
              >
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  delay={500}
                  offset={0}
                >
                  <p>
                    Our goal is to expand on platform utilization within
                    classroom and training programs, which then builds
                    student-to-case manager relationship.
                  </p>
                </ScrollAnimation>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="career-starter__common-paragraph"
              >
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  delay={1000}
                  offset={0}
                >
                  <span>
                    I’ve facilitated two whiteboard sessions to go over
                    CareerStarter’s Google Analytics, define the product’s
                    goals, and generate questions to all 3 user-types. In our
                    question board, we wanted to know the following:{' '}
                  </span>
                </ScrollAnimation>
                <span>
                  <ul className="career-starter__ut-report-list">
                    <ScrollAnimation
                      animateOnce
                      animateIn="animate__fadeInUp"
                      animatePreScroll
                      delay={1500}
                      offset={-50}
                    >
                      <li>
                        What feedback do we want to know about how our users are
                        engaging within the platform?
                      </li>
                    </ScrollAnimation>
                    <ScrollAnimation
                      animateOnce
                      animateIn="animate__fadeInUp"
                      animatePreScroll
                      delay={2000}
                      offset={-100}
                    >
                      <li>What do we want to learn about our users?</li>
                    </ScrollAnimation>
                  </ul>
                </span>
              </Grid>
              <Grid item xs={12} mt={{ xs: 2, md: 3 }}>
                <WhiteboardingTabs />
              </Grid>
            </Grid>
          </div>

          <div
            className="page-section"
            data-section-label="Priority and Feasibility"
          >
            <Grid
              container
              rowGap={{ xs: 2, md: 0 }}
              spacing={{ xs: 0, md: 2 }}
              sx={{ mb: { xs: 9, md: '148px' } }}
            >
              <Grid item xs={12} className="career-starter__common-paragraph">
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  offset={50}
                >
                  <h2>
                    Put a hold on user testing. We have priorities to sort out.
                  </h2>
                </ScrollAnimation>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="career-starter__common-paragraph"
              >
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  delay={500}
                  offset={0}
                >
                  <p>
                    The goal is to have the product requirements built out by
                    August 2022, which is the product launch nationwide.
                  </p>
                </ScrollAnimation>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="career-starter__common-paragraph"
              >
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  delay={1000}
                  offset={0}
                >
                  <span>
                    As the Case Manager user testing plan was created in June
                    2022, the marketing and Outreach Team did not recruit case
                    managers to the product. We put this initiative on hold.
                  </span>
                </ScrollAnimation>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  delay={1500}
                  offset={-50}
                >
                  <span>
                    We shifted our focus with another task at hand. We sorted
                    out the technical feasibility of each product requirements.
                  </span>
                </ScrollAnimation>
              </Grid>
              <Grid item xs={12} mt={{ xs: 2, md: 3 }}>
                <LazyLoadImage
                  scrollPosition={scrollPosition}
                  src="images/case_studies/career_starter/high_low_priorities_2.png"
                  effect="blur"
                  alt="high low priorities"
                  width="100%"
                />
              </Grid>
            </Grid>
          </div>

          <div className="page-section" data-section-label="Reflection">
            <Grid
              container
              rowGap={{ xs: 2, md: 0 }}
              spacing={{ xs: 0, md: 2 }}
              sx={{ mb: { xs: 9, md: '148px' } }}
            >
              <Grid item xs={12} className="career-starter__common-paragraph">
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  offset={50}
                >
                  <h2>Reflection</h2>
                </ScrollAnimation>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="career-starter__common-paragraph"
              >
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  delay={500}
                  offset={0}
                >
                  <p>
                    Not all products abide by a linear UX/UI process of what
                    most UX/UI Designers have learned in school.
                  </p>
                </ScrollAnimation>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                className="career-starter__common-paragraph"
              >
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  delay={1000}
                  offset={0}
                >
                  <span>
                    As CareerStarter being a product to conduct a variety of UX
                    and UI processes, I had to quickly adjust to its current
                    task at hand.
                  </span>
                </ScrollAnimation>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  delay={1500}
                  offset={-50}
                >
                  <span>
                    Whether we post-pone an initiative or cater to other team
                    members and their processes, our overall goal was to launch
                    a product nationwide on a specific date, which was
                    successfully met.
                  </span>
                </ScrollAnimation>
                <ScrollAnimation
                  animateOnce
                  animateIn="animate__fadeInUp"
                  animatePreScroll
                  delay={2000}
                  offset={-100}
                >
                  <span>
                    Our new challenge is to continue to scale the product, but
                    with the third-party vendor’s constraints of only providing
                    10 hours/month worth of product iterations.
                  </span>
                </ScrollAnimation>
              </Grid>
            </Grid>
          </div>

          <NextCaseStudy
            csLink={EVALUATION_TOOL}
            csName="The Need for an Evalution Tool"
          />
        </>
      ) : null}
    </div>
  );
};

export default trackWindowScroll(CareerStarter);
