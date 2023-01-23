import { Grid } from '@mui/material';
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
  firstRowMembersTitle,
  secondRowMembersTitle,
} from '../../constants/profiles-and-verifications';
import { TALENT_PIPELINE } from '../../constants/routes';
import './profiles-and-verifications.css';

const ProfilesAndVerifications = ({ scrollPosition }) => {
  return (
    <div className="profiles-and-verifications">
      <PageRoadMap />

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

      {/* <div className="page-section" data-section-label="Product Video">
        <ProductVideoTabs />
      </div>

      <div className="page-section" data-section-label="UT Plan">
        <Grid
          container
          rowGap={{ xs: 7, md: 0 }}
          spacing={{ xs: 0, md: 7 }}
          sx={{ mb: 15 }}
        >
          <Grid
            item
            xs={12}
            className="profiles-and-verifications__common-paragraph"
          >
            <h2>User Testing Plan</h2>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className="profiles-and-verifications__common-paragraph"
          >
            <p>
              Can entry-level job seekers seamlessly sign up and access the
              tool, find a local job and training?
            </p>
            <p>
              Can employer representatives find job seeker candidates and access
              the necessary information they need to hire them?
            </p>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className="profiles-and-verifications__common-paragraph"
          >
            <span>
              The organization’s culture built and shipped out products based on
              internal assumptions and customer requests without any user
              validation.
            </span>
            <span>
              This was an exciting opportunity to introduce a process to test
              the product with real users. I created a user testing plan to
              inform team members the goal, objectives, and which tasks to
              track.{' '}
            </span>
          </Grid>
          <Grid item xs={12}>
            <ScrollAnimation animateOnce animateIn="animate__pulse">
              <LazyLoadImage
                scrollPosition={scrollPosition}
                src="images/case_studies/career_starter/ut_plan.svg"
                effect="blur"
                alt="UT plan"
                width="100%"
              />
            </ScrollAnimation>
          </Grid>
        </Grid>
      </div>

      <div className="page-section" data-section-label="UT Report">
        <Grid
          container
          rowGap={{ xs: 7, md: 0 }}
          spacing={{ xs: 0, md: 7 }}
          sx={{ mb: 15 }}
        >
          <Grid
            item
            xs={12}
            className="profiles-and-verifications__common-paragraph"
          >
            <h2>Our Findings</h2>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className="profiles-and-verifications__common-paragraph"
          >
            <p>
              5 out of 5 users stated that the messaging on the CareerStarter’s
              landing page is clear.
            </p>
            <p>
              An average 4.3/5 single ease question completion rating of
              identifying and completing the registration form within
              CareerStarter’s landing page.
            </p>
            <p>
              An average 4/5 single ease question completion rating of
              identifying and completing the employer representative’s company
              page.
            </p>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className="profiles-and-verifications__common-paragraph"
          >
            <span>
              <ul className="profiles-and-verifications__ut-report-list">
                <li>
                  Employer representatives requested the need to search job
                  seekers who carry an National Center for Construction
                  Education and Research card number to find out if they acquire
                  the following: training, credentials, an Occupational Safety
                  and Health Administration card holder, etc.
                </li>
                <li>
                  A product tour to briefly know how to favorite a career,
                  training and job posts, access historical applied job posts
                  and set notifications.
                </li>
                <li>Create an individual registration page.</li>
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
          rowGap={{ xs: 7, md: 0 }}
          spacing={{ xs: 0, md: 7 }}
          sx={{ mb: 15 }}
        >
          <Grid
            item
            xs={12}
            className="profiles-and-verifications__common-paragraph"
          >
            <h2>Post-Launch User Research</h2>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className="profiles-and-verifications__common-paragraph"
          >
            <p>
              Since February 2022, CareerStarter gained 2 major sponsorships
              within the industry.
            </p>
            <ScrollAnimation
              animateOnce
              animateIn="animate__backInLeft"
              style={{
                display: 'flex',
                gap: '24px',
              }}
            >
              <LazyLoadImage
                scrollPosition={scrollPosition}
                src="images/case_studies/career_starter/stanley.svg"
                effect="blur"
                alt="stanley"
              />
              <LazyLoadImage
                scrollPosition={scrollPosition}
                src="images/case_studies/career_starter/procore.svg"
                effect="blur"
                alt="pro core"
              />
            </ScrollAnimation>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className="profiles-and-verifications__common-paragraph"
          >
            <span>
              The product’s current goal is to gain more insight and discovery
              on how we can ensure more engagement within the tool, coming from
              the entry-level job seeker and educator side.
            </span>
            <span>
              We conducted a benchmarking analyses of our competitors and soon
              conduct in-person observations within the classrooms and
              correctional facilities.
            </span>
          </Grid>
          <Grid item xs={12}>
            <ScrollAnimation animateOnce animateIn="animate__pulse">
              <LazyLoadImage
                scrollPosition={scrollPosition}
                src="images/case_studies/career_starter/post_research_image_1.svg"
                effect="blur"
                alt="post research img 1"
                width="100%"
              />
            </ScrollAnimation>
          </Grid>
          <Grid item xs={12}>
            <ScrollAnimation animateOnce animateIn="animate__pulse">
              <LazyLoadImage
                scrollPosition={scrollPosition}
                src="images/case_studies/career_starter/post_research_image_2.svg"
                effect="blur"
                alt="post research img 2"
                width="100%"
              />
            </ScrollAnimation>
          </Grid>
        </Grid>
      </div>

      <div className="page-section" data-section-label="Whiteboarding Session">
        <Grid
          container
          rowGap={{ xs: 7, md: 0 }}
          spacing={{ xs: 0, md: 7 }}
          sx={{ mb: 15 }}
        >
          <Grid
            item
            xs={12}
            className="profiles-and-verifications__common-paragraph"
          >
            <h2>Whiteboarding Sessions</h2>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className="profiles-and-verifications__common-paragraph"
          >
            <p>
              Our goal is to expand on platform utilization within classroom and
              training programs, which then builds student-to-case manager
              relationship.
            </p>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className="profiles-and-verifications__common-paragraph"
          >
            <span>
              I’ve facilitated two whiteboard sessions to go over
              CareerStarter’s Google Analytics, define the product’s goals, and
              generate questions to all 3 user-types. In our question board, we
              wanted to know the following:{' '}
            </span>
            <span>
              <ul className="profiles-and-verifications__ut-report-list">
                <li>
                  What feedback do we want to know about how our users are
                  engaging within the platform?
                </li>
                <li>What do we want to learn about our users?</li>
              </ul>
            </span>
          </Grid>
          <Grid item xs={12}>
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
          rowGap={{ xs: 7, md: 0 }}
          spacing={{ xs: 0, md: 7 }}
          sx={{ mb: 15 }}
        >
          <Grid
            item
            xs={12}
            className="profiles-and-verifications__common-paragraph"
          >
            <h2>Put a hold on user testing. We have priorities to sort out.</h2>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className="profiles-and-verifications__common-paragraph"
          >
            <p>
              The goal is to have the product requirements built out by August
              2022, which is the product launch nationwide.
            </p>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className="profiles-and-verifications__common-paragraph"
          >
            <span>
              As the Case Manager user testing plan was created in June 2022,
              the marketing and Outreach Team did not recruit case managers to
              the product. We put this initiative on hold.
            </span>
            <span>
              We shifted our focus with another task at hand. We sorted out the
              technical feasibility of each product requirements.
            </span>
          </Grid>
          <Grid item xs={12}>
            <ScrollAnimation animateOnce animateIn="animate__pulse">
              <LazyLoadImage
                scrollPosition={scrollPosition}
                src="images/case_studies/career_starter/high_low_priorities.svg"
                effect="blur"
                alt="high low priorities"
                width="100%"
              />
            </ScrollAnimation>
          </Grid>
        </Grid>
      </div>

      <div className="page-section" data-section-label="Reflection">
        <Grid
          container
          rowGap={{ xs: 7, md: 0 }}
          spacing={{ xs: 0, md: 7 }}
          sx={{ mb: 15 }}
        >
          <Grid
            item
            xs={12}
            className="profiles-and-verifications__common-paragraph"
          >
            <h2>Reflection</h2>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className="profiles-and-verifications__common-paragraph"
          >
            <p>
              Not all products abide by a linear UX/UI process of what most
              UX/UI Designers have learned in school.
            </p>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            className="profiles-and-verifications__common-paragraph"
          >
            <span>
              As CareerStarter being a product to conduct a variety of UX and UI
              processes, I had to quickly adjust to its current task at hand.
            </span>
            <span>
              Whether we post-pone an initiative or cater to other team members
              and their processes, our overall goal was to launch a product
              nationwide on a specific date, which was successfully met.
            </span>
            <span>
              Our new challenge is to continue to scale the product, but with
              the third-party vendor’s constraints of only providing 10
              hours/month worth of product iterations.
            </span>
          </Grid>
        </Grid>
      </div> */}

      <NextCaseStudy
        csLink={TALENT_PIPELINE}
        csName="Discover the Talent Pipeline"
      />
    </div>
  );
};

export default trackWindowScroll(ProfilesAndVerifications);
