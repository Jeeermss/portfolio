import { Grid } from '@mui/material';
import CaseStudyCard from '../CaseStudyCard/CaseStudyCard';
import './case-study-directory.css';

import Cs1Image from '../../assets/images/case-study-1.png';
import Cs3Image from '../../assets/images/case-study-3.png';
import Cs4Image from '../../assets/images/case-study-4.png';

const CaseStudiesDirectory = () => {
  return (
    <Grid container className="case-study-directory">
      <Grid container>
        <Grid item xs={12} className="section-headers">
          <h3 className="jm-typography heading-level-3">
            Case Studies Curated for You
          </h3>
        </Grid>
      </Grid>
      <Grid container spacing={4}>
        <Grid item sm={12} md={6} className="case-studies-card-wrapper">
          <CaseStudyCard
            header="Q1 2022 - Ongoing"
            flag="UX Research"
            contentHeader="The Need of an Evaluation Tool"
            contentDesc="A close examination of how evaluations are conducted and observed in a live site and classroom setting."
            cardImageUrl={Cs1Image}
            cardImageAlt="Case Study 1"
          />
        </Grid>
        <Grid item sm={12} md={6} className="case-studies-card-wrapper">
          <CaseStudyCard
            header="Q1 2022 - Ongoing"
            flag="UI Design"
            contentHeader="Performance Profiles & Verifications"
            contentDesc="How did our team assist an organization 
            prepare and transition from a paper evaluation 
            to a digital landscape?"
            cardImageUrl={Cs1Image}
            cardImageAlt="Case Study 2"
          />
        </Grid>
        <Grid item sm={12} md={6} className="case-studies-card-wrapper">
          <CaseStudyCard
            header="Q3 2021 - Q1 2022"
            flag="UX Research"
            contentHeader="Discover the Talent Pipeline"
            contentDesc="An opportunity to merge the gap between 
            Job Seekers and Recruiters with the assistance 
            of high school and college educators."
            cardImageUrl={Cs3Image}
            cardImageAlt="Case Study 3"
          />
        </Grid>
        <Grid item sm={12} md={6} className="case-studies-card-wrapper">
          <CaseStudyCard
            header="Q3 2021 - Ongoing"
            flag="UI Design"
            contentHeader="The Birth of CareerStarter"
            contentDesc="A web app that helps connect Job Seekers 
            to educators, training programs, and recruiters within the Construction and Maintenance field."
            cardImageUrl={Cs4Image}
            cardImageAlt="Case Study 4"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CaseStudiesDirectory;
