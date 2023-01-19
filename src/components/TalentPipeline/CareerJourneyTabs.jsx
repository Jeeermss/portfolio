import { useState } from 'react';
import { Grid } from '@mui/material';
import {
  LazyLoadImage,
  trackWindowScroll,
} from 'react-lazy-load-image-component';
import Tabs from '../../components/Tabs/Tabs';

import getImageMeta from '../../utils/getImageMeta';

const CareerJourneyTabs = ({ scrollPosition }) => {
  const [careerJourneyActiveTab, setCareerJourneyActiveTab] = useState(0);
  const [careerJourneyLoading, setCareerJourneyTabsLoading] = useState(false);
  const [contentPlaceHolderHeight, setContentPlaceHolderHeight] = useState(0);

  const careerJourneyTabsData = [
    {
      name: 'Job Seekers',
      imgUrl: 'images/case_studies/talent_pipeline/cj_job_seekers.svg',
      content: (
        <LazyLoadImage
          scrollPosition={scrollPosition}
          src="images/case_studies/talent_pipeline/cj_job_seekers.svg"
          effect="blur"
          alt="job seekers"
          width="100%"
          beforeLoad={() => setCareerJourneyTabsLoading(true)}
          afterLoad={() => setCareerJourneyTabsLoading(false)}
        />
      ),
    },
    {
      name: 'Employee Representatives',
      imgUrl:
        'images/case_studies/talent_pipeline/cj_employee_representatives.svg',
      content: (
        <LazyLoadImage
          scrollPosition={scrollPosition}
          src="images/case_studies/talent_pipeline/cj_employee_representatives.svg"
          effect="blur"
          alt="employee rep"
          width="100%"
          beforeLoad={() => setCareerJourneyTabsLoading(true)}
          afterLoad={() => setCareerJourneyTabsLoading(false)}
        />
      ),
    },
    {
      name: 'Case Managers',
      imgUrl: 'images/case_studies/talent_pipeline/cj_case_managers.svg',
      content: (
        <LazyLoadImage
          scrollPosition={scrollPosition}
          src="images/case_studies/talent_pipeline/cj_case_managers.svg"
          effect="blur"
          alt="case managers"
          width="100%"
          beforeLoad={() => setCareerJourneyTabsLoading(true)}
          afterLoad={() => setCareerJourneyTabsLoading(false)}
        />
      ),
    },
  ];

  const handleSetActiveTab = async (tabIndex, imgUrl) => {
    const img = await getImageMeta(imgUrl);
    setContentPlaceHolderHeight(img.naturalHeight);
    setCareerJourneyTabsLoading(true);
    setCareerJourneyActiveTab(tabIndex);
  };

  return (
    <div>
      <Tabs
        activeTab={careerJourneyActiveTab}
        setActiveTab={(tabIndex, imgUrl) =>
          handleSetActiveTab(tabIndex, imgUrl)
        }
        tabsData={careerJourneyTabsData}
        sx={{ mb: 15 }}
      />
      {careerJourneyLoading && (
        <Grid container minHeight={contentPlaceHolderHeight}>
          <Grid item xs={12}>
            <div style={{ width: '100%' }}></div>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default trackWindowScroll(CareerJourneyTabs);
