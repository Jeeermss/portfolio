import {
  LazyLoadImage,
  trackWindowScroll,
} from 'react-lazy-load-image-component';
import Tabs from '../../components/Tabs/Tabs';

const CareerJourneyTabs = ({ scrollPosition }) => {
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
        />
      ),
    },
  ];

  return (
    <div>
      <Tabs activeTab={0} tabsData={careerJourneyTabsData} sx={{ mb: 15 }} />
    </div>
  );
};

export default trackWindowScroll(CareerJourneyTabs);
