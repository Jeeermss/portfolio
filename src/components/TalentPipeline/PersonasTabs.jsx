import { useState } from 'react';
import { Grid } from '@mui/material';
import {
  LazyLoadImage,
  trackWindowScroll,
} from 'react-lazy-load-image-component';
import Tabs from '../../components/Tabs/Tabs';

import getImageMeta from '../../utils/getImageMeta';

const PersonasTabs = ({ scrollPosition }) => {
  const [personasActiveTab, setPersonasActiveTab] = useState(0);
  const [personasTabsLoading, setPersonasTabsLoading] = useState(false);
  const [contentPlaceHolderHeight, setContentPlaceHolderHeight] = useState(0);

  const personasTabsData = [
    {
      name: 'Job Seekers',
      content: (
        <LazyLoadImage
          scrollPosition={scrollPosition}
          src="images/case_studies/talent_pipeline/personas_job_seekers.svg"
          effect="blur"
          alt="job seekers"
          width="100%"
          afterLoad={() => setPersonasTabsLoading(false)}
        />
      ),
      imgUrl: 'images/case_studies/talent_pipeline/personas_job_seekers.svg',
    },
    {
      name: 'Employee Representatives',
      content: (
        <LazyLoadImage
          scrollPosition={scrollPosition}
          src="images/case_studies/talent_pipeline/personas_employee_representatives.svg"
          effect="blur"
          alt="employee rep"
          width="100%"
          afterLoad={() => setPersonasTabsLoading(false)}
        />
      ),
      imgUrl:
        'images/case_studies/talent_pipeline/personas_employee_representatives.svg',
    },
    {
      name: 'Case Managers',
      content: (
        <LazyLoadImage
          scrollPosition={scrollPosition}
          src="images/case_studies/talent_pipeline/personas_case_managers.svg"
          effect="blur"
          alt="case managers"
          width="100%"
          afterLoad={() => setPersonasTabsLoading(false)}
        />
      ),
      imgUrl: 'images/case_studies/talent_pipeline/personas_case_managers.svg',
    },
  ];

  const handleSetActiveTab = async (tabIndex, imgUrl) => {
    const img = await getImageMeta(imgUrl);
    setContentPlaceHolderHeight(img.naturalHeight);
    setPersonasTabsLoading(true);
    setPersonasActiveTab(tabIndex);
  };

  return (
    <div>
      <Tabs
        activeTab={personasActiveTab}
        setActiveTab={(tabIndex, imgUrl) =>
          handleSetActiveTab(tabIndex, imgUrl)
        }
        tabsData={personasTabsData}
        sx={{ mb: 15 }}
      />
      {personasTabsLoading && (
        <Grid container minHeight={contentPlaceHolderHeight}>
          <Grid item xs={12}>
            <div style={{ width: '100%' }}></div>
          </Grid>
        </Grid>
      )}
    </div>
  );
};

export default trackWindowScroll(PersonasTabs);
