import { Grid } from "@mui/material";
import CaseStudyCard from '../CaseStudyCard/CaseStudyCard';
import './case-study-directory.css';

const CaseStudiesDirectory = () => {
  return (
    <Grid container className='case-study-directory'>
      <Grid container>
        <Grid item xs={12} className='section-headers'>
          <h3 className='jm-typography heading-level-3'>Case Studies Curated for You</h3>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={6} className='case-studies-card-wrapper'>
          <CaseStudyCard
            header='Q3 2021 - Q1 2022'
            flag='UX Research'
            contentHeader='Discover the Talent Pipeline'
            contentDesc='An opportunity to merge the gap between Job Seekers and Recruiters with the assistance of
            high school and college educators.'
          />
        </Grid>
        <Grid item xs={6} className='case-studies-card-wrapper'>
          <CaseStudyCard
            header='Q3 2021 - Q1 2022'
            flag='UX Research'
            contentHeader='Discover the Talent Pipeline'
            contentDesc='An opportunity to merge the gap between Job Seekers and Recruiters with the assistance of
            high school and college educators.'
          />
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={6} className='case-studies-card-wrapper'>
          <CaseStudyCard
            header='Q3 2021 - Q1 2022'
            flag='UX Research'
            contentHeader='Discover the Talent Pipeline'
            contentDesc='An opportunity to merge the gap between Job Seekers and Recruiters with the assistance of
            high school and college educators.'
          />
        </Grid>
        <Grid item xs={6} className='case-studies-card-wrapper'>
          <CaseStudyCard
            header='Q3 2021 - Q1 2022'
            flag='UX Research'
            contentHeader='Discover the Talent Pipeline'
            contentDesc='An opportunity to merge the gap between Job Seekers and Recruiters with the assistance of
            high school and college educators.'
          />
        </Grid>
      </Grid>
    </Grid>

  )
}

export default CaseStudiesDirectory;