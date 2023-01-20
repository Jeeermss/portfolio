import { Grid } from '@mui/material';
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
          <ScrollAnimation animateOnce animateIn="animate__pulse">
            <LazyLoadImage
              scrollPosition={scrollPosition}
              src="images/case_studies/talent_pipeline/job_seeker.svg"
              effect="blur"
              alt="job seeker"
            />
          </ScrollAnimation>
          <span>Entry-level Construction and Maintenance Job Seekers</span>
        </Grid>
        <Grid item xs={12} md={4} className="talent-pipeline__role">
          <ScrollAnimation animateOnce animateIn="animate__pulse">
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
          <ScrollAnimation animateOnce animateIn="animate__pulse">
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
            <ScrollAnimation animateOnce animateIn="animate__backInRight">
              <LazyLoadImage
                scrollPosition={scrollPosition}
                src="images/case_studies/talent_pipeline/personas_female.svg"
                effect="blur"
                alt="female persona"
              />
            </ScrollAnimation>
            <ScrollAnimation animateOnce animateIn="animate__backInRight">
              <LazyLoadImage
                scrollPosition={scrollPosition}
                src="images/case_studies/talent_pipeline/personas_male.svg"
                effect="blur"
                alt="male persona"
              />
            </ScrollAnimation>
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

      <Grid
        container
        rowGap={{ xs: 4, md: 0 }}
        rowSpacing={3}
        spacing={{ xs: 0, md: 8 }}
        sx={{ mb: 15 }}
      >
        <Grid
          item
          xs={12}
          className="talent-pipeline__documenting-user-stories"
        >
          <h3>
            A new structure of documenting user stories and user story mapping
          </h3>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          className="talent-pipeline__documenting-user-stories"
        >
          <h4>
            Internal team members had trouble identifying what is the Minimum
            Viable Product for post-launch.
          </h4>
          <h4>
            What and which requirements, for each user role, is feasible for
            development within the given time span?
          </h4>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          className="talent-pipeline__documenting-user-stories"
        >
          <p>
            Once team members understood the product’s target audience and
            identified the customer experience, I created a set of user stories
            for release 1.
          </p>
          <p>
            The objective and goal was for internal and external teams to
            understand the set of requirements, prioritize “must-haves”, and
            estimate development implementation.
          </p>
        </Grid>
        <Grid item xs={12}>
          <ScrollAnimation
            animateOnce
            animateIn="animate__pulse"
            initiallyVisible
          >
            <LazyLoadImage
              scrollPosition={scrollPosition}
              src="images/case_studies/talent_pipeline/user_stories.svg"
              effect="blur"
              alt="user stories"
              width="100%"
            />
          </ScrollAnimation>
        </Grid>
        <Grid item xs={12}>
          <ScrollAnimation
            animateOnce
            animateIn="animate__pulse"
            initiallyVisible
          >
            <LazyLoadImage
              scrollPosition={scrollPosition}
              src="images/case_studies/talent_pipeline/user_story_mapping.svg"
              effect="blur"
              alt="user story mapping"
              width="100%"
            />
          </ScrollAnimation>
        </Grid>
      </Grid>

      <Grid container spacing={{ xs: 0, md: 4 }} sx={{ mb: 15 }}>
        <Grid
          item
          xs={12}
          className="talent-pipeline__documenting-user-stories"
        >
          <h3>
            No design system in place?
            <br /> Let me create one!
          </h3>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          className="talent-pipeline__documenting-user-stories"
          mb={7}
        >
          <p>
            Although an existing product was built by the external team members,
            we wanted to alter the UI based on the organization’s existing
            brand.
          </p>
          <p>
            This lead to my next initiative, which is to create the product’s
            design system.
          </p>
        </Grid>
        <Grid item xs={12}>
          <ScrollAnimation
            animateOnce
            animateIn="animate__pulse"
            initiallyVisible
          >
            <ScrollingContainer>
              <LazyLoadImage
                scrollPosition={scrollPosition}
                src="images/case_studies/talent_pipeline/sample_design.svg"
                effect="blur"
                alt="sample design"
                width="100%"
              />
            </ScrollingContainer>
          </ScrollAnimation>
        </Grid>
      </Grid>

      <Grid
        container
        rowGap={{ xs: 4, md: 0 }}
        rowSpacing={3}
        spacing={{ xs: 0, md: 8 }}
        sx={{ mb: 22 }}
      >
        <Grid
          item
          xs={12}
          className="talent-pipeline__documenting-user-stories"
        >
          <h3>Full-time role lead to more responsibilities</h3>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          className="talent-pipeline__documenting-user-stories"
        >
          <h4>
            How and what type of message do we want to market out to our target
            audiences about talent pipeline?
          </h4>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          mb={4}
          className="talent-pipeline__documenting-user-stories"
        >
          <p>
            The task was to create the product’s landing page for people to
            learn more and create an account. The marketing team thought the
            first draft did not convey the product’s intent and appeal.
          </p>
          <p>
            I created a strength and weakness analysis of several competitor
            landing pages to present quick findings and potential opportunities
            of how our product can insert itself within the existing
            competition.
          </p>
        </Grid>
        <Grid item xs={12}>
          <ScrollAnimation
            animateOnce
            animateIn="animate__pulse"
            initiallyVisible
          >
            <LazyLoadImage
              scrollPosition={scrollPosition}
              src="images/case_studies/talent_pipeline/strenghts.svg"
              effect="blur"
              alt="strenghts"
              width="100%"
            />
          </ScrollAnimation>
        </Grid>
        <Grid item xs={12}>
          <ScrollAnimation
            animateOnce
            animateIn="animate__pulse"
            initiallyVisible
          >
            <LazyLoadImage
              scrollPosition={scrollPosition}
              src="images/case_studies/talent_pipeline/weaknesses.svg"
              effect="blur"
              alt="weaknesses"
              width="100%"
            />
          </ScrollAnimation>
        </Grid>
        <Grid item xs={12}>
          <ScrollAnimation
            animateOnce
            animateIn="animate__pulse"
            initiallyVisible
          >
            <LazyLoadImage
              scrollPosition={scrollPosition}
              src="images/case_studies/talent_pipeline/opportunities.svg"
              effect="blur"
              alt="opportunities"
              width="100%"
            />
          </ScrollAnimation>
        </Grid>
      </Grid>

      <Grid
        container
        rowGap={{ xs: 4, md: 0 }}
        rowSpacing={3}
        spacing={{ xs: 0, md: 8 }}
        sx={{ mb: 15 }}
      >
        <Grid
          item
          xs={12}
          className="talent-pipeline__documenting-user-stories"
        >
          <h3>Now what? Facilitate a UI white-boarding session!</h3>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          className="talent-pipeline__documenting-user-stories"
        >
          <h4>
            With all of these ideas in mind, how do we bring it all together to
            shine light on the product’s features?
          </h4>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          className="talent-pipeline__documenting-user-stories"
        >
          <p>
            I scheduled a brainstorm workshop session with the marketing team to
            collaborate on the messaging hierarchy and visual layout.
          </p>
        </Grid>
        <Grid item xs={12}>
          <ScrollAnimation
            animateOnce
            animateIn="animate__pulse"
            initiallyVisible
          >
            <LazyLoadImage
              scrollPosition={scrollPosition}
              src="images/case_studies/talent_pipeline/tp_landing_page.svg"
              effect="blur"
              alt="talent pipeline landing page"
              width="100%"
            />
          </ScrollAnimation>
        </Grid>
      </Grid>

      <Grid
        container
        rowGap={{ xs: 4, md: 0 }}
        rowSpacing={3}
        spacing={{ xs: 0, md: 8 }}
        sx={{ mb: 15 }}
      >
        <Grid
          item
          xs={12}
          className="talent-pipeline__documenting-user-stories"
        >
          <h3>Go back to the Figma board and show the final result</h3>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          mb={4}
          className="talent-pipeline__documenting-user-stories"
        >
          <p>
            This landing page starts off with the main tag line then entices the
            visitor to learn more about the product.
          </p>
          <p>
            We wanted to showcase a visual indicator that people can access the
            product using their phone or desktop.{' '}
          </p>
        </Grid>
        <Grid item xs={12}>
          <ScrollAnimation
            animateOnce
            animateIn="animate__pulse"
            initiallyVisible
          >
            <ScrollingContainer>
              <LazyLoadImage
                scrollPosition={scrollPosition}
                src="images/case_studies/talent_pipeline/tp_landing_page_scrolling.svg"
                effect="blur"
                alt="talent pipeline landing page"
                width="100%"
              />
            </ScrollingContainer>
          </ScrollAnimation>
        </Grid>
      </Grid>

      <Grid
        container
        rowGap={{ xs: 4, md: 0 }}
        rowSpacing={3}
        spacing={{ xs: 0, md: 8 }}
        sx={{ mb: 15 }}
      >
        <Grid
          item
          xs={12}
          className="talent-pipeline__documenting-user-stories"
        >
          <h3>Design // Development Collaboration</h3>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          className="talent-pipeline__documenting-user-stories"
        >
          <h4>
            On a 2-month span, we needed to meet the deadline of the soft launch
            date and ship the platform to states: Texas and North Carolina.
          </h4>
        </Grid>
        <Grid
          item
          xs={12}
          md={6}
          className="talent-pipeline__documenting-user-stories"
        >
          <p>
            As a design team of one with the support of the Project Manager, I
            created and designed a thorough web and mobile style guide to ensure
            the UI and branding stays consistent throughout the platform.
          </p>
          <p>
            I also took on sole ownership and responsibility of creating and
            managing the Jira boards so we have full transparency of what each
            team worked on within each 2-week sprint.
          </p>
        </Grid>
      </Grid>

      <NextCaseStudy
        csLink="/career-starter"
        csName="The Birth of Career Starter"
      />
    </div>
  );
};

export default trackWindowScroll(TalentPipeline);
