import {
  LazyLoadImage,
  trackWindowScroll,
} from 'react-lazy-load-image-component';
import Tabs from '../../components/Tabs/Tabs';

const PersonasTabs = ({ scrollPosition }) => {
  const personasTabsData = [
    {
      name: 'Job Seekers',
      content: (
        <LazyLoadImage
          scrollPosition={scrollPosition}
          src="images/case_studies/talent_pipeline/personas_job_seekers.webp"
          effect="blur"
          alt="job seekers"
          width="100%"
        />
      ),
      imgUrl: 'images/case_studies/talent_pipeline/personas_job_seekers.webp',
    },
    {
      name: 'Employee Representatives',
      content: (
        <LazyLoadImage
          scrollPosition={scrollPosition}
          src="images/case_studies/talent_pipeline/personas_employee_representatives.webp"
          effect="blur"
          alt="employee rep"
          width="100%"
        />
      ),
      imgUrl:
        'images/case_studies/talent_pipeline/personas_employee_representatives.webp',
    },
    {
      name: 'Case Managers',
      content: (
        <LazyLoadImage
          scrollPosition={scrollPosition}
          src="images/case_studies/talent_pipeline/personas_case_managers.webp"
          effect="blur"
          alt="case managers"
          width="100%"
        />
      ),
      imgUrl: 'images/case_studies/talent_pipeline/personas_case_managers.webp',
    },
  ];

  return (
    <div>
      <Tabs
        activeTab={0}
        tabsData={personasTabsData}
        sx={{ mb: { xs: 9, md: 15 } }}
      />
    </div>
  );
};

export default trackWindowScroll(PersonasTabs);
