import { useState } from 'react';
import { Grid } from '@mui/material';
import {
  LazyLoadImage,
  trackWindowScroll,
} from 'react-lazy-load-image-component';
import Tabs from '../../components/Tabs/Tabs';

import getImageMeta from '../../utils/getImageMeta';

const WhiteboardingTabs = ({ scrollPosition }) => {
  const [activeTab, setActiveTab] = useState(0);
  const [tabsLoading, setTabsLoading] = useState(false);
  const [contentPlaceHolderHeight, setContentPlaceHolderHeight] = useState(0);

  const tabsData = [
    {
      name: 'Job Seekers',
      content: (
        <LazyLoadImage
          scrollPosition={scrollPosition}
          src="images/case_studies/career_starter/whiteboarding_job_seekers.svg"
          effect="blur"
          alt="job seekers"
          width="100%"
          afterLoad={() => setTabsLoading(false)}
        />
      ),
      imgUrl:
        'images/case_studies/career_starter/whiteboarding_job_seekers.svg',
    },
    {
      name: 'Employee Representatives',
      content: (
        <LazyLoadImage
          scrollPosition={scrollPosition}
          src="images/case_studies/career_starter/whiteboarding_employer_reps.svg"
          effect="blur"
          alt="employee rep"
          width="100%"
          afterLoad={() => setTabsLoading(false)}
        />
      ),
      imgUrl:
        'images/case_studies/career_starter/whiteboarding_employer_reps.svg',
    },
    {
      name: 'Case Managers',
      content: (
        <LazyLoadImage
          scrollPosition={scrollPosition}
          src="images/case_studies/career_starter/whiteboarding_case_managers.svg"
          effect="blur"
          alt="case managers"
          width="100%"
          afterLoad={() => setTabsLoading(false)}
        />
      ),
      imgUrl:
        'images/case_studies/career_starter/whiteboarding_case_managers.svg',
    },
  ];

  const handleSetActiveTab = async (tabIndex, imgUrl) => {
    const img = await getImageMeta(imgUrl);
    setContentPlaceHolderHeight(img.naturalHeight);
    setTabsLoading(true);
    setActiveTab(tabIndex);
  };

  return (
    <div>
      <Tabs
        activeTab={activeTab}
        setActiveTab={(tabIndex, imgUrl) =>
          handleSetActiveTab(tabIndex, imgUrl)
        }
        tabsData={tabsData}
      />
      {tabsLoading && (
        <Grid container minHeight={contentPlaceHolderHeight}>
          <Grid item xs={12}>
            <div style={{ width: '100%' }}></div>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default trackWindowScroll(WhiteboardingTabs);
