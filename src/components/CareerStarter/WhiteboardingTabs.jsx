import {
  LazyLoadImage,
  trackWindowScroll,
} from 'react-lazy-load-image-component';
import Tabs from '../../components/Tabs/Tabs';

const WhiteboardingTabs = ({ scrollPosition }) => {
  const tabsData = [
    {
      name: 'Job Seekers',
      content: (
        <LazyLoadImage
          scrollPosition={scrollPosition}
          src="images/case_studies/career_starter/whiteboarding_job_seekers.webp"
          effect="blur"
          alt="job seekers"
          width="100%"
        />
      ),
      imgUrl:
        'images/case_studies/career_starter/whiteboarding_job_seekers.webp',
    },
    {
      name: 'Employee Representatives',
      content: (
        <LazyLoadImage
          scrollPosition={scrollPosition}
          src="images/case_studies/career_starter/whiteboarding_employer_reps.webp"
          effect="blur"
          alt="employee rep"
          width="100%"
        />
      ),
      imgUrl:
        'images/case_studies/career_starter/whiteboarding_employer_reps.webp',
    },
    {
      name: 'Case Managers',
      content: (
        <LazyLoadImage
          scrollPosition={scrollPosition}
          src="images/case_studies/career_starter/whiteboarding_case_managers.webp"
          effect="blur"
          alt="case managers"
          width="100%"
        />
      ),
      imgUrl:
        'images/case_studies/career_starter/whiteboarding_case_managers.webp',
    },
  ];

  return (
    <div>
      <Tabs activeTab={0} tabsData={tabsData} />
    </div>
  );
};

export default trackWindowScroll(WhiteboardingTabs);
