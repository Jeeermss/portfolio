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

const EvaluationTool = ({ scrollPosition }) => {
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

      <NextCaseStudy
        csLink={PROFILES_AND_VERIFICATIONS}
        csName="Performance Profiles and Verifications"
      />
    </div>
  );
};

export default trackWindowScroll(EvaluationTool);
